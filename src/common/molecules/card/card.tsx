import React, { FunctionComponent } from "react";
import './styles.css';
import Image from "../../atoms/image/";

const Card:FunctionComponent<CardProps> = ({ source, header, description }) => {
    return (
        <div className="card-container">
            <Image source={source} alt="" textSize="image" className="card-image"/>
            <h4>{header || "Lorem Ipsum"}</h4>
            <p className="description">{description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit"}</p>
        </div>
    )
}

export default Card;