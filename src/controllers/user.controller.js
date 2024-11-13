import {
  deleteuser,
  getusers,
  userservice,
  updateUserbyemail,
  getuserbyemail,
} from "../services/index.js";
import { ApiError } from "../utils/index.js";

export const userController = async (req, res, next) => {
  try {
    const payload = req.user;
    const result = await userservice(payload);
    res.status(200).send(result);
  } catch (error) {
    next(new ApiError(error.statusCode, error.message));
  }
};

export const getAllusers = async (req, res, next) => {
  try {
    const result = await getusers();

    res.status(200).send(result);
  } catch (error) {
    next(new ApiError(error.statusCode, error.message));
  }
};

export const getUserbyemail = async (req, res, next) => {
  try {
    const { email } = req.params;
    const result = await getuserbyemail({ email });
    if (!result) {
      return res.status(300).send("User topilmadi");
    } else {
      return res.status(200).send(result);
    }
  } catch (error) {
    next(new ApiError(error.statusCode, error.message));
  }
};

export const deleteUserbyemail = async (req, res, next) => {
  try {
    const { email } = req.params;
    const result = await deleteuser(email);
    res.status(200).send(result);
  } catch (error) {
    next(new ApiError(error.statusCode, error.message));
  }
};

export const updateuserbyemail = async (req, res, next) => {
  try {
    const { email } = req.params;
    const { name, password, role } = req.body;
    const result = await updateUserbyemail({ email, name, password, role });
    res.status(200).send(result);
  } catch (error) {
    next(new ApiError(error.statusCode, error.message));
  }
};
