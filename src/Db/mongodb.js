import mongoose from "mongoose"
import dotenv from "dotenv"
import { logger } from "../utils/index.js"

dotenv.config()
export const connectMongodb=async()=>{
    try{
        mongoose.connect(process.env.MONGO_URI)
        logger.info("Mongodb Connected");
    }catch(error){
        throw new Error(error)
    }
}
