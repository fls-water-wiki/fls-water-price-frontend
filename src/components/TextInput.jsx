import React from 'react';

import './TextInput.css';

function TextInput({ label, id, value, onChange }) {

    return (
        <div className="input-container">
            <label className="label" for={id}>{label}:</label>
            <input type="text" className="input" id={id} name={id} value={value} onChange={onChange}/>
        </div>
    )
}

export default TextInput;