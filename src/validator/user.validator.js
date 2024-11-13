import Joi from "joi"


export const uservalidate=Joi.object({
    email:Joi.string().min(10).pattern(new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')).required(),
    password:Joi.string().min(5).required(),
    name:Joi.string().min(3).required(),
    role:Joi.string()
})

export const userloginvalidate=Joi.object({
    email:Joi.string().min(10).pattern(new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')).required(),
    password:Joi.string().min(5).required()
})

export const verifyvalidate=Joi.object({
    email:Joi.string().min(10).pattern(new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')).required(),
    otp:Joi.string().required()
})

export const updateadminvalidate=Joi.object({
    email:Joi.string().min(10).pattern(new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')).required(),
    password:Joi.string().min(5).required(),
    role:Joi.string()
})