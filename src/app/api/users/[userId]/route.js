import { connectDb } from "@/helper/db";
import { User } from "@/model/user";
import { isResSent } from "next/dist/shared/lib/utils";
import { NextResponse } from "next/server";

connectDb();

export async function GET(request,{params}){
    const {userId} = params;
    try {
        const user = await User.findById(userId);
        return NextResponse.json(user,{status:200})
    } catch (error) {
        console.log(error)
        return NextResponse.json({status:400,statusText:""})
    }
}

export async function DELETE(request,{params}){
    const {userId} = params;
    try {
        await User.deleteOne({
            _id:userId,
        })
        return NextResponse.json({
            message:"User Deleted",
            status:"true"
        })
    } catch (error) {   
        console.log(error)
        return NextResponse.json({
            message:"Something went wrong",
            status:"fasle"
        })
    }
}

export async function PUT(request,{params}){
    const {userId} = params;
    const {name,email,password,about,profileURL} = await request.json();
    try {
        const user = await User.findById(userId);
        user.name = name;
        user.email = email;
        user.password = password;
        user.about = about;
        user.profileURl = profileURL;
        const updatedUser = await user.save();
        return NextResponse.json(updatedUser);
    } catch (error) {
        return NextResponse.json({status:500,statusText:"somthing went wrong"})   
    }
}