import React, { FunctionComponent, useCallback } from "react";
import classNames from 'classnames';
import './styles.css';

const Input:FunctionComponent<InputProps> = ({ type, className, value, setValue, placeholder}) => {

    const inputChangeHandler = useCallback((event) => {
        console.log('Event : ', event.target.value);
        setValue(event.target.value);
    },[setValue])

    return (
        <input className={classNames(className, "input")} type={type} value={value} onChange={inputChangeHandler} placeholder={placeholder || ''}></input>
    )
}

export default Input;