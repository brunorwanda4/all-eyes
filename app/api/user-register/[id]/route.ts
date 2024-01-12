import User from "@/lib/models/User";
import { connectMongoDB } from "@/lib/mongodb";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher"
import { NextResponse } from "next/server";


export const GET = async (params : Params) => {
   try {
        const {id} = params;
        await connectMongoDB();
        const user = await User.findOne({_id: id});
        return NextResponse.json({user}, {status : 200})

   } catch (error) {

        console.log("can not find one user 😭😭😡", error);
   }
}