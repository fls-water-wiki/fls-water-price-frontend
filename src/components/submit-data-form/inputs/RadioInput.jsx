import React from 'react';
import { useField } from 'formik';

const RadioInput = ({ groupId, options, ...props}) => {
  const [field, meta] = useField(props);
  return (

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

  );
};

export default RadioInput;