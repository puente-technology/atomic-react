import React, { FunctionComponent } from "react";
import Image from "../../atoms/image";
import styled from "styled-components";

const UserInfoContainer = styled.div`
    display: flex;
`;

const Avatar = styled(Image)`
    width: 60px;
    height: 60px;
    border-radius: 30px;
`;

const UserText = styled.div`
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 700;
`

const UserInfo:FunctionComponent<UserInfoProps> = ({ source, username }) => {
    return (
        <UserInfoContainer>
            <Avatar source="" alt="" textSize="avatar"/>
            <UserText>{username}</UserText>
        </UserInfoContainer>
    )
}

export default UserInfo;