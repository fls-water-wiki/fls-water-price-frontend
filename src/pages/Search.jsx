import React, { useState } from 'react';
import './Search.css';

import ResultsTable from '../components/ResultsTable';
import SearchForm from '../components/search-form/SearchForm';

// import { data } from '../mock-data/data';

function Search() {
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);

  return (
    <div className="search-container">
      <div className="main-card">
        <SearchForm setResults={setResults} setSearched={setSearched}/>
      </div>

      {/* displays a table of if results exist, an empty table if no searches have been performed, and "No Results Found" if no results were found in a search */}
      { results.length > 0 || !searched ? <ResultsTable results={results}/> : <h2>No Results Found</h2>}
      
    </div>
  );
}

export default Search;