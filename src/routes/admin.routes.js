import express from "express"
import {authGuard,roleGuard,checkadminmiddleware,updateadminmiddleware} from "../middleware/index.js"
import {createAdmincontroller,getAlladminsController,updateadminController,deleteAdmincontrtoller} from "../controllers/index.js"
import {uservalidate,updateadminvalidate} from "../validator/index.js"

export const adminrouter=express.Router()

adminrouter.get("/",getAlladminsController)
adminrouter.post("/",authGuard,roleGuard(["superadmin"]),checkadminmiddleware(uservalidate),createAdmincontroller)
adminrouter.put("/:email",authGuard,roleGuard(["superadmin"]),updateadminmiddleware(updateadminvalidate),updateadminController)
adminrouter.delete("/:email",authGuard,roleGuard(["superadmin"]),deleteAdmincontrtoller)