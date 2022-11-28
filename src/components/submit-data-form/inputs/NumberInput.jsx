import React from 'react';
import { useField } from 'formik';

const NumberInput = ({header, description, required, ...props}) => {
  const [field, meta] = useField(props);

  return (
      <>
          <label htmlFor={props.id || props.name}>
              <h3>{header}{required && "*"}</h3>
              <p>{description}</p>
          </label>
          <input type='number' className='number-input' {...field} {...props} />
      </>
  );
};

export default NumberInput;