import React, {useState} from 'react'
import './SearchForm.css';

import TextInput from './TextInput';

import { performQuery } from '../utils/api/query'

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
   
  return (
    <div className="search-form-container">

      <div className="form-header">
        <p className="form-header-text">Search Criteria</p>
      </div>
      <form className="form" onSubmit={sub}>
          <div className="column">
            <TextInput label="Country ID"          id="country"        value={country}         onChange={setCountry}/>
            <TextInput label="Region"              id="region"         value={region}          onChange={setRegion}/>
            <TextInput label="Year"                id="year"           value={year}            onChange={setYear}/>
            <TextInput label="Water treatment"     id="waterTreatment" value={waterTreatment}  onChange={setWaterTreatment}/>
            <button type="submit" className="btn">Submit</button>

          </div>

          
          <div className="column">
            <TextInput label="Price min"        id="priceMin"       value={priceMin}        onChange={setPriceMin} />
            <TextInput label="Price max"        id="priceMax"       value={priceMax}        onChange={setPriceMax} />
            <TextInput label="Company"          id="company"        value={company}         onChange={setCompany} />
            <TextInput label="Currency"         id="currency"       value={currency}        onChange={setCurrency} />
            <button type="reset" className="btn" onClick={reset}>Reset</button>
          </div>

      </form>
    </div>
  )
}

export default SearchForm