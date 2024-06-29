import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const passwordSchema = new Schema({
   
    site: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    userData: {type: String, required:true},
    provider: {type: String, required:true},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Password = mongoose.models.Password || model("Password", passwordSchema);

export default Password;
