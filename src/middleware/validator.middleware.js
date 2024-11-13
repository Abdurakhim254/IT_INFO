import { logger } from "../utils/winston.js"
export const uservalidator=(schema)=>{
    return (req,res,next)=>{
        const{email}=req.params
        const {password,role,name}=req.body
        const {error}=schema.validate({email,password,role,name})
        if(error){
            logger.error("Ma'lumot toliqmas")
            res.status(400).send("Ma'lumot to'liqmas")
        }else{
            next()
        }
    }
}

export const checkadminmiddleware=(schema)=>{
    return (req,res,next)=>{
        const {password,role,name,email}=req.body
        const {error}=schema.validate({email,password,role,name})
        if(error){
            logger.error("Ma'lumot toliqmas")
            res.status(400).send("Ma'lumot to'liqmas")
        }else{
            next()
        }
    }
}
export const updateadminmiddleware=(schema)=>{
    return (req,res,next)=>{
        const {email}=req.params
        const {password,role}=req.body
        const {error}=schema.validate({email,password,role})
        if(error){
            logger.error("Ma'lumot toliqmas")
            res.status(400).send("Ma'lumot to'liqmas")
        }else{
            next()
        }
    }
}