import Joi from "joi"


export const commentvalidate=Joi.object({
    id:Joi.number().integer().min(1).required(),
    content:Joi.string().min(5).required()
})

