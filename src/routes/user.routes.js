import express from "express"
import { authGuard, roleGuard,uservalidator } from "../middleware/index.js"
import { userController,getAllusers,getUserbyemail,deleteUserbyemail,updateuserbyemail } from "../controllers/index.js"
import {uservalidate} from "../validator/index.js"

export const userrouter = express.Router()

userrouter.get("/",getAllusers)
userrouter.get("/:email",getUserbyemail)
userrouter.post("/profile", authGuard, userController)
userrouter.put("/:email",authGuard,roleGuard(["user","admin","superadmin"]),uservalidator(uservalidate),updateuserbyemail)
userrouter.delete("/:email",authGuard,roleGuard(["user","admin","superadmin"]),deleteUserbyemail)