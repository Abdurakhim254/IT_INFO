import {Comment} from "../modules/index.js"

export const getallcomments=async()=>{
    const result=await Comment.find()
    if(result.length>=1){
        return result
    }else{
        return "Commentlar topilmadi"
    }
}

export const getcommentbyid=async(id)=>{
    const result=await Comment.findOne({id})
    if(result){
        return result
    }else{
        return "Comment topilmadi"
    }
}

export const createcomment=async({id,content})=>{
    const Data=await Comment.findOne({id})
    if(!Data){
        const result=new Comment({id,content})
        await result.save()
        return "Comment yaratildi"
    }else{
        return "Comment mavjud"
    }
}
export const updatecomment=async({id,content})=>{
    const data=await Comment.findOne({id})
    if(!data){
       return res.status(404).send("Yangilanadigan Comment mavjud emas")
    }else{
        await Comment.findOneAndUpdate({id:id},{content:content})
        return res.status(200).send("Comment yangilandi")
    }
}
export const deletecomment=async(id)=>{
    const data=await Comment.findOne({id})
        if(!data){
           return res.status(404).send("O'chiriladigan Comment mavjud emas")
        }else{
            await Comment.findOneAndDelete({id:id})
            return res.status(200).send("Comment o'chirildi")
        }
}