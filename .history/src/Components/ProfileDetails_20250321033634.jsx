import { Link } from 'react-router-dom'
import React from 'react'

export default function ProfileDetails() {
    return (
        <div className="container mx-auto p-4">
            <div className="max-w-lg mx-auto border p-4 rounded shadow">
                <img src="" alt="" className="w-full h-64 object-cover rounded" />
                <h2 className="text-2xl font-bold mt-2">Name
                    <span></span>
                </h2>
                <p className="text-2xl font-bold mt-2">Location
                    <span></span>
                </p>
                <p className="text-2xl font-bold mt-2">Contact Number
                    <span></span>
                </p>
                <Link to="/" className='block mt-4 text-blue-700'>View All</Link>
            </div>
        </div>
    )
}
