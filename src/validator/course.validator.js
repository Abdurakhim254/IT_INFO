import Joi from "joi"


export const coursevalidate=Joi.object({
    name:Joi.string().min(3).required(),
    description:Joi.string().min(5).required()
})

