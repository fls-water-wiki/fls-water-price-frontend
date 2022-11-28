import React from 'react';
import { useField } from 'formik';

const DropdownInput = ({ header, description, required, ...props}) => {
  const [field, meta] = useField(props);
  
  return (
    <>
      <label htmlFor={props.id || props.name}>
        <h3>{header}{required && "*"}</h3>
        <p>{description}</p>
      </label>
      <select {...field} {...props} />
    </>
  );
};

export default DropdownInput;