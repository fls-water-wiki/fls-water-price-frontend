import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import './SubmitDataForm.css';

import NumberInput from './inputs/NumberInput';
import TextInput from './inputs/TextInput';
import DropdownInput from './inputs/DropdownInput';
import RadioInput from './inputs/RadioInput';

import { SUBMISSION_FORM_FIELDS as FIELDS, PRICE_TYPES, USER_SECTORS, WATER_UNITS, CURRENCIES, SUBMISSION_FORM_INITIAL_VALUES as INITIAL_VALUES, AUTHOR_ROLES } from '../../constants/form_constants';

const YUP_REQUIRED = 'Required';

const SubmissionSchema = Yup.object().shape({
  [FIELDS.PRICE]: Yup.number()
    .min(0, 'Value/Price cannot be negative')
    .required(YUP_REQUIRED),
  [FIELDS.CURRENCY]: Yup.string()
    .required(YUP_REQUIRED),
  [FIELDS.DATE]: Yup.number()
    .required(YUP_REQUIRED),
  [FIELDS.WATER_UNIT]: Yup.string()
    .required(YUP_REQUIRED),
  [FIELDS.PRICE_TYPE]: Yup.string()
    .required(YUP_REQUIRED),
  [FIELDS.USER_SECTOR]: Yup.string()
    .required(YUP_REQUIRED),
  [FIELDS.INDIGENOUS_TERRITORY]: Yup.string(),
  [FIELDS.REGION]: Yup.string()
    .required(YUP_REQUIRED),
  [FIELDS.DATA_SOURCE]: Yup.string()
    .required(YUP_REQUIRED),
  [FIELDS.SOURCE_URL]: Yup.string()
    .required(YUP_REQUIRED),
  [FIELDS.SOURCE_TITLE]: Yup.string()
    .required(YUP_REQUIRED),
  [FIELDS.SOURCE_DESCRIPTION]: Yup.string()
    .required(YUP_REQUIRED),
  [FIELDS.SOURCE_DATE]: Yup.number()
    .required(YUP_REQUIRED),
  [FIELDS.SOURCE_AUTHOR_1]: Yup.string()
    .required(YUP_REQUIRED),
  [FIELDS.SOURCE_AUTHOR_1_ROLE]: Yup.string()
    .required(YUP_REQUIRED),
  [FIELDS.SOURCE_AUTHOR_2]: Yup.string(),
  [FIELDS.SOURCE_AUTHOR_2_ROLE]: Yup.string(),
  [FIELDS.SOURCE_AUTHOR_3]: Yup.string(),
  [FIELDS.SOURCE_AUTHOR_3_ROLE]: Yup.string(),
});

const SubmitDataForm = () => {

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={SubmissionSchema}
      onSubmit={(values) => {

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
            required={false}
            name={FIELDS.WATER_UNIT}
            groupId='water_unit'
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
            groupId={'price_value_type'}
            required={false}
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
              USER_SECTORS.map(sector => <option value={sector.value}>{sector.code}</option>)
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
            header='Region'
            required={false}
            name={FIELDS.REGION}
            // TODO: options
          />
          {errors[FIELDS.REGION] && touched[FIELDS.REGION] ? (<div>{errors[FIELDS.REGION]}</div>) : null}

          <TextInput
            header='Data source'
            description='Provide a source for your information. Search by URL/URI; if your source is not already listed, please add it using the “+” sign next to the dropdown list.'
            required={false}
            name={FIELDS.DATA_SOURCE}
          />
          {errors[FIELDS.DATA_SOURCE] && touched[FIELDS.DATA_SOURCE] ? (<div>{errors[FIELDS.DATA_SOURCE]}</div>) : null}

          <div>
            <TextInput
              header='URL/URI'
              description='Unique identifier for the data source. This may be the URL of a webpage, or another unique identifier. If possible, please use a stable URL (if unsure, please webarchive it at https://archive.org/web/). If it is a print resource, please provide a link to a WorldCat record or other online record.'
              required={false}
              name={FIELDS.SOURCE_URL}
            />
            {errors[FIELDS.SOURCE_URL] && touched[FIELDS.SOURCE_URL] ? (<div>{errors[FIELDS.SOURCE_URL]}</div>) : null}

            <TextInput
              header='Title'
              description='Title of data source. Please record as written in the source.'
              required={false}
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
              header='Author 1'
              description='Type in the name of the first author provided in the source'
              required={false}
              name={FIELDS.SOURCE_AUTHOR_1}
            />
            {errors[FIELDS.SOURCE_AUTHOR_1] && touched[FIELDS.SOURCE_AUTHOR_1] ? (<div>{errors[FIELDS.SOURCE_AUTHOR_1]}</div>) : null}

            <DropdownInput
              header='Role of author 1'
              description='Select the role of the first author'
              required={false}
              name={FIELDS.SOURCE_AUTHOR_1_ROLE}
            >
              <option value=''>Select ...</option>
              {
                AUTHOR_ROLES.map(role => <option value={role.value}>{role.label}</option>)
              }
            </DropdownInput>
            {errors[FIELDS.SOURCE_AUTHOR_1_ROLE] && touched[FIELDS.SOURCE_AUTHOR_1_ROLE] ? (<div>{errors[FIELDS.SOURCE_AUTHOR_1_ROLE]}</div>) : null}

            <TextInput
              header='Author 2'
              description='Type in the name of the second author provided in the source, if any'
              required={false}
              name={FIELDS.SOURCE_AUTHOR_2}
            />
            {errors[FIELDS.SOURCE_AUTHOR_2] && touched[FIELDS.SOURCE_AUTHOR_2] ? (<div>{errors[FIELDS.SOURCE_AUTHOR_2]}</div>) : null}

            <DropdownInput
              header='Role of author 2'
              description='Select the role of the second author, if any'
              required={false}
              name={FIELDS.SOURCE_AUTHOR_2_ROLE}
            >
              <option value=''>Select ...</option>
              {
                AUTHOR_ROLES.map(role => <option value={role.value}>{role.label}</option>)
              }
            </DropdownInput>
            {errors[FIELDS.SOURCE_AUTHOR_2_ROLE] && touched[FIELDS.SOURCE_AUTHOR_2_ROLE] ? (<div>{errors[FIELDS.SOURCE_AUTHOR_2_ROLE]}</div>) : null}

            <TextInput
              header='Author 3'
              description='Type in the name of the third author provided in the source, if any'
              required={false}
              name={FIELDS.SOURCE_AUTHOR_3}
            />
            {errors[FIELDS.SOURCE_AUTHOR_3] && touched[FIELDS.SOURCE_AUTHOR_3] ? (<div>{errors[FIELDS.SOURCE_AUTHOR_3]}</div>) : null}

            <DropdownInput
              header='Role of author 3'
              description='Select the role of the third author, if any'
              required={false}
              name={FIELDS.SOURCE_AUTHOR_3_ROLE}
            >
              <option value=''>Select ...</option>
              {
                AUTHOR_ROLES.map(role => <option value={role.value}>{role.label}</option>)
              }
            </DropdownInput>
            {errors[FIELDS.SOURCE_AUTHOR_3_ROLE] && touched[FIELDS.SOURCE_AUTHOR_3_ROLE] ? (<div>{errors[FIELDS.SOURCE_AUTHOR_3_ROLE]}</div>) : null}

          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SubmitDataForm;