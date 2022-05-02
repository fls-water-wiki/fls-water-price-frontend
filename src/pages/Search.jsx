import React, { useState } from 'react'
import './Search.css';

import ResultsTable from '../components/ResultsTable';
import SearchForm from '../components/SearchForm';

function Search() {
  const [results, setResults] = useState([]);

  return (
    <div className="search">
      <div className="main-card">
        <SearchForm setResults={setResults}/>
        <ResultsTable results={results}/>
      </div>
    </div>
  )
}

export default Search