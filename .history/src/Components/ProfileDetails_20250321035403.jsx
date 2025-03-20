import { Link, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function ProfileDetails() {
    const { id } = useParams();
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchProfiles=async()=>{
            setLoading(true);
            try{
                const response=await axios.get("https://backend.graycorp.io:9000/mymate/api/v1/tempClients");
                const foundProfile=response.data.find(p)=>p.cli
            }
        }
    })
    
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
