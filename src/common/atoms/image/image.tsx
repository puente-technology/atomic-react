import React, { FunctionComponent } from "react";
import classNames from 'classnames';
import './styles.css';

const Avatar:FunctionComponent<ImageProps> = ({ className, source, alt, textSize}) => {

    return (
        <div className={classNames(className,"image")}>
            {source ? (
                 <img src={"data:,"} alt=""></img>
            ): <p>{textSize}</p>}
        </div>
    )
}

export default Avatar;