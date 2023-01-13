import React, { useState } from 'react'
import './Home.css';

import { Link } from 'react-router-dom';

import {downloadDatabase} from '../utils/api/downloadDatabase'

function Home() {

  return (
    <div className="home">
      <div className="description">

      <p>
        The Water Wiki is an open database of water costs from around the world. This project is funded by FLSmidth in partnership with the Bradshaw Research Initiative for Minerals and Mining at the University of British Columbia. 
        This website is a prototype.
      </p>

      <h2>
        What do we mean by “water cost”?
      </h2>

        We mean all the different ways that water can be decribed, bought, or sold using money. There are four broad categories of water costs that we collect in the water wiki:
        <ul>
          <li> Transactional price: These are listed explicitly in contracts which show the price paid by users for water.</li>
          <li> Regulatory price: These are set by governments to regulate individual or corporate water use, including pre-determined compensatory damages for anticipated environmental impacts. </li>
          <li> Environmental value: These are derived from the set price of environmental goods which rely on water. </li>
          <li> Derived value: These are derived from the value of goods produced by corporate or individual water users.</li>
        </ul>
      <h2>
        Why make the water wiki?
      </h2>
      <p>
        The goal of this project is to make information about the cost of water more accessible to the broader public. 
        Information about water costs tends to be hidden in private water models or corporate archives, or buried in government reports and academic publications. 
        The water wiki collates information from existing public databases and extracts information from published documents to generate data points which are stored and queryable in the water wiki database.
      </p>
      <p>
        You can learn more about the rationale and development of the water wiki in our paper presented at the Special Libraries Association 2022 conference:
      </p>
      <p>
        Carlin, I., S. Innis, B. Cox, N. Kunz, & J. Steen. (2022). The Cost of Water: Information Access for Public Empowerment [Conference paper]. Special Libraries Association, Charlotte, NC, USA. 
        <a href="https://www.sla.org/learn-2/research/sla-contributed-papers/2022-contributed-papers/">https://www.sla.org/learn-2/research/sla-contributed-papers/2022-contributed-papers/</a>
      </p>
      </div>

      <div className="link-cards-container">
        <Link className="link-card" to='/search'>Search the database</Link>
        <Link className="link-card" to='/add'>Add new data</Link>
        <div className="link-card" onClick={downloadDatabase}>Download the database</div>
      </div>
    </div>
  )
}

export default Home