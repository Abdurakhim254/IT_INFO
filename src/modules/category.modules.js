import mongoose from "mongoose";

const Cateschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
    },
    {
        timestamps: true
    })

export const Cate = mongoose.model("category", Cateschema)