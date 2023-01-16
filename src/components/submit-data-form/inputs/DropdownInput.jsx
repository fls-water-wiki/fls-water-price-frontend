/* eslint-disable react/prop-types */
import React from 'react';
import { useField } from 'formik';

import './DropdownInput.css';

const DropdownInput = ({ header, description, required, ...props}) => {
  const [field] = useField(props);
  
  return (
    <>
      <label htmlFor={props.id || props.name}>
        <h3>{header}{required && '*'}</h3>
        <p>{description}</p>
      </label>
      <select className='dropdown-select' {...field} {...props} />
    </>
  );
};

export default DropdownInput;