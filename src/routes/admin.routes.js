import express from "express"
import {authGuard,roleGuard} from "../middleware/index.js"
import {createAdmincontroller,getAlladminsController,updateadminController,deleteAdmincontrtoller} from "../controllers/index.js"
export const adminrouter=express.Router()

adminrouter.get("/",getAlladminsController)
adminrouter.post("/",authGuard,roleGuard(["superadmin"]),createAdmincontroller)
adminrouter.put("/:email",authGuard,roleGuard(["superadmin"]),updateadminController)
adminrouter.delete("/:email",authGuard,roleGuard(["superadmin"]),deleteAdmincontrtoller)