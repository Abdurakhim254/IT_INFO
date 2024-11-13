import express from "express"
import {getallCategory,getcategorybyname,createcategory,updatecategory,deletecategory} from "../controllers/index.js"
import {authGuard, roleGuard} from "../middleware/index.js"

export const categoryrouter=express.Router()

categoryrouter.get("/",getallCategory)
categoryrouter.get("/:name",getcategorybyname)
categoryrouter.post("/",authGuard,roleGuard(["admin","superadmin"]),createcategory)
categoryrouter.put("/:name",authGuard,roleGuard(["admin","superadmin"]),updatecategory)
categoryrouter.delete("/:name",authGuard,roleGuard(["admin","superadmin"]),deletecategory)