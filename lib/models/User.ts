import mongoose, { Document, Schema } from "mongoose";

interface IUser extends Document {
  username: string;
  avatar: string;
  email: string;
  name: string;
  family?: mongoose.Schema.Types.ObjectId[];
  news?: mongoose.Schema.Types.ObjectId[];
  messages?: mongoose.Schema.Types.ObjectId[];
}

const UserSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    family: {
      type: [Schema.Types.ObjectId],
      ref: "Family",
    },
    avatar : {
      type: String,
      required: false,
    },
    news: {
      type: [Schema.Types.ObjectId],
      ref: "News",
    },
    messages: {
      type: [Schema.Types.ObjectId],
      ref: "Message",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;
