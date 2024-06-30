"use server";
import User from "../models/User";
import Password from "../models/Password";
import connectDB from "../db/connectDB";


const crypto = require("crypto");

const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY;

const algorithm = "aes-256-cbc";
const key = crypto
  .createHash("sha256")
  .update(String(ENCRYPTION_KEY))
  .digest("base64")
  .substr(0, 32);

const encrypt = (text) => {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  return {
    iv: iv.toString("hex"),
    encryptedData: encrypted,
  };
};

const decrypt = (encryptedData, iv) => {
  const decipher = crypto.createDecipheriv(
    algorithm,
    key,
    Buffer.from(iv, "hex")
  );
  let decrypted = decipher.update(encryptedData, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
};

export const findUser = async ({ username }) => {
  try {
    await connectDB();
    let user = await User.findOne({ username });
    if (user) {
      return { status: "Ok", user };
    } else {
      return { status: "Error", user: null };
    }
  } catch (error) {
    return { status: "Error", error };
  }
};

export const submitForm = async (data) => {
  try {
    await connectDB();
    const { site, username, password, userData , provider  } = data;

    const encryptedSite = encrypt(site);
    const encryptedUsername = encrypt(username);
    const encryptedPassword = encrypt(password);

    await Password.create({
      site: JSON.stringify(encryptedSite),
      username: JSON.stringify(encryptedUsername),
      password: JSON.stringify(encryptedPassword),
      userData,
      provider
    });

    return { status: "OK", message: "Database Created" };
  } catch (error) {
    console.error("Error saving form data:", error);
    return { status: "ERROR", message: "Server error, please try again" };
  }
};

export const fetchpassword = async (userName,provider) => {
  try {
    await connectDB();
    let passwords = await Password.find({
      userData: userName,
      provider: provider,
    });

    let decryptedPasswords = passwords.map((data) => {
      const site = JSON.parse(data.site);
      const username = JSON.parse(data.username);
      const password = JSON.parse(data.password);

      return {
        site: decrypt(site.encryptedData, site.iv),
        username: decrypt(username.encryptedData, username.iv),
        password: decrypt(password.encryptedData, password.iv),
        _id: data._id
      };
    });

    return decryptedPasswords;
  } catch (error) {
    console.error("Error fetching passwords:", error);
    return { status: "ERROR", message: "Server error, please try again" };
  }
};

export const editPassword = async (data, id) => {
  try {
    await connectDB();
    const { site, username, password } = data;

    
    const updatedEncryptedSite = encrypt(site);
    const updatedEncryptedUsername = encrypt(username);
    const updatedEncryptedPassword = encrypt(password);

    
    const updatedDocument = await Password.findByIdAndUpdate(
      id,
      {
        site: JSON.stringify(updatedEncryptedSite),
        username: JSON.stringify(updatedEncryptedUsername),
        password: JSON.stringify(updatedEncryptedPassword),
      },
      { new: true }
    );

    return { status: "OK", data: updatedDocument };
  } catch (error) {
    console.error("Error updating password:", error);
    return { status: "ERROR", message: "Server error, please try again" };
  }
};

export const deletePassword = async (id) => {
  try {
    await connectDB();
    const updatedDocument = await Password.findByIdAndDelete(id);
    return { status: "OK", data: updatedDocument };
  } catch (error) {
    console.error("Error deleting password:", error);
    return { status: "ERROR", message: "Server error, please try again" };
  }
};
