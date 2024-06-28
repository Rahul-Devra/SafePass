//Password.js
import mongoose from "mongoose";
import { Schema, model } from "mongoose";

// Define the schema
const passwordSchema = new Schema({
   
    site: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    userData: {type: String, required:true},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

// Check if the model already exists before defining it
const Password = mongoose.models.Password || model("Password", passwordSchema);

export default Password;
