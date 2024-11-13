import express from "express"
import { authGuard, roleGuard } from "../middleware/index.js"
import { userController,getAllusers,getUserbyemail,deleteUserbyemail,updateuserbyemail } from "../controllers/index.js"


export const userrouter = express.Router()

userrouter.get("/",getAllusers)
userrouter.get("/:email",getUserbyemail)
userrouter.post("/profile", authGuard, userController)
userrouter.put("/:email",authGuard,roleGuard(["user","admin","superadmin"]),updateuserbyemail)
userrouter.delete("/:email",authGuard,roleGuard(["user","admin","superadmin"]),deleteUserbyemail)