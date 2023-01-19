import React from 'react';
import { useField } from 'formik';

import './SearchInputs.css';
import { SEARCH_FORM_FIELD_DESCRIPTIONS } from '../../../constants/form_constants';

const NumberInputSearchForm = ({label, showModal, ...props}) => {
  const [field] = useField(props);

  return (
    <div className='input-container'>
      <label className='label' htmlFor={props.id || props.name} onClick={() => showModal(label, SEARCH_FORM_FIELD_DESCRIPTIONS[props.name])}>
        {label}:
      </label>
      <input type='text' className='input' {...field} {...props} />
    </div>
  );
};

export default NumberInputSearchForm;