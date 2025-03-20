import React, { useEffect, useState } from 'react'

import axios from 'axios';

export default function Profiles() {
    const[profiles,setprofiles]=useState([]);
    const[loading,setloading] = useState(true);
    const[error,setError]=useState(null);
    
    useEffect(()=>{
        axios.get()
    })
  return (
    <div className="container mx-auto p-4">
        
    </div>
  )
}
