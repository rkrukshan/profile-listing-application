import { Link } from 'react-router-dom'
import React from 'react'

export default function ProfileDetails() {
    co
    return (
        <div className="container mx-auto p-4 my-19">
            <div className="max-w-lg mx-auto border p-4 rounded shadow">
                <img src="" alt="" className="w-full h-64 object-cover rounded" />
                <h2 className="flex justify-between text-2xl font-bold mt-2">Name
                    <span className='text-2xl font-light mt-2'></span>
                </h2>
                <h2 className="flex justify-between text-2xl font-bold mt-2">Location
                    <span className='text-2xl font-light mt-2'></span>
                </h2>
                <h2 className="flex justify-between text-2xl font-bold mt-2">Contact Number
                    <span className='text-2xl font-light mt-2'></span>
                </h2>

                <Link to="/" className='text-center font-bold block mt-4 text-blue-900'>View All</Link>
            </div>
        </div>
    )
}
