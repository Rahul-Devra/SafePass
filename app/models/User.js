
import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  email: { type: String, required: true },
  username: { type: String, required: true },
  provider: {type: String, required:true},
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.models.User || model("User", UserSchema);

export default User;