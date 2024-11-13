import {
  createadmin,
  deleteadmin,
  getadmins,
  updateadmin,
} from "../services/index.js";
import { ApiError } from "../utils/errorHandler/index.js";
export const createAdmincontroller = async (req, res, next) => {
  try {
    const { email, password, name, role } = req.body;
    const result = await createadmin({ email, password, name, role });
    res.status(200).send(result);
  } catch (error) {
    next(new ApiError(error.statusCode, error.message));
  }
};
export const getAlladminsController = async (req, res, next) => {
  try {
    const result = await getadmins("admin");
    res.status(200).send(result);
  } catch (error) {
    next(new ApiError(error.statusCode, error.message));
  }
};
export const updateadminController = async (req, res, next) => {
  try {
    const { email } = req.params;
    const { password, role } = req.body;
    const result = await updateadmin({ email, password, role });
    res.status(200).send(result);
  } catch (error) {
    next(new ApiError(error.statusCode, error.message));
  }
};
export const deleteAdmincontrtoller = async (req, res, next) => {
  try {
    const { email } = req.params;
    const result = await deleteadmin(email);
    res.status(200).send(result);
  } catch (error) {
    next(new ApiError(error.statusCode, error.message));
  }
};
