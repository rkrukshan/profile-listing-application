import { Route, Router, Routes } from 'react-router-dom'

import React from 'react'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Profil}></Route>
      </Routes>
    </Router>
  )
}
