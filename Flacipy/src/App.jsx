import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Herosec from './Components/Navbar/Herosec/Herosec'
import LandingPage from './Components/Navbar/LandingPage/Landingpage'


function App() {
  

  return (
    <>
      <Navbar/>
      <Herosec/>
      <LandingPage/>
    </>
  )
}

export default App
