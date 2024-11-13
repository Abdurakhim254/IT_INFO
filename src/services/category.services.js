import { Cate } from "../modules/index.js";

export const getallcategory = async () => {
  const result = await Cate.find();
  if (result.length >= 1) {
    return result;
  } else {
    return "Categorylar topilmadi";
  }
};

export const getcatebyname = async (name) => {
  const result = await Cate.findOne({ name });
  if (result) {
    return result;
  } else {
    return "Category topilmadi";
  }
};

export const createCategory = async ({ name, description }) => {
  const data = await Cate.findOne({ name });
  if (!data) {
    const result = new Cate({ name, description });
    await result.save();
    return "Category yaratildi";
  } else {
    return "Category allaqachon yaratilgan";
  }
};
export const updateCategory = async ({ needname,name,description }) => {
    const data=await Cate.findOne({name:needname})
    if(!data){
        return "Yangilanadigan Categoriya mavjud emas"
    }
    await Cate.updateOne({name:needname},{name:name,description:description})
    return "Category yangilandi"
};
export const deleteCategory = async (name) => {
  const data = await Cate.findOne({ name });
  if (!data) {
    return "O'chiriladigan Comment mavjud emas";
  } else {
    await Cate.findOneAndDelete({ name: name });
    return "Comment o'chirildi";
  }
};
