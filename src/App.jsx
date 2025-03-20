import { Route, Router, Routes } from 'react-router-dom'

import ProfileDetails from './Components/ProfileDetails'
import Profiles from './Components/Profiles'
import React from 'react'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Profiles />}></Route>
        <Route path='/profile/:id' element={<ProfileDetails />}></Route>
      </Routes>
    </Router>
  )
}
