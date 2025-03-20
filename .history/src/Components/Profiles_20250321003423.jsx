import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Profiles() {
    const [profiles, setProfiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://backend.graycorp.io:9000/mymate/api/v1/tempClients').then((response) => {
            setProfiles(response.data);
            setLoading(false);
        }).catch((err) => {
            setError(`Error in Fetching API ${err}`);
            setLoading(false);

        })
    }, []);

    if (loading) return <div>Loading.........</div>
    if (error) return <div>{error}</div>
    return (
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {profiles.map((profile) =>
            (
                <div key={profile.client_id} className='border p-4 rounded shadow'>
                    <img src={profile.client_profile_url} alt={profile.client_name} className='w-full h-70 object-cover rounded' />
                    <h2 className="flex justify-between px-9 text-lg font-bold mt-2"><span className='font-semibold'>Name</span> {profile.client_name}</h2>
                    <h2 className="flex justify-between px-9 text-lg font-bold mt-2"><span className='font-semibold'>Location</span> {profile.client_city}</h2>
                    <Link to={`/profile/${profile.client_id}`} className="block mt-2 text-blue-800 font-bold text-center">View Details</Link>
                </div>
            ))}
        </div>
    )
}
