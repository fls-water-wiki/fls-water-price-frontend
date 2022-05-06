import React, {useState} from 'react'
import './SearchForm.css';

import TextInput from './TextInput';

import { performQuery } from '../utils/api/query'
import { getAllData } from '../utils/api/getData'

function SearchForm({ setResults }) {
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [year, setYear] = useState("");
  const [waterTreatment, setWaterTreatment] = useState("");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [company, setCompany] = useState("");
  const [currency, setCurrency] = useState("");


  const reset = () => {
    setCountry("");
    setRegion("");
    setYear("");
    setWaterTreatment("");
    setPriceMin("");
    setPriceMax("");
    setCountry("");
    setCompany("");
  }

  const sub = async (e) => {
    console.log(priceMin);
    e.preventDefault();
    try {
      const res = await performQuery({
          "nation_id": country.toUpperCase(),
          "vp_date": parseInt(year),
          "vp_water_treatment": waterTreatment,
          "min_price": parseInt(priceMin),
          "max_price": parseInt(priceMax),
          "region_name": region,
          "company_id": company,
          "currency_id": currency
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

      {/* <div onClick={getAllData}>
        Download input
      </div> */}
      <div className="form-header">
        <p className="form-header-text">Search Criteria</p>
      </div>
      <form className="form" onSubmit={sub}>
          <div className="column">
            <TextInput className="form-input" label="Country ID"          id="country"        value={country}         onChange={setCountry}/>
            <TextInput className="form-input" label="Region"              id="region"         value={region}          onChange={setRegion}/>
            <TextInput className="form-input" label="Year"                id="year"           value={year}            onChange={setYear}/>
            <TextInput className="form-input" label="Water treatment"     id="waterTreatment" value={waterTreatment}  onChange={setWaterTreatment}/>
            <button type="submit" className="btn">Submit</button>

          </div>

          
          <div className="column">
            <TextInput className="form-input" label="Price min"        id="priceMin"       value={priceMin}        onChange={setPriceMin} />
            <TextInput className="form-input" label="Price max"        id="priceMax"       value={priceMax}        onChange={setPriceMax} />
            <TextInput className="form-input" label="Company"          id="company"        value={company}         onChange={setCompany} />
            <TextInput className="form-input" label="Currency"         id="currency"       value={currency}        onChange={setCurrency} />
            <button type="reset" className="btn" onClick={reset}>Reset</button>
          </div>

      </form>
    </div>
  )
}

export default SearchForm