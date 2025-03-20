import { Route, Router, Routes } from 'react-router-dom'

import React from 'react'
import Profiles from './Components/Profiles'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Profiles}></Route>
      </Routes>
    </Router>
  )
}
