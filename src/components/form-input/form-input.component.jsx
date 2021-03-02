import React from 'react';

import './form-input.style.scss';

const FormInput = ({handleChange, label, ...otherInputProps}) => (
    <div className="group">
        <input onChange={handleChange} className="form-input" {...otherInputProps} />
        {
            label ?
            <label className={`${otherInputProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
            : null
        }
    </div>
)

export default FormInput;