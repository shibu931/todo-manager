import { connectDb } from "@/helper/db";
import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/model/task";
import { NextResponse } from "next/server";

connectDb();

export async function GET(request){
    try {
        const task =await Task.find();
        return NextResponse.json(task,{status:200})
    } catch (error) {
        return getResponseMessage("Error in getting data!",404,false)
    }
}

export async function POST(request){
    const {title,content,userId} = await request.json();
    try {
        console.log("dsdgsd")
        const task = new Task({
            title,
            content,
            userId
        })
        const result = await task.save();
        return NextResponse.json(task,{
            status:201,
            statusText:"Task Created"
        })        
    } catch (error) {
        console.log(error)
        console.log("myssdg")
        return getResponseMessage("Failed to create task",500,false)
    }
}

