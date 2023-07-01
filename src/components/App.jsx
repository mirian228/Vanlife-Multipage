import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import "../style.css"

export default function App() {
  const[about, setAbout] = React.useState("");
  
  function aboutLine() {
    setAbout("navbar-links-about")
  }

  return (
    <div className='container'>
    <BrowserRouter>
    <nav className='navbar'>
    <Link className="navbar-links-home" to="/">#VANLIFE</Link>
        <div className='navbar-links'>
    <Link onClick={aboutLine} className={about} to="/about">About</Link>
    <Link className="navbar-links-vans" to="/vans">Vans</Link>
        </div>
    </nav>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
    </Routes>
    <footer className='footer'>
    Ⓒ 2022 #VANLIFE
    </footer>
    </BrowserRouter>
    </div>
  )
}
