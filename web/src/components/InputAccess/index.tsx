import React, { useState, useEffect, useRef, InputHTMLAttributes } from 'react';
import { useField } from '@unform/core';

import './styles.css';

interface IInputAccess extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    placeholderInput: string;
    typeInput: 'simple' | 'password';
}

const InputAccess: React.FC<IInputAccess> = function ({ name, placeholderInput, typeInput, children, ...rest }) {

    const [value, setValue] = useState('');

    const inputRef = useRef(null);
    const { fieldName, registerField, defaultValue } = useField(name);

    useEffect(function () {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        })
    }, [fieldName, registerField]);

    return (
        <div className="input-box">
            <input
                ref={inputRef}
                type="text"
                onChange = { function (event) {
                    setValue(event.target.value);
                }}
                className = {typeInput === 'password' ? 'input-password' : ''}
                defaultValue = {defaultValue}
                {...rest}
            />
            <span className={value ? 'filled' : 'placeholder'}> {placeholderInput} </span>
            <span className="indicator" />

            { children }

        </div>
    );
}

export default InputAccess;