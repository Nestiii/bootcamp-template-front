import React from "react";
import './Input.css';

const Input = ({onChange, placeholder}) => {

    return (
        <input
            placeholder={placeholder}
            className={'input'}
            onChange={(e) => onChange(e.target.value)}
        />
    )
}

export default Input;
