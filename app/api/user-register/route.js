import User from "@/lib/models/User";
import connectMongoDB from "@/lib/mongodb";
import NextResponse  from "next/server";
import bcrypt from "bcryptjs";


export async function POST(req) {
  try {
    const {name , username, email , password } = await req.json();
    const hashedPassword = await bcrypt.hash(password , 6)
    await User.create({
        name,
        email,
        password : hashedPassword,
        username,
    });
    return NextResponse.json({message : "user created 🫡🫡"}, {status : "201"})
  } catch (error) {
    console.log("can not create new user 😔😔", error);
  }
}

