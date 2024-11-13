import express from "express"
import {authGuard,roleGuard,checkcoursedatamiddleware,updatecoursemiddleware} from "../middleware/index.js"
import {getCoursescontroller,getCourseBynamecontroller,createcoursecontroller,updatecoursecontroller,deletecoursecontroller} from "../controllers/index.js"
import {coursevalidate} from "../validator/index.js"
export const courserouter=express.Router()

courserouter.get("/",getCoursescontroller)
courserouter.get("/:name",getCourseBynamecontroller)
courserouter.post("/",authGuard,roleGuard(["admin","superadmin"]),checkcoursedatamiddleware(coursevalidate),createcoursecontroller)
courserouter.put("/:name",authGuard,roleGuard(["admin","superadmin"]),updatecoursemiddleware(coursevalidate),updatecoursecontroller)
courserouter.delete("/:name",authGuard,roleGuard(["admin","superadmin"]),deletecoursecontroller)

