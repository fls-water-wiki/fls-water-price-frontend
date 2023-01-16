/* eslint-disable react/prop-types */
import React from 'react';
import { useField } from 'formik';

import './NumberInput.css';

const NumberInput = ({header, description, required, ...props}) => {
  const [field] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>
        <h3>{header}{required && '*'}</h3>
        <p>{description}</p>
      </label>
      <input type='text' className='number-input-box' {...field} {...props} />
    </>
  );
};

export default NumberInput;