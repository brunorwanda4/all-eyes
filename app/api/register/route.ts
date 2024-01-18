import bcrypt  from 'bcrypt';
import prisma from "../../../lib/prismadb";
import { NextResponse } from "next/server";

export const POST = async (request : Request) => {
    try {
        const body = await request.json();
        const {email , name , password } = body;

        if (!email || !name || !password) {
            return new NextResponse("missing information" , {status: 400})
        }
        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await prisma.user.create({
            data: {
                email,
                name,
                hashedPassword,
            }
        })
        return NextResponse.json(user)
    } catch (error : any) {
        console.log(error, "register error 😔😭😡🔴🔴😡");
        return new NextResponse("Internal Error 😡😡🫠" , {status: 500})
    }
}
