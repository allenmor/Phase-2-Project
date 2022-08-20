import React from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css'

function NavBar() {
  return (
    <div className="nav">
  <input type="checkbox" id="nav-check" />
  <div className="nav-header">
    <div className="nav-title">
      NBA Report
    </div>
  </div>
  <div className="nav-btn">
    <label htmlFor="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div className="nav-links">
    <Link to='/'>Home</Link>
    <Link to='/stadiums'>Stadiums</Link>
    <Link to='/searchforplayer'>Search For Player</Link>
    <a href="https://codepen.io/jo_Geek/" target="_blank">Codepen</a>
    <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank">JsFiddle</a>
  </div>
</div>
  )
}

export default NavBar;
