import express from "express"
import {getarticles,getarticlebytitle,createarticle,updatearticle,deletearticle} from "../controllers/index.js"
import {authGuard,roleGuard,updatearticledatamiddleware,checkarticledatamiddleware} from "../middleware/index.js"
import {articlevalidate} from "../validator/index.js"

export const articlerouter=express.Router()

articlerouter.get("/",getarticles)
articlerouter.get("/:title",getarticlebytitle)
articlerouter.post("/",authGuard,roleGuard(["admin","superadmin"]),checkarticledatamiddleware(articlevalidate),createarticle)
articlerouter.put("/:title",authGuard,roleGuard(["admin","superadmin"]),updatearticledatamiddleware(articlevalidate),updatearticle)
articlerouter.delete("/:title",authGuard,roleGuard(["admin","superadmin"]),deletearticle)