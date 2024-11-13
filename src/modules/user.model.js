import mongoose from "mongoose";
import bcrypt  from "bcrypt"


const Userschema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String
    },
    role: {
        type: String,
        enum: ["user", "admin", "superadmin"],
        default: "user"
    },
     isactive:{
        type:Boolean,
        default:false
    }
},
    {
        timestamps: true
    })

Userschema.pre("save", async function () {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(this.password, salt);
    this.password = hashPassword;
});


Userschema.method("compare", function (userPassword) {
    return bcrypt.compare(userPassword, this.password)
})


export const User = mongoose.model("user", Userschema)