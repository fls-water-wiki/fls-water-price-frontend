import React, {useState} from 'react'

import './ResultsTable.css';

import { Pagination } from '@mui/material';

function ResultsTable({ results }) {

  const [pageNumber, setPageNumber] = useState(1);
  const [tableLength, setTableLength] = useState(10);

  const handlePageNumberChange = (e, value) => {
    setPageNumber(value);
  }

  const handleTableLengthChange = (e) => {
    setTableLength(e.target.value);
    setPageNumber(1);
  }

  const fields = ["ID", "Water Treatment", "Water Unit", "Price",  "Currency", "Year", "Country ID", "Source URI"];
  // country and source
  return (
    <div className="results-table-container">

      {(results.length > 0 && (pageNumber - 1) * tableLength < results.length)
       && 


          <table className="results-table">
              <tr className="results-table-header-row">
                {
                  fields.map(field =>
                    <th className="results-table-header-item">{field}</th>
                  )
                }

              </tr>
              {
              results.slice(tableLength * (pageNumber - 1), Math.min(tableLength * pageNumber, results.length)).map(result => {

                  const resultFields = [
                    result.vp_id,
                    result.vp_water_treatment, 
                    result.vp_water_unit, 
                   +result.vp_num.toFixed(2), 
                    result.currency_id, 
                    result.vp_date,
                    result.nation_id
                  ]
                  
                return(
                  <tr className="results-table-data-row">
                    {
                      resultFields.map(resultField => (
                        <td className="results-table-data-item">{resultField}</td>
                      ))
                    }
                    {/* separate due to different formatting */}
                    <td className="results-table-data-item">
                      <a href={result.source_uri}>{result.src_title}</a>
                    </td>
                  </tr>
                )
              })}
          </table>
      }

      {
        (results.length > 0) && 

        <div className="page-number-container">
          <div className="num-results-rows-per-page-container">
            <div className='number-of-results'>
              Showing {(pageNumber - 1) * tableLength + 1} - {Math.min(pageNumber * tableLength, results.length)} of {results.length} results
            </div>
            <div className="rows-per-page">
              <label for="rows-per-page">Show </label>
              <select name="rows-per-page" id="rows-per-page" className="rows-per-page-selector" onChange={handleTableLengthChange}>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
              <label for="rows-per-page">rows per page</label> 
            </div>
          </div>
          <Pagination className="page-number-selector" count={Math.ceil(results.length / tableLength)}  showFirstButton showLastButton onChange={handlePageNumberChange}/>
        </div>

      }
    </div>
  )
}

export default ResultsTable