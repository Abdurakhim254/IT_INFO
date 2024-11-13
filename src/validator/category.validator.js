import Joi from "joi"


export const categoryvalidate=Joi.object({
    name:Joi.string().min(3).required(),
    description:Joi.string().required()
})

