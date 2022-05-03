import React, { useState } from 'react'
import './Home.css';

import { Link } from 'react-router-dom';

function Home() {


  return (
    <div>
      <h1>Welcome to the water price database!</h1>
      <Link to='/search'>Search the database</Link>
      <Link to='/add'>Add new data</Link>
    </div>
  )
}

export default Home