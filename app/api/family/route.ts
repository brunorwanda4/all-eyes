import Family from "@/lib/models/family";
import { connectMongoDB } from "@/lib/mongodb"
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const GET = async () => {
    await connectMongoDB();
    const families = await Family.find();
    return NextResponse.json({families} , {status : 200})
}

export const POST = async () => {
    await connectMongoDB();
}
