import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import './SearchForm.css';

import TextInput from './inputs/TextInputSearchForm';
import DropdownInput from './inputs/DropdownInputSearchForm';
import NumberInput from './inputs/NumberInputSearchForm';
import RegionsInputSearchForm from './inputs/RegionsDropdownSearchForm';
import { performQuery } from '../../utils/api/query';

import { SEARCH_FORM_FIELDS as FIELDS, SEARCH_FORM_INITIAL_VALUES as INITIAL_VALUES, USER_SECTORS, COUNTRY_CODES } from '../../constants/form_constants';
import REGIONS from '../../constants/regions.json';

const SubmissionSchema = Yup.object().shape({
  [FIELDS.COUNTRY]: Yup.string(),
  [FIELDS.REGION]: Yup.string(),
  [FIELDS.EARLIEST_YEAR]: Yup.number(),
  [FIELDS.LATEST_YEAR]: Yup.number(),
  [FIELDS.USER_SECTOR]: Yup.string(),
  [FIELDS.WATER_TREATMENT]: Yup.string(),
});

const SearchForm = ({ setResults, setSearched }) => {

  return (
    <div className="search-form-container">

      <div className="form-header">
        <p className="form-header-text">Search Criteria</p>
      </div>

      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={SubmissionSchema}
        onSubmit={async (values) => {
          try {
            const res = await performQuery({
              'nat_code': values[FIELDS.COUNTRY].toUpperCase(),
              'region_code': values[FIELDS.REGION],
              'earliest_year': parseInt(values[FIELDS.EARLIEST_YEAR]),
              'latest_year': parseInt(values[FIELDS.LATEST_YEAR]),
              'sector_code':  values[FIELDS.USER_SECTOR],
              'water_treatment':  values[FIELDS.WATER_TREATMENT]
            });
            const rows = res.data.data.rows;
            setResults(rows);
            setSearched(true);
          }  catch (err) {
            console.log(err);
          }
        }}
        
      >
        {({ handleReset}) => (
          <Form className="form">
            <div className='column'>
              <DropdownInput label='Country' name={FIELDS.COUNTRY}>
                <option value=''>Select ...</option>
                {
                  COUNTRY_CODES.map(country => <option key={country.let3} value={country.let3}>{country.name}</option>)
                }
              </DropdownInput>
              
              <RegionsInputSearchForm label='Region' name={FIELDS.REGION} regions={REGIONS} />
              <NumberInput label='Earliest Year' name={FIELDS.EARLIEST_YEAR} />
              <NumberInput label='Latest Year' name={FIELDS.LATEST_YEAR} />

              <DropdownInput label='User Sector' name={FIELDS.USER_SECTOR}>
                <option value=''>Select ...</option>
                {
                  USER_SECTORS.map(sector => <option key={sector.value} value={sector.value}>{sector.name}</option>)
                }
              </DropdownInput>

              <TextInput label='Water Treatment' name={FIELDS.WATER_TREATMENT} />
            </div>
            <div>
              <button type="submit" className="btn">Submit</button>
              <button type="reset" className="btn" onClick={handleReset}>Reset</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SearchForm;