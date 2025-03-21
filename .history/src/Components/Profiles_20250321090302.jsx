import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';

export default function Profiles() {
    const [profiles, setProfiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const profilesPerPage = 4;



    useEffect(() => {
        const fetchProfiles = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await axios.get('https://backend.graycorp.io:9000/mymate/api/v1/tempClients')
                setProfiles(response.data);
            }
            catch (err) {
                setError(<div className='text-3xl text-center font-bold text-red-500 animate-pulse my-27'>{`Error in Fetching API ${err}`}</div>);
            }
            finally {
                setLoading(false);
            }
        };
        fetchProfiles();
    }, []);

    const filteredProfiles = profiles.filter((profile) => profile.client_name.toLowerCase().includes(search.toLowerCase()))
    const totalPages = Math.ceil(filteredProfiles.length / profilesPerPage);
    const firstProfileIndex = (currentPage - 1) * profilesPerPage;
    const currentProfiles = filteredProfiles.slice(
        firstProfileIndex,
        firstProfileIndex + profilesPerPage);


    if (loading) return <div className='text-3xl text-center text-blue-500 mt-10 animate-pulse'>Loading.....</div>
    if (error) return <div className='text-2xl text-center text-red-500'>{error}</div>
    return (
        <div className="container mx-auto p-4 my-29">
            <input
                type="search"
                placeholder="Search by name..."
                className="w-full ring-1 ring-gray-300 p-2 border rounded my-6 text-center font-bold focus:ring-2 focus:ring-blue-500 outline-none"
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value);
                    setCurrentPage(1);
                }} />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-15">
                {currentProfiles.length > 0 ? (
                    currentProfiles.map((profile) => (
                        <motion.div
                            key={profile.client_id}
                            className="ring-2 ring-blue-950 p-4 rounded shadow"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <img
                                src={profile.client_profile_url}
                                alt={profile.client_name}
                                className="md:w-full h-96 object-cover roundedw-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover rounded"
                            />
                            <h2 className="flex justify-between items-center px-5 text-lg font-medium mt-4">
                                <span className='text-gray-600'>Name</span>
                                <span className="text-blue-600 font-semibold">{profile.client_name}</span>
                            </h2>

                            <Link
                                to={`/profile/${profile.client_id}`}
                                className="block mt-5 text-blue-800 font-bold  text-center">View Details
                            </Link>
                        </motion.div>))
                ) : (

                    <div className="text-center col-span-full text-gray-500 font-bold  text-center my-11">
                        No profiles found.
                    </div>
                )}
            </div>

            {totalPages > 1 && (
                <div className="flex justify-center items-center mt-6 space-x-4">
                    <button
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="mx-2 px-4 py-2 text-white bg-blue-700 cursor-pointer rounded disabled:opacity-50"
                    >
                        Prev
                    </button>
                    <span className="px-4 py-2">{`Page ${currentPage} of ${totalPages}`}</span>
                    <button
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="mx-2 px-4 py-2 text-white bg-blue-700 cursor-pointer rounded disabled:opacity-50"
                    >
                        Next
                    </button>

                </div>
            )}


        </div>

    )
}
