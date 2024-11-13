import  {Course} from "../modules/index.js"

export const getcorses=async()=>{
    const res=await Course.find()
    if(res.length>=1){
        return res
    }else{
        return "Courselar topilmadi"
    }
}
export const getcoursebyname=async(name)=>{
    const res=await Course.findOne({name})
    if(res){
        return res
    }else{
        return "Course topilmadi"
    }
}
export const createcourse=async({name,description})=>{
    const result=await Course.findOne({name})
    if(!result){
        const data=new Course({name,description})
        await data.save()
        return "Course yaratildi"
    }else{
        return "Course allaqachon mavjud"
    }
}

export const updatecourse=async({name,description})=>{
    const result=await Course.findOne({name})
    if(result){
        await Course.findOneAndUpdate({name:name},{name:name,description:description})
        return "Course yangilandi"
    }else{
        return "Yangilanadigan Course mavjud emas"
    }
}
export const deletecourse=async(name)=>{
    const result=await Course.findOne({name})
    if(result){
        await Course.findOneAndDelete({name:name})
        return "Course o'chirildi"
    }else{
        return "O'chiriladigan Course mavjud emas"
    }
}
