import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import './styles.css';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

const Input: React.FC<IInput> = function ({ name, label, ...rest }) {

    const inputRef = useRef(null);
    const { fieldName, defaultValue, registerField } = useField(name);

    useEffect(function() {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        });
    }, [fieldName, registerField]);

    return (
        <div className="input-block">
            <label htmlFor={ name }> { label } </label>
            <input ref = { inputRef } defaultValue = { defaultValue } type="text" name={ name } { ...rest } />
        </div>
    );
};

export default Input;

