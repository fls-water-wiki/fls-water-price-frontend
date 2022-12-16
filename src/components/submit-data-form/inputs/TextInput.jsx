import React from 'react';
import { useField } from 'formik';

import './TextInput.css'

const TextInput = ({ header, description, required, ...props}) => {
    const [field, meta] = useField(props);

    return (
        <>
            <label htmlFor={props.id || props.name}>
                <h3>{header}{required && "*"}</h3>
                <p>{description}</p>
            </label>
            <input className='text-input' {...field} {...props} />
        </>
    );
};

export default TextInput;