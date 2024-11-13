export const checkarticledatamiddleware=(schema)=>{
    return (req,res,next)=>{
        const {title,content}=req.body
        const {error}=schema.validate({title,content})
        if(error){
            res.status(400).send("Ma'lumot to'liqmas")
        }else{
            next()
        }
    }
}

export const updatearticledatamiddleware=(schema)=>{
    return (req,res,next)=>{
        const {title}=req.params
        const {content}=req.body
        const {error}=schema.validate({title,content})
        if(error){
            res.status(400).send("Ma'lumot to'liqmas")
        }else{
            next()
        }
    }
}