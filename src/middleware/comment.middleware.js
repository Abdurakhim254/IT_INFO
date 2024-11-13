import { logger } from "../utils/winston.js"
export const checkcommentdatamiddleware=(schema)=>{
    return (req,res,next)=>{
        const{id,content}=req.body
        const{error}=req.body
        if(error){
            logger.error("Permission Denied")
            res.status(400).send("Ma'lumot toliqmas")
        }else{
            next()
        }
    }
}
export const updatecommentdatamiddleware=(schema)=>{
    return (req,res,next)=>{
        const {id}=+req.params
        const{content}=req.body
        const{error}=schema.validate({id,content})
        if(error){
            logger.error("Permission Denied")
            res.status(400).send("Ma'lumot toliqmas")
        }else{
            next()
        }
    }
}
