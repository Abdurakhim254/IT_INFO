import nodemailer from "nodemailer"
import dotenv from "dotenv"
dotenv.config()

const transporter = nodemailer.createTransport({
    service:"gmail",
    auth: {
        user: "toxirmalk@gmail.com",
        pass: process.env.SMPT_PASS
    }
})


export const sendMail=async(to,subject,text)=>{
    transporter.sendMail(
        {
            from: "toxirmak@gmail.com",
            to,
            subject,
            text
        }
        ,function(error,info){
        if(error){
            console.log(error)
        }else{
            console.log("Email sent: "+info.response)
        }
})   
}
// await sendMail("toxirmak@gmail.com","qwdqwd","wdw")









        // const mailOptions = {
        //     from: "toxirmak@gmail.com",
        //     // to: "ajavohir545@gmail.com",
        //     to: "rayadunia2021@gmail.com",
        //     subject: "Sending email using node js",
        //     text: "Salom shodlik"
        // }