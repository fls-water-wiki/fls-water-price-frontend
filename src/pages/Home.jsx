import React, { useState } from 'react'
import './Home.css';

import { Link } from 'react-router-dom';

import {downloadDatabase} from '../utils/api/downloadDatabase'

function Home() {



  return (
    <div className="home">
      <p className="description">
        The Water Wiki is an open database of water prices from around the world. This project is funded by FLSmidth in partnership with the Bradshaw Research Initiative for Minerals and Mining at the University of British Columbia.      </p>
      <div className="link-cards-container">
        <Link className="link-card" to='/search'>Search the database</Link>
        <Link className="link-card" to='/add'>Add new data</Link>
        <div className="link-card" onClick={downloadDatabase}>Download the database</div>
      </div>
    </div>
  )
}

export default Home