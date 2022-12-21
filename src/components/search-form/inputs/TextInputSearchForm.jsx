import React from 'react';
import { useField } from 'formik';

import './SearchInputs.css'

const TextInputSearchForm = ({ label, ...props}) => {
    const [field, meta] = useField(props);

    return (
        <div className='input-container'>
            <label className='label' htmlFor={props.id || props.name}>
                {label}:
            </label>
            <input className='input' {...field} {...props} />
        </div>
    );
};

export default TextInputSearchForm;