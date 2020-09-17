import React, { FunctionComponent } from "react";
import styled from "styled-components";

const ImageContainer = styled.div`
    width: 100px;
    height: 100px;
    margin: 10px;
    background-color: gray;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
`;

const Image:FunctionComponent<ImageProps> = ({ className, source, alt, textSize}) => {

    return (
        <ImageContainer>
            {source ? (
                 <img src={"data:,"} alt=""></img>
            ): <p>{textSize}</p>}
        </ImageContainer>
    )
}

export default Image;