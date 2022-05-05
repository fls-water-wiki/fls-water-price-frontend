import React from 'react'
import {Link} from 'react-router-dom'

import "./Header.css"

function Header() {
  return (
    <div className="header-container">
      <h1>
        FLS Water Price Database
      </h1>
      <div className="link-container">
        <Link to="/" className="link">Home</Link>
        <Link to="/search" className="link">Search</Link>
        <Link to="/add" className="link">Add Data</Link>
      </div>

    </div>
  )
}

export default Header