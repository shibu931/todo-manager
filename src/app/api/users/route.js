import { NextRequest, NextResponse } from "next/server";
import { User } from "@/model/user";
import { connectDb } from "@/helper/db";

connectDb();

export async function GET(request){
    let users =[];
    try {
        users = await User.find()
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message:"Failed to get user",
            success:"false"
        })       
    }
    return NextResponse.json(users)
}

export function DELETE(request){
    
    return NextResponse.json({},{status:201});
}

export async function POST(request){
    const user = new User(await request.json())
    const result = await user.save();
    console.log(result)
    return NextResponse.json(user,{status:200})
}