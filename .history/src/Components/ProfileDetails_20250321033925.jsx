import { Link } from 'react-router-dom'
import React from 'react'

export default function ProfileDetails() {
    return (
        <div className="container mx-auto p-4">
            <div className="max-w-lg mx-auto border p-4 rounded shadow">
                <img src="" alt="" className="w-full h-64 object-cover rounded" />
                <div className="flex justify-between">
                    
                </div>
                
                <Link to="/" className='block mt-4 text-blue-700'>View All</Link>
            </div>
        </div>
    )
}
