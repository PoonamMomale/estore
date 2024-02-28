import React from 'react'
import MainComponent from './MainComponent';
import { Route, Routes } from 'react-router-dom';

function LandingPage() {

  return (
    <div>
        <Routes>
            <Route path='/' Component={MainComponent}></Route>
        </Routes>
    </div>
  )
}

export default LandingPage;
