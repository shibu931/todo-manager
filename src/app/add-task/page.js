"use client"
import { addTask } from '@/services/taskService';
import Image from 'next/image'
import React, { useState } from 'react'
import { toast } from 'react-toastify';

export const metadata ={
    title:"Add Task: Work Manager"
  }

export default function AddTask() {
  const [task,setTask] =useState({
    title:"",
    content:"",
    status:"",
    userId:"64fb4a995893b6c35dfcf357"
  });
  const handleForm = async (event)=>{
    event.preventDefault();
    try {
      const result = await addTask(task);
      toast.success("Your Task is Added",{
        position:"top-center"
      })
      setTask({
        title:"",
        content:"",
        status:"none",
      })
    } catch (error) {
      console.log(error)
      toast.error("Your Task isn't added",{
        position:"top-center"
      })
    }
  }
  return (
    <div className='flex justify-center items-center flex-col'>
        <h1 className='text-5xl text-center mt-5 text-orange-700 font-semibold'>
            Add Task
        </h1>
        <div className='border rounded-lg mt-10 px-10 py-10'>
          <form action='#' onSubmit={handleForm}>
            {/* Task Title */}
            <div className='mb-4'>
              <label htmlFor='task_title' className='block mb-2 text-lg'>
                Title:
              </label>
              <input 
              type='text' className='rounded p-2 bg-gray-900 border-white border' name="task_title" 
              onChange={(event)=>{setTask({
                ...task,
                title:event.target.value
              })}}
              value={task.title}
              id='task_title'
              />
            </div>
            {/* Task Content */}
            <div className='mb-4'>
              <label htmlFor='task_content' className='block mb-2 text-lg'>
                Content:
              </label>
              <textarea rows={5}
              onChange={(event)=>{setTask({
                ...task,
                content:event.target.value
              })}}
              value={task.content}
              name='task_content'
              className='rounded px-5 bg-gray-900 border-white border' id='task_content'/>
            </div>
            {/* Task Status */}
            <div className='mb-4'>
              <label htmlFor='task_status' className='block mb-2 text-lg'>
                Task Status:
              </label>
              <select id='task_status' name='task_status' 
              onChange={(event)=>{setTask({
                ...task,
                status:event.target.value
              })}}
              value={task.status}
              className='rounded p-2 bg-gray-900 border-white border'>
                <option value="none" disabled>Select Status</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            {/* button */}
            <div className='flex justify-around'>
              <button className='bg-blue-600 rounded py-1.5 px-3'>Add Todo</button>
              <button className='bg-red-600 rounded py-1.5 px-3'>Reset</button>
            </div>

          </form>
        </div>
    </div>
    )
}
