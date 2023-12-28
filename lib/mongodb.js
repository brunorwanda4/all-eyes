import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("connect to mongodb database 😶‍🌫️😶‍🌫️");
  } catch (error) {
    console.log("can not connect to database 😭😭");
  }
}

export default connectMongoDB;