import mongoose, { Document, Schema } from "mongoose";

const userSchema = new mongoose.Schema({
  id: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  image: { type: String },
  phoneNumber: { type: String },
  socialAccount: { type: String },
  post: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Posts",
    },
  ],
  family: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Families",
    },
  ],
  bio: { type: String },
  messages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Messages",
    },
  ],
});

const UserSchemaDB = mongoose.models.User || mongoose.model("User", userSchema);

export default UserSchemaDB;
