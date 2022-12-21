import React from 'react';
import { useField } from 'formik';

import './SearchInputs.css';

const NumberInputSearchForm = ({label, ...props}) => {
  const [field, meta] = useField(props);

  return (
      <div className='input-container'>
          <label className='label' htmlFor={props.id || props.name}>
              {label}:
          </label>
          <input type='text' className='input' {...field} {...props} />
      </div>
  );
};

export default NumberInputSearchForm;