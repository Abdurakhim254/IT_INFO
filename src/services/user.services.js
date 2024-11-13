import { User } from "../modules/index.js";

export const userservice = async (payload) => {
  const currentuser = await User.findOne({ email: payload.sub }).select({
    password: 0,
  });
  console.log(currentuser);
  if (!currentuser) {
    return "User topilmadi";
  }

  return currentuser;
};

export const getusers = async () => {
  const result = await User.find();
  if (result.length >= 1) {
    return result;
  } else {
    return "Userlar topilmadi";
  }
};

export const getuserbyemail = async ({email}) => {
  const result = await User.findOne({ email });
  if (!result) {
    return "User topilmadi";
  } else {
    return result;
  }
};

export const deleteuser = async (email) => {
  const result = await User.findOne({ email });
  if (!result) {
    return "O'chiriladigan User topilmadi";
  } else {
    await User.findOneAndDelete({ email: email });
    return "User oc'hirilidi";
  }
};

export const updateUserbyemail = async ({ email, name, password, role }) => {
  const result = await User.findOne({ email });
  if (!result) {
    return "Yangilanadigan ma'lumot yo'q";
  }
  await User.updateOne(
    { email: email },
    { name: name, password: password, role: role }
  );
  return "User yangilandi";
};
