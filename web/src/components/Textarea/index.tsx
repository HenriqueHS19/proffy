import React, { TextareaHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import './styles.css';

interface ITextarea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string;
    label: string;
}

const Textarea: React.FC<ITextarea> = function ({ name, label, ...rest }) {

    const textAreaRef = useRef(null);
    const { fieldName, defaultValue, registerField } = useField(name);

    useEffect(function() {
        registerField({
            name: fieldName,
            ref: textAreaRef.current,
            path: 'value',
        });
    }, [fieldName, registerField]);

    return (
        <div className="textarea-block">
            <label htmlFor={ name }> { label } </label>
            <textarea ref = {textAreaRef } defaultValue = { defaultValue } id={ name } { ...rest } />
        </div>
    );
};

export default Textarea;

