import { Link } from 'react-router-dom'
import React from 'react'

export default function ProfileDetails() {
  return (
    <div className="container mx-auto p-4">
        <div className="max-w-lg mx-auto border p-4 rounded shadow">
            <img src="" alt="" className="w-full h-64 object-cover rounded" />
            <h2 className="text-2xl font-bold mt-2"></h2>
            <p className="text-2xl font-light mt-2"></p>
            <p className="text-2xl font-light mt-2"></p>
            <Link to="/" className='block mt-4 text'></Link>
        </div>
    </div>
  )
}
