import React, {useState} from 'react'

import './ResultsTable.css';

import TextInput from './TextInput';
import PageNumberForm from './PageNumberForm';

function ResultsTable({ results }) {

  const [pageNumber, setPageNumber] = useState(1);

  const handlePageNumberChange = (e) => {
    setPageNumber(parseInt(e.target.value));
  }

  const fields = ["ID", "Water Treatment", "Water Unit", "Price", "Date", "Currency", "Country ID", "Source URI"];
  // country and source
  return (
    <div className="results-table-container">

      {(results.length > 0 && (pageNumber - 1) * 10 < results.length)
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
              results.slice(10*(pageNumber - 1), Math.min(10*pageNumber, results.length)).map(result => {

                  const resultFields = [
                    result.vp_id,
                    result.vp_water_treatment, 
                    result.vp_water_unit, 
                    result.vp_num, 
                    result.vp_date,
                    result.currency_id, 
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
                      <a href={result.source_uri}>Source</a>
                    </td>
                  </tr>
                )
              })}
          </table>
      }

      <div className="page-number-container">
        <PageNumberForm onSubmit={setPageNumber}/>
        <p> 
          of {Math.round(results.length / 10)} 
        </p>
      </div>
    </div>
  )
}

export default ResultsTable