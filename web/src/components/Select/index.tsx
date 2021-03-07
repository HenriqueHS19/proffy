import React, { SelectHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import './styles.css';

interface ISelect extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string;
    label: string;
    options: Array<{
        value: string;
        label: string;
    }>;
}

const Select: React.FC<ISelect> = function ({ name, label, options, ...rest }) {

    const selectRef = useRef(null);
    const { fieldName, registerField } = useField(name);

    useEffect(function() {
        registerField({
            name: fieldName,
            ref: selectRef.current,
            path: 'value',
        });
    }, [fieldName, registerField]);

    return (
        <div className="select-block">
            <label htmlFor={ name }> { label } </label>
            <select ref = {selectRef} name={ name } defaultValue="" { ...rest } >
                <option value="" disabled hidden> Selecione uma opção </option>

                { options.map(function(option) {
                    return (
                        <option key = {option.value} value = {option.value}> { option.label } </option>
                    );
                })}
            </select>
        </div>
    );
};

export default Select;

