import { Link, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

import axios from 'axios';

export default function ProfileDetails() {
    const { id } = useParams();
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProfiles = async () => {
            setLoading(true);
            try {
                const response = await axios.get("https://backend.graycorp.io:9000/mymate/api/v1/tempClients");
                const foundProfile = response.data.find((p) => p.client_id === id);
                if (foundProfile) {
                    setProfile(foundProfile);
                }
                else {
                    setError("Profile not Found");
                }
            }
            catch (err) {
                setError(err.message);
            }
            finally {
                setLoading(false);
            }
        };
        fetchProfiles();
    }, [id]);

    if (loading) return <div className='text-3xl text-center text-blue-500 mt-45 animate-pulse'>Loading.........</div>
    if (error) return <div>{error}</div>

    return (
        
        <div className="container mx-auto p-4 my-19">
            
        </div>
    )
}
