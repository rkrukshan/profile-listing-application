import React, { useEffect, useState } from 'react'

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
    },[]);

    if(loading) return <div>Loading.........</div>
    if(error) return <div>{error}</div>
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-4">
            {profiles.map((profile))}
        </div>
    )
}
