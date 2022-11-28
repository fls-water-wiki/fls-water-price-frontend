import React from 'react';

const SubmitDataInput = ({ header, description, type, required}) => {
  return (
    <>
        <label>
          <h3>{header}{required && "*"}</h3>
          <p>{description}</p>
        </label>
        <input type={type}></input>
    </>
  );
};

export default SubmitDataInput;