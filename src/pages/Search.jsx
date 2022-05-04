import React, { useState } from 'react'
import './Search.css';

import ResultsTable from '../components/ResultsTable';
import SearchForm from '../components/SearchForm';

function Search() {
  const [results, setResults] = useState([]);

  return (
    <div className="search-container">
      <div className="main-card">
        <SearchForm setResults={setResults}/>
       </div>
      <ResultsTable results={results}/>
    </div>
  )
}

export default Search