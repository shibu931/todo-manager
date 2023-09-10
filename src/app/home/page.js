import React from 'react'
import { connectDb } from '../../helper/db'

export default function page() {
  connectDb();
  return (
    <div>layout</div>
  )
}
