import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Profiles() {
    const [profiles, setProfiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState(1);
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

    const totalPages = Math.ceil(filteredProfiles.length / profilesPerPage);
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
                className="w-full p-2 border rounded mb-4"
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value);
                    setCurrentPage(1);
                }} />

            <div className="grid sm:grid cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {currentProfiles.length > 0 ? (
                        currentProfiles.map((profile) => (

            
        ))
                    ) : (

                        <div className="text-center col-span-full text-gray-500">
                            No profiles found.
                        </div>
                    )}
                </div>
            </div>
        </div>

    )
}
