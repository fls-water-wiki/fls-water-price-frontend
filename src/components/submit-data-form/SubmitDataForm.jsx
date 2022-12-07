import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';

import './SubmitDataForm.css';

import NumberInput from './inputs/NumberInput';
import TextInput from './inputs/TextInput';
import DropdownInput from './inputs/DropdownInput';
import RadioInput from './inputs/RadioInput';

import { FIELDS, PRICE_TYPES, USER_SECTORS, WATER_UNITS, CURRENCIES, INITIAL_VALUES, AUTHOR_ROLES } from '../../constants/form_constants';

const SubmitDataForm = () => {

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={(values) => {

      }}
    >
      <Form className='submit-data-form'>
        <NumberInput 
          header='Price or Value'
          description='Enter the number which represents the price of water or a derived value for water (e.g. 0.40). Do not include currency symbols (e.g. $).'
          required={true}
          name={FIELDS.PRICE}
        />

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

        <NumberInput
          header='Year of Price/Value'
          description='Provide the date when this price/value was applicable. Note that this may be different from the date when the data source was published.'
          required={false}
          name={FIELDS.DATE}
        />

        <RadioInput
          header='Water unit'
          description='Enter the unit of water to which this price/value applies. If the unit is not available, contact the database manager.'
          required={false}
          name={FIELDS.WATER_UNIT}
          groupId='water_unit'
          options={WATER_UNITS}
        />

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

        <TextInput
          header='Indigenous territory'
          description='Include the traditional territory/ies of Indigenous people(s) affected by the use of water, if noted in the data source.'
          required={false}
          name={FIELDS.INDIGENOUS_TERRITORY}
        />

        <DropdownInput 
          header='Region'
          required={false}
          name={FIELDS.REGION}
          // TODO: options
        />

        <TextInput
          header='Data source'
          description='Provide a source for your information. Search by URL/URI; if your source is not already listed, please add it using the “+” sign next to the dropdown list.'
          required={false}
          name={FIELDS.DATA_SOURCE}
        />


        <div>
          <TextInput
            header='URL/URI'
            description='Unique identifier for the data source. This may be the URL of a webpage, or another unique identifier. If possible, please use a stable URL (if unsure, please webarchive it at https://archive.org/web/). If it is a print resource, please provide a link to a WorldCat record or other online record.'
            required={false}
            name={FIELDS.SOURCE_URL}
          />
          <TextInput
            header='Title'
            description='Title of data source. Please record as written in the source.'
            required={false}
            name={FIELDS.SOURCE_TITLE}
          />
          <NumberInput
            header='Date'
            description='Provide the date of publication of the data source (or, if unpublished, the date of creation if possible). Record the date as presented in the text.'
            required={false}
            name={FIELDS.SOURCE_DATE}
          />
          <TextInput
            header='Description'
            description='Provide a short description of the data source. This may be copied directly from an abstract or other summary provided in the text.'
            required={false}
            name={FIELDS.SOURCE_DESCRIPTION}
          />
          <TextInput
            header='Author 1'
            description='Type in the name of the first author provided in the source'
            required={false}
            name={FIELDS.SOURCE_AUTHOR_1}
          />
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
          <TextInput
            header='Author 2'
            description='Type in the name of the second author provided in the source, if any'
            required={false}
            name={FIELDS.SOURCE_AUTHOR_1}
          />
          <DropdownInput
            header='Role of author 2'
            description='Select the role of the second author, if any'
            required={false}
            name={FIELDS.SOURCE_AUTHOR_1_ROLE}
          >
            <option value=''>Select ...</option>
            {
              AUTHOR_ROLES.map(role => <option value={role.value}>{role.label}</option>)
            }
          </DropdownInput>
          <TextInput
            header='Author 3'
            description='Type in the name of the third author provided in the source, if any'
            required={false}
            name={FIELDS.SOURCE_AUTHOR_1}
          />
          <DropdownInput
            header='Role of author 3'
            description='Select the role of the third author, if any'
            required={false}
            name={FIELDS.SOURCE_AUTHOR_1_ROLE}
          >
            <option value=''>Select ...</option>
            {
              AUTHOR_ROLES.map(role => <option value={role.value}>{role.label}</option>)
            }
          </DropdownInput>

        </div>
      </Form>
    </Formik>
  );
};

export default SubmitDataForm;