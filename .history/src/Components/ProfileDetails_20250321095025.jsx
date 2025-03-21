import { Link, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

import axios from 'axios';
import { motion } from 'framer-motion';

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
        <motion.div
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
                type: "spring",
                stiffness: 50,
                damping: 10
            }}
            className="container mx-auto p-4 my-19"
        >
            <div className="max-w-full sm:max-w-lg mx-auto border p-4 rounded shadow">
                <img src={profile.client_profile_url} alt="" className="w-full h-64 sm:h-80 md:h-96 object-contain rounded" />
                <h2 className="lex justify-between text-xl sm:text-2xl font-bold mt-2">Name
                    <span className='text-2xl font-light px-15 mt-2'>{profile.client_name}</span>
                </h2>
                <h2 className="lex justify-between text-xl sm:text-2xl font-bold mt-2">Location
                    <span className='text-2xl font-light px-15 mt-2'>{profile.client_city}</span>
                </h2>
                <h2 className="lex justify-between text-xl sm:text-2xl font-bold mt-2">Contact Number
                    <span className='text-2xl font-light px-15 mt-2'>{profile.client_mobile}</span>
                </h2>

                <Link to="/" className='block mt-5 text-white font-bold text-center bg-blue-800 py-2 px-4 rounded-xl mx-8 sm:mx-12 md:mx-20'>View All</Link>
            </div>
        </motion.div>
    )
}
