import mongoose from "mongoose";
const commentSchema=new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    content:{
        type:String,
        required:true
    }},
    {
        timestamps:true
    
    }
)

export const Comment=mongoose.model("comment",commentSchema)