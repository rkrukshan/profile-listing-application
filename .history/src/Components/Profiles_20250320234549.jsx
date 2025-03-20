import React, { useEffect, useState } from 'react'

import axios from 'axios';

export default function Profiles() {
    const[profiles,setprofiles]=useState([]);
    const[loading,setloading] = useState(true);
    const[error,setError]=useState(null);
    
    useEffect(()=>{
        axios.get('https://backend.graycorp.io:9000/mymate/api/v1/tempClients').then((response)=>
        {
            setprofiles
        })
    })
  return (
    <div className="container mx-auto p-4">
        
    </div>
  )
}
