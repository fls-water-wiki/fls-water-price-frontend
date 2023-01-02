import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import './SubmitDataForm.css';

import NumberInput from './inputs/NumberInput';
import TextInput from './inputs/TextInput';
import DropdownInput from './inputs/DropdownInput';
import RadioInput from './inputs/RadioInput';
import RegionsDropdown from './inputs/RegionsDropdown';

import { SUBMISSION_FORM_FIELDS as FIELDS, PRICE_TYPES, USER_SECTORS, WATER_UNITS, CURRENCIES, SUBMISSION_FORM_INITIAL_VALUES as INITIAL_VALUES, AUTHOR_ROLES, COUNTRY_CODES } from '../../constants/form_constants';

import REGIONS from '../../constants/regions.json';
import { submitData } from '../../utils/api/submitData';

const YUP_REQUIRED = 'Required';

const SubmissionSchema = Yup.object().shape({
  [FIELDS.PRICE]: Yup.number()
    .min(0, 'Value/Price cannot be negative')
    .required(YUP_REQUIRED),
  [FIELDS.CURRENCY]: Yup.string()
    .required(YUP_REQUIRED),
  [FIELDS.DATE]: Yup.number()
    .min(1700, 'The year must be 1700 or later')
    .max(new Date().getFullYear(), 'The year must be the current year or earlier')
    .integer('Must be an integer (whole number)'),
  [FIELDS.WATER_UNIT]: Yup.string()
    .required(YUP_REQUIRED),
  [FIELDS.PRICE_TYPE]: Yup.string()
    .required(YUP_REQUIRED),
  [FIELDS.USER_SECTOR]: Yup.string(),
  [FIELDS.INDIGENOUS_TERRITORY]: Yup.string(),
  [FIELDS.COUNTRY]: Yup.string()
    .required(YUP_REQUIRED),
  [FIELDS.REGION]: Yup.string(),
  [FIELDS.SOURCE_URL]: Yup.string()
    .required(YUP_REQUIRED),
  [FIELDS.SOURCE_TITLE]: Yup.string()
    .required(YUP_REQUIRED),
  [FIELDS.SOURCE_DESCRIPTION]: Yup.string(),
  [FIELDS.SOURCE_DATE]: Yup.number()
    .min(1700, 'The year must be 1700 or later')
    .max(new Date().getFullYear(), 'The year must be the current year or earlier')
    .integer('Must be an integer (whole number)'),
  [FIELDS.SOURCE_AUTHORS]: Yup.string(),
});

const SubmitDataForm = () => {

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={SubmissionSchema}
      onSubmit={async (values) => {

        const submission = {
          ...values,
          [FIELDS.PRICE]: parseFloat(values[FIELDS.PRICE]),
          [FIELDS.DATE]: parseInt(values[FIELDS.DATE]),
          [FIELDS.SOURCE_DATE]: parseInt(values[FIELDS.SOURCE_DATE]),
          
        }
        
        try {
          await submitData(values);
        } catch (err) {
          console.log(err);
        }

    }}
    >
      {({ errors, touched }) => (
        <Form className='submit-data-form'>
          <NumberInput 
            header='Price or Value'
            description='Enter the number which represents the price of water or a derived value for water (e.g. 0.40). Do not include currency symbols (e.g. $).'
            required={true}
            name={FIELDS.PRICE}
          />
          {errors[FIELDS.PRICE] && touched[FIELDS.PRICE] ? (<div>{errors[FIELDS.PRICE]}</div>) : null}

          <DropdownInput
            header='Currency'
            description='Identify the ISO code for the applicable currency.'
            required={true}
            name={FIELDS.CURRENCY}
          >
            <option value=''>Select ...</option>
            {
              CURRENCIES.map(currency => <option value={currency.cc}>{currency.cc}</option>)
            }
          </DropdownInput>
          {errors[FIELDS.CURRENCY] && touched[FIELDS.CURRENCY] ? (<div>{errors[FIELDS.CURRENCY]}</div>) : null}

          <NumberInput
            header='Year of Price/Value'
            description='Provide the date when this price/value was applicable. Note that this may be different from the date when the data source was published.'
            required={false}
            name={FIELDS.DATE}
          />
          {errors[FIELDS.DATE] && touched[FIELDS.DATE] ? (<div>{errors[FIELDS.DATE]}</div>) : null}


          <RadioInput
            header='Water unit'
            description='Enter the unit of water to which this price/value applies. If the unit is not available, contact the database manager.'
            required={true}
            name={FIELDS.WATER_UNIT}
            options={WATER_UNITS}
          />
          {errors[FIELDS.WATER_UNIT] && touched[FIELDS.WATER_UNIT] ? (<div>{errors[FIELDS.WATER_UNIT]}</div>) : null}


          <RadioInput
            header='Price/value type'
            description={
              <>
                Select the type of price/value. These are defined as:
                  <ul>
                    <li>Statutory price: Set by a regulating government body; applicable to one or multiple individuals and groups; e.g. published in legislation.</li>
                    <li>Transactional price: Paid in a 1-1 transaction; e.g. published in a contract.</li>
                    <li>Environmental value: Derived based on the set economic value of an environmental product/common (e.g. fish). This includes compensatory fees determined proactively or after the fact, e.g. payments to community members for impacts to hunting or payments to government after pollution.</li>
                    <li>Derived value: Derived based on capital costs and profit of a company.</li>
                  </ul>
              </>
            }
            required={true}
            name={FIELDS.PRICE_TYPE}
            options={PRICE_TYPES}
          />
          {errors[FIELDS.PRICE_TYPE] && touched[FIELDS.PRICE_TYPE] ? (<div>{errors[FIELDS.PRICE_TYPE]}</div>) : null}


          <DropdownInput 
            header='User sector'
            description={
              <>
                Use <a href="<https://airtable.com/shr0RqSIIPRkIMaBE">NAICS standards for industry codes</a> 
              </>
            }
            required={false}
            name={FIELDS.USER_SECTOR}
          >
            <option value=''>Select ...</option>
            {
              USER_SECTORS.map(sector => <option value={sector.value}>{sector.name}</option>)
            }
          </DropdownInput>
          {errors[FIELDS.USER_SECTOR] && touched[FIELDS.USER_SECTOR] ? (<div>{errors[FIELDS.USER_SECTOR]}</div>) : null}


          <TextInput
            header='Indigenous territory'
            description='Include the traditional territory/ies of Indigenous people(s) affected by the use of water, if noted in the data source.'
            required={false}
            name={FIELDS.INDIGENOUS_TERRITORY}
          />
          {errors[FIELDS.INDIGENOUS_TERRITORY] && touched[FIELDS.INDIGENOUS_TERRITORY] ? (<div>{errors[FIELDS.INDIGENOUS_TERRITORY]}</div>) : null}

          <DropdownInput 
            header='Country'
            required={true}
            name={FIELDS.COUNTRY}
          >
            <option value=''>Select ...</option>
            {
              COUNTRY_CODES.map(country => <option value={country.let3}>{country.name}</option>)
            }
          </DropdownInput>
          {errors[FIELDS.COUNTRY] && touched[FIELDS.COUNTRY] ? (<div>{errors[FIELDS.COUNTRY]}</div>) : null}

          <RegionsDropdown label='Region' name={FIELDS.REGION} regions={REGIONS} />
          {errors[FIELDS.REGION] && touched[FIELDS.REGION] ? (<div>{errors[FIELDS.REGION]}</div>) : null}

          <hr style={{marginTop: '2em'}}></hr>
          <h2>Source Information</h2>

          <TextInput
            header='URL/URI'
            description='Unique identifier for the data source. This may be the URL of a webpage, or another unique identifier. If possible, please use a stable URL (if unsure, please webarchive it at https://archive.org/web/). If it is a print resource, please provide a link to a WorldCat record or other online record.'
            required={true}
            name={FIELDS.SOURCE_URL}
          />
          {errors[FIELDS.SOURCE_URL] && touched[FIELDS.SOURCE_URL] ? (<div>{errors[FIELDS.SOURCE_URL]}</div>) : null}

          <TextInput
            header='Title'
            description='Title of data source. Please record as written in the source.'
            required={true}
            name={FIELDS.SOURCE_TITLE}
          />
          {errors[FIELDS.SOURCE_TITLE] && touched[FIELDS.SOURCE_TITLE] ? (<div>{errors[FIELDS.SOURCE_TITLE]}</div>) : null}

          <NumberInput
            header='Date'
            description='Provide the date of publication of the data source (or, if unpublished, the date of creation if possible). Record the date as presented in the text.'
            required={false}
            name={FIELDS.SOURCE_DATE}
          />
          {errors[FIELDS.SOURCE_DATE] && touched[FIELDS.SOURCE_DATE] ? (<div>{errors[FIELDS.SOURCE_DATE]}</div>) : null}

          <TextInput
            header='Description'
            description='Provide a short description of the data source. This may be copied directly from an abstract or other summary provided in the text.'
            required={false}
            name={FIELDS.SOURCE_DESCRIPTION}
          />
          {errors[FIELDS.SOURCE_DESCRIPTION] && touched[FIELDS.SOURCE_DESCRIPTION] ? (<div>{errors[FIELDS.SOURCE_DESCRIPTION]}</div>) : null}

          <TextInput
            header='Author(s)'
            description='Type in the names of the authors provided in the source. Separate them using commas.'
            required={false}
            name={FIELDS.SOURCE_AUTHORS}
          />
          {errors[FIELDS.SOURCE_AUTHORS] && touched[FIELDS.SOURCE_AUTHORS] ? (<div>{errors[FIELDS.SOURCE_AUTHORS]}</div>) : null}

          <div>
            <button type="submit" className="btn" style={{marginLeft: 0, marginTop: '2em'}}>Submit</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SubmitDataForm;