import Joi from "joi"


export const articlevalidate=Joi.object({
    title:Joi.string().min(5).required(),
    content:Joi.string().required()
})