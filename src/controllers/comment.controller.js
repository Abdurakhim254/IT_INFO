import {createcomment, deletecomment, getallcomments,getcommentbyid, updatecomment} from "../services/index.js"
import {  ApiError } from "../utils/index.js"

export const getAllcommentscontroller=async(req,res,next)=>{
    try {
        const {sort}=req.query
        const result=await getallcomments()
        res.status(200).send(result)
    } catch (error) {
        next(new ApiError(error.statusCode, error.message))
    }
}

export const getcommentByidController=async(req,res,next)=>{
    try {
        const {id}=req.params
        const result=await getcommentbyid(id)
        res.status(200).send(result)
    } catch (error) {
        next(new ApiError(error.statusCode, error.message))
    }
}
export const createCommentcontroller=async(req,res,next)=>{
    try {
        const {id,content}=req.body
        const result=await createcomment({id,content})
        return res.status(400).send(result)
    } catch (error) {
        next(new ApiError(error.statusCode, error.message))
    }
}

export const updateCommentcontroller=async(req,res,next)=>{
    try {
        const {id}=req.params
        const {content}=req.body
        const result=await updatecomment({id,content})
        res.status(200).send(result)
    } catch (error) {
        next(new ApiError(error.statusCode, error.message))
    }
}
export const deleteCommentcontroller=async(req,res,next)=>{
    try {
        const {id}=req.params
        const result=await deletecomment(id)
        res.status(200).send(result)
    } catch (error) {
        next(new ApiError(error.statusCode, error.message))
    }
}