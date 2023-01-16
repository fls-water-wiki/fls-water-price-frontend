/* eslint-disable react/prop-types */
import React from 'react';
import { Field } from 'formik';

import './RadioInput.css';

const RadioInput = ({ header, name, description, required, options, ...props}) => {
  return (

    <>
      <label htmlFor={props.id || props.name}>
        <h3>{header}{required && '*'}</h3>
        {description}
      </label>    
      
      <fieldset className='radio-options' id={name}>
        { 
          options.map(option => (
            <div key={option.value} className='option'>
              <Field type='radio' id={option.value} key={option.value} name={name} value={option.value} />
              <label htmlFor={option.value}>{option.label}</label>
            </div>
          ))
        }
      </fieldset>
    </>

  );
};

export default RadioInput;