import express from "express"
import { authGuard, roleGuard,checkcommentdatamiddleware,updatecommentdatamiddleware } from "../middleware/index.js"
import { createCommentcontroller, deleteCommentcontroller, getAllcommentscontroller,getcommentByidController, updateCommentcontroller} from "../controllers/index.js"
import {commentvalidate} from "../validator/index.js"

export const commentrouter = express.Router()

commentrouter.get("/", getAllcommentscontroller)
commentrouter.get("/:id", getcommentByidController)
commentrouter.post("/",authGuard,roleGuard(["admin","superadmin"]),checkcommentdatamiddleware(commentvalidate),createCommentcontroller)
commentrouter.put("/:id",authGuard,roleGuard(["admin","superadmin"]),updatecommentdatamiddleware(commentvalidate),updateCommentcontroller)
commentrouter.delete("/:id",authGuard,roleGuard(["admin","superadmin"]),deleteCommentcontroller)