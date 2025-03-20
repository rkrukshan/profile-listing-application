import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Profiles() {
    const [profiles, setProfiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const profilesPerPage = 5;



    useEffect(() => {
        axios.get('https://backend.graycorp.io:9000/mymate/api/v1/tempClients').then((response) => {
            setProfiles(response.data);
            setLoading(false);
        }).catch((err) => {
            setError(`Error in Fetching API ${err}`);
            setLoading(false);

        })
    }, []);

    const filteredProfiles = profiles.filter((profile) => profile.client_name.toLowerCase().includes(search.toLowerCase()))
    const totalPages=Math.ceil(filteredProfiles.length/profi)
    const firstProfileIndex = (currentPage - 1) * profilesPerPage;
    const currentProfiles = filteredProfiles.slice(
        firstProfileIndex,
        firstProfileIndex + profilesPerPage);


    if (loading) return <div>Loading.........</div>
    if (error) return <div>{error}</div>
    return (
        <div className="container mx-auto p-4">
            <input
                type="text"
                placeholder="Search by name..."
                className="w-full ring-1 ring-slate-200 p-2 border rounded mb-4 text-center font-bold"
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value);
                    setCurrentPage(1);
                }} />

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {currentProfiles.length > 0 ? (
                    currentProfiles.map((profile) => (
                        <div key={profile.client_id} className="ring-2 ring-blue-950 p-4 rounded shadow">
                            <img
                                src={profile.client_profile_url}
                                alt={profile.client_name}
                                className="md:w-full h-85 object-cover rounded"
                            />
                            <h2 className="flex justify-between items-center px-5 text-lg font-medium mt-4">
                                <span className='text-gray-600'>Name</span>
                                <span className="text-blue-600 font-semibold">{profile.client_name}</span>
                            </h2>

                            <h2 className="flex justify-between items-center px-5 text-lg font-medium mt-4">
                                <span className='text-gray-600'>Location</span>
                                <span className="text-blue-600 font-semibold">{profile.client_city}</span>
                            </h2>

                            <Link
                                to={`/profile/${profile.client_id}`}
                                className="block mt-5 text-blue-800 font-bold  text-center">View Details
                            </Link>
                        </div>
                    ))
                ) : (

                    <div className="text-center col-span-full text-gray-500 font-bold  text-center my-11">
                        No profiles found.
                    </div>
                )}
            </div>




        </div>

    )
}
