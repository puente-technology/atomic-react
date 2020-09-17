import React, { FunctionComponent } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    display: inline-block;
    border-radius: 10px;
    padding: 12px 32px;
    margin: 5px;
    text-transform: capitalize;
    font-size: 16px;
    color: white;
    background-color: red;
    text-decoration: none;
    border-width: 0;
    cursor: pointer;
    text-align: center;
`;

const Button:FunctionComponent<ButtonProps> = ({ onClick, text, className }) => {
    console.log('Class Name : ', className);
    return (
        <StyledButton className={className} onClick={onClick}>{text}</StyledButton>
    )
}

export default Button;