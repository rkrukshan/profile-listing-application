import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Profiles() {
    const [profiles, setProfiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const profilesPerPage = 4;



    useEffect(() => {
            const fetchProfiles = async()=>{
                try{
                    setLoading(true);
                    setError()
                }
            }
    }, []);

    const filteredProfiles = profiles.filter((profile) => profile.client_name.toLowerCase().includes(search.toLowerCase()))
    const totalPages = Math.ceil(filteredProfiles.length / profilesPerPage);
    const firstProfileIndex = (currentPage - 1) * profilesPerPage;
    const currentProfiles = filteredProfiles.slice(
        firstProfileIndex,
        firstProfileIndex + profilesPerPage);


    if (loading) return <div className='text-3xl text-center text-blue-300 mt-45'>Loading.........</div>
    if (error) return <div>{error}</div>
    return (
        <div className="container mx-auto p-4">
            <input
                type="search"
                placeholder="Search by name..."
                className="w-full ring-1 ring-slate-200 p-2 border rounded my-27 text-center font-bold"
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value);
                    setCurrentPage(1);
                }} />

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-15 gap-4">
                {currentProfiles.length > 0 ? (
                    currentProfiles.map((profile) => (
                        <div key={profile.client_id} className="ring-2 ring-blue-950 p-4 rounded shadow">
                            <img
                                src={profile.client_profile_url}
                                alt={profile.client_name}
                                className="md:w-full h-96 object-cover rounded"
                            />
                            <h2 className="flex justify-between items-center px-5 text-lg font-medium mt-4">
                                <span className='text-gray-600'>Name</span>
                                <span className="text-blue-600 font-semibold">{profile.client_name}</span>
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

            {totalPages > 1 && (
                <div className="flex justify-center mt-4">
                    <button
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="mx-2 px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                    >
                        Prev
                    </button>
                    <span className="px-4 py-2">{`Page ${currentPage} of ${totalPages}`}</span>
                    <button
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="mx-2 px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                    >
                        Next
                    </button>

                </div>
            )}


        </div>

    )
}
