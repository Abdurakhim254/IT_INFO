import { Article } from "../modules/index.js";

export const getArticles = async () => {
  const result = await Article.find();
  if (result.length >= 1) {
    return result;
  } else {
    return "Articlelar topilmadi";
  }
};

export const getArticlebytitle = async (title) => {
  const result = await Article.findOne({ title:title});
  if (!result) {
    return "Article topilmadi";
  } else {
    return result;
  }
};

export const createArticle = async ({ title, content }) => {
  const data = await Article.find({ title: title });
  if (data.length >= 1) {
    return "Bu article allaqachon mavjud";
  }
  const result = new Article({ title, content });
  await result.save();
  return "Article yaratildi";
};

export const updateArticle = async ({ titlename, title, content }) => {
  const result = await Article.findOne({ title: titlename });
  if (!result) {
    return "Yangilanadigan ma'lumot yo'q";
  }
  await Article.updateOne(
    { title: titlename },
    { title: title, content: content }
  );
  return "Article yangilandi";
};

export const deleteArticle=async(title)=>{
    const result=await Article.findOne({title})
    if(!result){
        return "O'chiriladigan ma'lumot yo'q"
    }
    await Article.deleteOne({title})
    return "Article o'chirildi" 
}