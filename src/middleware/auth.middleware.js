import jwt from "jsonwebtoken";
import dotenv from "dotenv"
import {uservalidate} from "../validator/index.js"
dotenv.config()

export const authGuard = (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(409).send("token not found");
    }                                                                                                                                          

    const [type, token] = req.headers.authorization?.split(" ");

    if (type !== "Bearer" || !token) {
      return res.status(409).send("Not valid data");
    }                                                           

    jwt.verify(token, process.env.JWT_ACCESS_SECRET, (err, payload) => {
      if (err) {
        return res.status(403).send("Forbidden");
      }
      req.user = payload;
      console.log(payload);
      
      next();
    });
  } catch (error) {
    next(error);
  }
};
export const registermiddleware=(schema)=>{
  return (req,res,next)=>{
    const {email,password,role,name,isactive}=req.body
    const {error}=schema.validate({email,password,role,name})
    if(error){
      res.status(400).send("Ma'lumot yetarlimas")
    }else{
      next()
    }
  }
}
export const loginmiddleware=(schema)=>{
  return (req,res,next)=>{
    const {email,password}=req.body
    const {error}=schema.validate({email,password})
    if(error){
      res.status(400).send("Ma'lumot yetarlimas")
    }else{
      next()
    }
  }
}

export const verifymiddleware=(schema)=>{
  return (req,res,next)=>{
    const {otp,email}=req.body
    const {error}=schema.validate({otp,email})
    if(error){
      res.status(400).send("Ma'lumot yetarlimas")
    }else{
      next()
    }
  }
}