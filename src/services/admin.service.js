import { User } from "../modules/index.js";
import { statusCodes, errorMessages } from "../utils/constants/index.js";

export const createadmin = async ({ email, password, name, role }) => {
  const currentuser = await User.findOne({ email });


  if (!currentuser) {
    const user = new User({ email, password, name, role });

    await user.save();
    return res.status(statusCodes.CREATED).send("New admin is created");
  } else {
    return "Admin allaqachon mavjud";
  }
};

export const getadmins = async (role) => {
  const result = await User.find({ role: role });
  if (result.length >= 1) {
    return result;
  } else {
    return "Adminlar topilmadi";
  }
};

export const updateadmin = async ({ email, password, role }) => {
  const result = await User.findOne({ email });
  if (!result) {
    return "Yangilanadigan admin topilmadi";
  } else {
    await User.findOneAndUpdate(
      { email: email },
      { password: password, role: role }
    );
    return "Admin yangilandi";
  }
};

export const deleteadmin = async (email) => {
  const result = await User.findOne({ email });
  if (!result) {
    return "O'chiriladigan admin topilmadi";
  } else {
    await User.findOneAndDelete({ email: email });
    return "Admin o'chirildi";
  }
};
