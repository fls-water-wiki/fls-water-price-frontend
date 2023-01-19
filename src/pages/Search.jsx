import React, { useState } from 'react';
import './Search.css';

import ResultsTable from '../components/ResultsTable';
import SearchForm from '../components/search-form/SearchForm';
import SimpleDescriptionModal from '../components/modals/SimpleDescriptionModal';
// import { data } from '../mock-data/data';

function Search() {
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalDescription, setModalDescription] = useState('');

  const displayModalWithTitleAndDescription = (title, description) => {
    setModalTitle(title);
    setModalDescription(description);
    setShowModal(true);
  };

  return (
    <div className="search-container">
      <SimpleDescriptionModal show={showModal} handleClose={() => setShowModal(false)} title={modalTitle} description={modalDescription} />

      <div className="main-card">
        <SearchForm setResults={setResults} setSearched={setSearched} showModal={displayModalWithTitleAndDescription}/>
      </div>

      {/* displays a table of if results exist, an empty table if no searches have been performed, and "No Results Found" if no results were found in a search */}
      { results.length > 0 || !searched ? <ResultsTable results={results} showModal={displayModalWithTitleAndDescription}/> : <h2>No Results Found</h2>}
      
    </div>
  );
}

export default Search;