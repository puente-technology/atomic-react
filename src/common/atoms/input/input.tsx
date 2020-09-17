import React, { FunctionComponent, useCallback } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
    padding: 10px 5px;
    border-radius: 10px;
    border-width: 1px;
`;

const Input:FunctionComponent<InputProps> = ({ type, className, value, setValue, placeholder}) => {

    const inputChangeHandler = useCallback((event) => {
        console.log('Event : ', event.target.value);
        setValue(event.target.value);
    },[setValue])

    return (
        <StyledInput type={type} value={value} onChange={inputChangeHandler} placeholder={placeholder || ''} />
    )
}

export default Input;