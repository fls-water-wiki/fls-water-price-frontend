import React from 'react';
import { useField } from 'formik';

const RadioInput = ({ header, description, required, groupId, options, ...props}) => {
  const [field, meta] = useField(props);
  return (

    <>
      <label htmlFor={props.id || props.name}>
        <h3>{header}{required && "*"}</h3>
        <p>{description}</p>
      </label>    
      
      <fieldset id={groupId}>
        { 
          options.forEach(option => (
            <>
              <input type='radio' id={option.value} name={groupId} value={option.value} />
              <label for={option.value}>{option.label}</label>
            </>
          ))
        }
      </fieldset>
    </>

  );
};

export default RadioInput;