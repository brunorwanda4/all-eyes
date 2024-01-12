import User from "@/lib/models/User";
import { connectMongoDB } from "@/lib/mongodb"
import { NextResponse } from "next/server";

export  const GET = async () => {
  await connectMongoDB();
  const users = await User.find();
  return NextResponse.json({users})
}