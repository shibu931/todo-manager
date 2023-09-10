import { getResponseMessage } from "@/helper/responseMessage"
import { Task } from "@/model/task"
import { NextResponse } from "next/server"

export async function GET(request,{params}){
    const {taskId} = params
    try {
        const task = await Task.findById(taskId)
        return NextResponse.json(task)
    } catch (error) {   
        console.log(error)
        return getResponseMessage("Failed to get task" ,404,false)
    }
}

export async function PUT(request,{params}){
    const {taskId} = params
    const {title,content,status} = await request.json()
    try {
        let task= await Task.findById(taskId)
        task.title = title;
        task.content = content;
        task.status = status;
        const result = await task.save()
        return NextResponse.json(result)
    } catch (error) {
        console.log(error)
        return getResponseMessage("Failed to update",500,false)
        
    }
}

export async function DELETE(request,{params}){
    const {taskId} = params
    try {
        const result = await Task.deleteOne({_id:taskId});
        return getResponseMessage("Task Deleted",200,true)
    } catch (error) {
        console.log(error)
        return getResponseMessage("Failed to delete task",500,false)
    }
}