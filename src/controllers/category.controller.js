import {getallcategory, getcatebyname,deleteCategory,updateCategory,createCategory} from "../services/index.js"

import {  ApiError } from "../utils/index.js"

export const createcategory=async(req,res,next)=>{
    try {
        const {name,description}=req.body
        const result=await createCategory({name,description})
        res.status(200).send(result)
    } catch (error) {
        next(new ApiError(error.statusCode,error.message))
    }
}

export const getallCategory=async(req,res,next)=>{
    try {
        const result = await getallcategory()
        res.status(200).send(result)
    } catch (error) {
        next(new ApiError(error.statusCode,error.message))
    }
}
export const getcategorybyname=async(req,res,next)=>{
    try {
        const {name}=req.params
        const result = await getcatebyname(name)
        res.status(200).send(result)
    } catch (error) {
        next(new ApiError(error.statusCode,error.message))
    }
}
export const updatecategory=async(req,res,next)=>{
    try {
        const needname=req.params.name
        const {name,description}=req.body
        const result=await updateCategory({needname,name,description})
        res.status(200).send(result)
    } catch (error) {
        next(new ApiError(error.statusCode,error.message))
    }
}
export const deletecategory=async(req,res,next)=>{
    try {
        const {name}=req.params
        const result=await deleteCategory(name)
        res.status(200).send(result)
    } catch (error) {
        next(new ApiError(error.statusCode,error.message))
    }
}