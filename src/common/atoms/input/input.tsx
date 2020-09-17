import React, { FunctionComponent, useCallback } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
    padding: 10px 5px;
    border-radius: 10px;
    border-width: 1px;
`;

const Input:FunctionComponent<InputProps> = ({ setValue, ...props }) => {
    const inputChangeHandler = useCallback((event) => {
        setValue(event.target.value);
    },[setValue])

    return (
        <StyledInput {...props} onChange={inputChangeHandler} />
    )
}

export default Input;