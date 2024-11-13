import { Router } from "express";
import { foreignpasswordcontroller, loginController, refreshtokencontroller, registerController, sendotpController, verifycontroller } from "../controllers/index.js";
import {uservalidate,userloginvalidate,verifyvalidate} from "../validator/index.js"
import { authGuard, roleGuard,registermiddleware,loginmiddleware ,verifymiddleware} from "../middleware/index.js";


export const authRouter = new Router();

authRouter.post("/register",registermiddleware(uservalidate), registerController);
authRouter.post("/login",loginmiddleware(userloginvalidate), loginController);
authRouter.post("/refreshtoken",refreshtokencontroller)
authRouter.post("/sendotp",sendotpController)
authRouter.post("/verify",verifymiddleware(verifyvalidate),verifycontroller)
authRouter.post("/foreignpassword",authGuard,roleGuard(["admin","superadmin"]),foreignpasswordcontroller)
