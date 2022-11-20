import React, {useState, useReducer} from 'react';
import './SearchForm.css';

import TextInput from './TextInput';

import { performQuery } from '../utils/api/query'

function SearchForm({ setResults }) {

  const [searchInput, setSearchInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      country: "",
      region: "",
      year: "",
      waterTreatment: "",
      company: "",
      currency: ""
    }
  )

  const handleChangeFormInput = event => {
    const { name, value } = event.target;
    setSearchInput({ [name]: value});
  }

  const reset = () => {
    setSearchInput(    
    {
      country: "",
      region: "",
      year: "",
      waterTreatment: "",
      company: "",
      currency: ""
    });
  }

  const sub = async (e) => {
    e.preventDefault();
    try {
      const res = await performQuery({
          "nation_id": searchInput.country.toUpperCase(),
          "vp_date": parseInt(searchInput.year),
          "vp_water_treatment": searchInput.waterTreatment,
          "region_name": searchInput.region,
          "company_id": searchInput.company,
          "currency_id": searchInput.currency
        })
      const rows = res.data.data.rows;
      setResults(rows);
    }  catch (err) {
      console.log(err);
    }
  }
  
  const getAllData = async (e) => {
    try {
      await getAllData();
    } catch (err) {
      console.log.error(err);
    }
  }

  return (
    <div className="search-form-container">

      <div className="form-header">
        <p className="form-header-text">Search Criteria</p>
      </div>
      <form className="form" onSubmit={sub}>
          <div className="column">
            <TextInput className="form-input" label="Country ID"          id="country"        value={searchInput.country}         onChange={handleChangeFormInput}/>
            <TextInput className="form-input" label="Region"              id="region"         value={searchInput.region}          onChange={handleChangeFormInput}/>
            <TextInput className="form-input" label="Year"                id="year"           value={searchInput.year}            onChange={handleChangeFormInput}/>
            <button type="submit" className="btn">Submit</button>

          </div>

          
          <div className="column">
            <TextInput className="form-input" label="Water treatment"     id="waterTreatment" value={searchInput.waterTreatment}  onChange={handleChangeFormInput}/>
            <TextInput className="form-input" label="Company"          id="company"        value={searchInput.company}         onChange={handleChangeFormInput} />
            <TextInput className="form-input" label="Currency"         id="currency"       value={searchInput.currency}        onChange={handleChangeFormInput} />
            <button type="reset" className="btn" onClick={reset}>Reset</button>
          </div>

      </form>
    </div>
  )
}

export default SearchForm