import { Route, Router, Routes } from 'react-router-dom'

import Profiles from './Components/Profiles'
import React from 'react'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={</Profiles>}></Route>
      </Routes>
    </Router>
  )
}
