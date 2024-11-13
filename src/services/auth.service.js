import jwt from "jsonwebtoken";
import { User, OTP } from "../modules/index.js";
import { otpGenerator, sendMail } from "../helpers/index.js";
import { statusCodes, errorMessages } from "../utils/constants/index.js";
import dotenv from "dotenv";
import {genSalt,hash} from "bcrypt"
dotenv.config();

export const register = async ({ email, password, name, role }) => {
  const currentuser = await User.findOne({ email });
  console.log(currentuser);

  if (!currentuser) {
    const otp = otpGenerator();

    await sendMail(email, "OTP", `This is your OTP ${otp}`);

    const user = new User({ email, name, password, role });

    const db_otp = new OTP({
      user_id: user._id,
      otp_code: otp,
    });
    await db_otp.save();
    await user.save();
    console.log(user);
    return "created";
  }

  return errorMessages.EMAIL_ALREADY_EXISTS;
};

export const loginservice = async ({ email, password }) => {
  const currentuser = await User.findOne({ email });

  console.log(currentuser);

  if (!currentuser) {
    return "USER NOT FOUND";
  }
  const passwordIsequal = await currentuser.compare(password);

  if (!passwordIsequal) {
    return "USER NOT FOUND";
  }
  const payload = {
    sub: email,
    role: currentuser.role,
  };

  const accessSecretKey = process.env.JWT_ACCESS_SECRET;
  const refreshSecretKey = process.env.JWT_REFRESH_SECRET;

  const accessToken = jwt.sign(payload, accessSecretKey, {
    expiresIn: process.env.JWT_ACCESS_EXPIRES_IN,
  });
  const refreshToken = jwt.sign(payload, refreshSecretKey, {
    expiresIn: process.env.JWT_REFRESH_EXPIRES_IN,
  });

  return {
    accessToken,
    refreshToken,
  };
};

export const refreshtokenservice = async (token) => {
  let accessToken=""
  jwt.verify(token, process.env.JWT_ACCESS_SECRET, (error, decode) => {
    if (error)
      throw new Error(statusCodes.FORBIDDEN, errorMessages.FORBIDDEN);

    // logger.info({ decode });

    accessToken = jwt.sign(
      {
        sub: decode.sub,
        role: decode.role,
      },
      process.env.JWT_ACCESS_SECRET,
      {
        expiresIn: process.env.JWT_ACCESS_EXPIRES_IN,
      }
    );
  });
  return { accessToken, refreshToken: token };
};

export const verifyservice = async ({ otp, email }) => {
  const currentuser = await User.findOne({ email });

  const currentotp = await OTP.findOne({ user_id: currentuser._id });

  const isEqual = currentotp.verify(otp);
  if (!isEqual) {
    return "OTP is not valid";
  }

  await OTP.deleteOne({ user_id: currentuser._id });
  await User.updateOne(
    { email },
    {
      isactive: true,
    }
  );

  return "user is actived";
};
export const sendotp = async (email) => {
  const otp = otpGenerator();
  await sendMail(email, "OTP", `This is your OTP ${otp}`);
  return "Emailingizga qarang";
};

export const updatepassword = async (password, email, otp) => {
  const result = await User.findOne({ email });
  if (!result) {
    return "Yangilanadigan Password ma'lumotlari mavjud emas";
  }
  const Otp = new OTP({
    otp_code: otp,
    user_id: result._id,
  });
  const salt=await genSalt(10)
  const hashpassword=await hash(password,salt)
  await Otp.save();
  await User.findOneAndUpdate({ email: email }, { password: hashpassword });
  return "Password yangilandi";
};
