import mongoose from "mongoose";

let isConnected = false;

export const connectMongoDB = async () => {
  mongoose.set("strictQuery", true) ;

  if (!process.env.DATABASE_URL) return console.log(" missing Mongodb URL 😒😒😒");

  if (isConnected) {
    console.log(" MongoDB connection is already 😏😏😏💚");
    return;
  }

  try {
    await mongoose.connect(process.env.DATABASE_URL);

    isConnected = true;
    console.log("Mongodb is connected 😍😍😍💚");
    
  } catch (error) {
    console.log("you can not connect to Mongodb 😔😔😭😭", error);
    
  }
  
}