import React, { FunctionComponent } from "react";
import Image from "../../atoms/image/";
import styled from "styled-components";

const CardContainer = styled.div`
    width: 200px;
    border-style: solid;
    border-color: dimgray;
    border-width: 1px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    :hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
`;

const CardImage = styled(Image)`
    width: 100%;
    height: 10rem;
    margin: 0px;
`;


const Card:FunctionComponent<CardProps> = ({ source, header, description }) => {
    return (
        <CardContainer>
            <CardImage source={source} alt="" textSize="image"/>
            <h4>{header || "Lorem Ipsum"}</h4>
            <p className="description">{description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit"}</p>
        </CardContainer>
    )
}

export default Card;