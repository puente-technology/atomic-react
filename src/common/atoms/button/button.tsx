import React, { FunctionComponent } from "react";
import './styles.css';
import classNames from 'classnames';

const Button:FunctionComponent<ButtonProps> = ({ onClick, text, className }) => {
    console.log('Class Name : ', className);
    return (
        <button className={classNames("button", className)} onClick={onClick}>{text}</button>
    )
}

export default Button;