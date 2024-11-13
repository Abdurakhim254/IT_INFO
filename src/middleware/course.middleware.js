export const checkcoursedatamiddleware=(schema)=>{
    return (req,res,next)=>{
        const {name,description}=req.body
        const {error}=schema.validate({name,description})
        if(error){
            res.status(400).send("Ma'lumot toliqmas")
        }else{
            next()
        }
    }
}
export const updatecoursemiddleware=(schema)=>{
    return (req,res,next)=>{
        const {name}=req.params
        const {description}=req.body
        const {error}=schema.validate({name,description})
        if(error){
            res.status(400).send("Ma'lumot toliqmas")
        }else{
            next()
        }
    }
}