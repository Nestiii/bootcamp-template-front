import React from "react";
import './Input.css';

const Input = ({onChange, placeholder, value, type}) => {

    const numbersOnly = (value) => onChange(value.replace(/\D/g, ''));

    return (
        <input
            value={value}
            placeholder={placeholder}
            className={'input'}
            onChange={(e) =>
                type === 'numeric' ? numbersOnly(e.target.value) : onChange(e.target.value)
            }
            type={type}
        />
    )
}

export default Input;
