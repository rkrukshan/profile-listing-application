import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import ProfileDetails from './Components/ProfileDetails';
import Profiles from './Components/Profiles';
import React from 'react';
import Header from './Components/Header';

export default function App() {
  return (
    <Header></Header>
    <Router>
      <Routes>
        <Route path='/' element={<Profiles />} />
        <Route path='/profile/:id' element={<ProfileDetails />} />
      </Routes>
    </Router>
  );
}
