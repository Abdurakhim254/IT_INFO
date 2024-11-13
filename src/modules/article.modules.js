import mongoose from "mongoose";

const Articleschema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    }
    },
    {
        timestamps: true
    })

export const Article = mongoose.model("article", Articleschema)