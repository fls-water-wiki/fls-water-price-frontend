import React, {useState} from 'react';

import './ResultsTable.css';

import { Pagination } from '@mui/material';
import { CSVLink } from 'react-csv';

import { csvHeaders, TABLE_COLUMN_DESCRIPTIONS } from '../constants/constants';

function ResultsTable({ results, showModal }) {

  const [pageNumber, setPageNumber] = useState(1);
  const [tableLength, setTableLength] = useState(10);

  const handlePageNumberChange = (e, value) => {
    setPageNumber(value);
  };

  const handleTableLengthChange = (e) => {
    setTableLength(e.target.value);
    setPageNumber(1);
  };

  return (
    <div className="results-table-container">

      {/* checks if there are any results to be displayed in the current page */}
      {(results.length > 0 && (pageNumber - 1) * tableLength < results.length)
       && 

          <table className="results-table">
            <tr className="results-table-header-row">
              {
                csvHeaders.map(header =>
                  <th className="results-table-header-item" key={header.key} 
                    onClick={() => 
                      showModal(header.label, TABLE_COLUMN_DESCRIPTIONS[header.key])
                    }
                  >
                    {header.label}
                  </th>
                )
              }

            </tr>
            {/* obtains the results in the current page and displays them */}
            {
              results.slice(tableLength * (pageNumber - 1), Math.min(tableLength * pageNumber, results.length)).map((result, rowNumber) => {

                const resultFields = [
                  result.vp_wtrtrt, 
                  result.vp_wtrunit, 
                  +parseInt(result.vp_num).toFixed(2), 
                  result.curr_code, 
                  result.vp_date,
                  result.nat_code
                ];
                  
                return(
                  <tr key={rowNumber} className="results-table-data-row">
                    {
                      resultFields.map(resultField => (
                        <td key={resultField} className="results-table-data-item">{resultField}</td>
                      ))
                    }
                    {/* separate due to different formatting */}
                    <td className="results-table-data-item">
                      <a href={result.source_uri}>{result.source_title}</a>
                    </td>
                  </tr>
                );
              })}
          </table>
      }

      {
        (results.length > 0) && 
        <div className="table-bottom-content">

          <div className="page-number-container">
            <div className="num-results-rows-per-page-container">
              <div className='number-of-results'>
                Showing {(pageNumber - 1) * tableLength + 1} - {Math.min(pageNumber * tableLength, results.length)} of {results.length} results
              </div>
              <div className="rows-per-page">
                <label htmlFor="rows-per-page">Show </label>
                <select name="rows-per-page" id="rows-per-page" className="rows-per-page-selector" onChange={handleTableLengthChange}>
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>
                <label htmlFor="rows-per-page">rows per page</label> 
              </div>
            </div>
            <Pagination className="page-number-selector" count={Math.ceil(results.length / tableLength)}  showFirstButton showLastButton onChange={handlePageNumberChange}/>
          </div>

          
          <CSVLink
            className="csv-link"
            data={results}
            headers={csvHeaders}
            filename={'results.csv'}
            target="_blank"
          >
            Download CSV of results
          </CSVLink>
        </div>

      }
    </div>
  );
}

export default ResultsTable;