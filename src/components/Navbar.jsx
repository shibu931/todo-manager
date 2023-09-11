"use client";

import Image from 'next/image';
import React from 'react'
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-blue-600 h-14 py-2 px-4">
        <div className='brand'>
           <Link href="/">
           <Image 
              src="/logo.png"
              width={150}
              height={100}
              alt="fds"
            />
           </Link> 
        </div>
        <div>
          <ul className='flex space-x-4'>
            <li>
              <Link href="/" className='hover:text-blue-200'>Home</Link>
            </li>
            <li>
              <Link href="/add-task" className='hover:text-blue-200'>Add Task</Link>
            </li>
            <li>
              <Link href="/show-tasks" className='hover:text-blue-200'>Show Task</Link>
            </li>
          </ul>
        </div>
        <div>
        <ul className='flex space-x-4'>
            <li>
              <Link href="/login" className='hover:text-blue-200'>Login</Link>
            </li>
            <li>
              <Link href="/sign-up" className='hover:text-blue-200'>Sign Up</Link>
            </li>
          </ul>
        </div>
    </nav>
  )
}
