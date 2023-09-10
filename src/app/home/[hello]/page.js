import React from 'react'
import { resolve } from 'styled-jsx/css'

async function takeTime(){
  await new Promise((resolve)=>{
    setTimeout(resolve,3000)
  })
}

export default async function page() {
  await takeTime()
  return (
    <div>What</div>
  )
}
