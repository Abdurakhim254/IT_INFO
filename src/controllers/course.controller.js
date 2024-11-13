import {getcorses,getcoursebyname,createcourse, updatecourse, deletecourse} from "../services/index.js"
import {  ApiError } from "../utils/index.js"

export const getCoursescontroller=async(req,res,next)=>{
    try {
        const result=await getcorses()
        res.status(200).send(result)
    } catch (error) {
        next(new ApiError(error.statusCode, error.message))
    }
}

export const getCourseBynamecontroller=async(req,res,next)=>{
    try {
        const {name}=req.params
        const result=await getcoursebyname(name)
        res.status(200).send(result)
    } catch (error) {
        next(new ApiError(error.statusCode, error.message))
    }
}
export const createcoursecontroller=async(req,res,next)=>{
    try {
        const {name,description}=req.body
        const result=await createcourse({name,description})
        res.status(200).send(result)
    } catch (error) {
        next(new ApiError(error.statusCode, error.message))
    }
}

export const updatecoursecontroller=async(req,res,next)=>{
    try {
        const {name}=req.params
        const {description}=req.body
        const result=await updatecourse({name,description})
        res.status(200).send(result)
    } catch (error) {
        next(new ApiError(error.statusCode, error.message))
    }
}
export const deletecoursecontroller=async(req,res,next)=>{
    try {
        const {name}=req.params
        const result=await deletecourse(name)
        res.status(200).send(result)
    } catch (error) {
        next(new ApiError(error.statusCode, error.message))
    }
}

