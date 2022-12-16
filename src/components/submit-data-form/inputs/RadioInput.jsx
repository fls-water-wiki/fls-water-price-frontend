import React from 'react';
import { useField } from 'formik';

import './RadioInput.css';

const RadioInput = ({ header, description, required, groupId, options, ...props}) => {
  const [field, meta] = useField(props);
  return (

    <>
      <label htmlFor={props.id || props.name}>
        <h3>{header}{required && "*"}</h3>
        {description}
      </label>    
      
      <fieldset className='radio-options' id={groupId}>
        { 
          options.map(option => (
            <div className='option'>
              <input type='radio' id={option.value} key={option.value} name={groupId} value={option.value} />
              <label key={option.value} for={option.value}>{option.label}</label>
            </div>
          ))
        }
      </fieldset>
    </>

  );
};

export default RadioInput;