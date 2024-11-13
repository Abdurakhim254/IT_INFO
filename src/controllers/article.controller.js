import {ApiError} from "../utils/errorHandler/index.js"
import { getArticles,getArticlebytitle, createArticle, updateArticle, deleteArticle } from "../services/index.js"

export const getarticles=async(req,res,next)=>{
    try {
        const result = await getArticles()
        res.status(200).send(result)
    } catch (error) {
        next(new ApiError(error.statusCode,error.message))
    }
}
export const getarticlebytitle=async(req,res,next)=>{
    try {
        const {title}=req.params
        const result = await getArticlebytitle(title)
        res.status(200).send(result)
    } catch (error) {
        next(new ApiError(error.statusCode,error.message))
    }
}
export const createarticle=async(req,res,next)=>{
    try {
        const {title,content}=req.body
        const result=await createArticle({title,content})
        res.status(200).send(result)
    } catch (error) {
        next(new ApiError(error.statusCode,error.message))
    }
}
export const updatearticle=async(req,res,next)=>{
    try {
        const titlename=req.params.title
        const {title,content}=req.body
        const result=await updateArticle({titlename,title,content})
        res.status(200).send(result)
    } catch (error) {
        next(new ApiError(error.statusCode,error.message))
    }
}

export const deletearticle=async(req,res,next)=>{
    try {
        const {title}=req.params
        console.log(title)
        const result=await deleteArticle(title)
        res.status(200).send(result)
    } catch (error) {
        next(new ApiError(error.statusCode,error.message))
    }
}