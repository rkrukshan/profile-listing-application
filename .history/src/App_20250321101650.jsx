import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Header from './Components/Header';
import ProfileDetails from './Components/ProfileDetails';
import Profiles from './Components/Profiles';
import React from 'react';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Profiles />} />
        <Route path='/profile/:id' element={<ProfileDetails />} />
      </Routes>
    </Router>
  );
}
