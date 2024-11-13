import jwt from "jsonwebtoken";
import { statusCodes, errorMessages } from "../utils/constants/index.js";
import { ApiError } from "../utils/errorHandler/index.js";
import dotenv from "dotenv";
import { logger } from "../utils/winston.js";
import {loginservice,updatepassword, refreshtokenservice, register, verifyservice, sendotp} from "../services/index.js"
dotenv.config();

export const registerController = async (req, res, next) => {
  try {
    const { email, name, password,role } = req.body;
    const result=await register(req.body)
    res.status(200).send(result)
  } catch (error) {
    logger.error(error)
    next(new ApiError(error.statusCode, error.message));
  }
};

export const loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const result=await loginservice({email,password})
    res.status(200).send(result)
  } catch (error) {
    logger.error(error)
    next(new ApiError(error.statusCode, error.message));
  }
};

export const refreshtokencontroller = async (req, res, next) => {
  try {
    const { token } = req.body;
    const result=await refreshtokenservice(token)
    res.send(result)
  } catch (error) {
    next(new ApiError(error.statusCode, error.message));
  }
};

export const verifycontroller = async (req, res, next) => {
  try {
    const { otp, email } = req.body;
    const result=await verifyservice({otp,email})
    res.status(200).send(result)

  } catch (error) {
    next(new ApiError(error.statusCode, error.message));
  }
};
export const sendotpController=async(req,res,next)=>{
  try {
    const {email}=req.body
    const result=await sendotp(email)
    res.status(200).send(result)
  } catch (error) {
    next(new ApiError(error.statusCode, error.message));

  }
}


export const foreignpasswordcontroller=async(req,res,next)=>{
  try { 
    const {password,email,otp}=req.body
    const result=await updatepassword(password,email,otp)
    res.status(200).send(result)
  } catch (error) {
    next(new ApiError(error.statusCode, error.message));
  }
}