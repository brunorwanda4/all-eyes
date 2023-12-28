import connectMongoDB  from '@/lib/mongodb';
import Families from "@/lib/models/families";
import { NextResponse } from "next/server";

export const POST = async (request : Request) => {
   const  {username, name, bio} = await request.json();
   await connectMongoDB();
   await Families.create({username, name, bio});
   return NextResponse.json(
    { message: "family is created 🫡🫡"},
    {status: 201},
   );
}

export async function GET() {
   await connectMongoDB();
   const family = await Families.find();
   return NextResponse.json({family});
}