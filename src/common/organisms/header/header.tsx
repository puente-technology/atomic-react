import React, { FunctionComponent } from "react";
import UserInfo from "../../molecules/user-info";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #dedcfff7;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  align-items: center;
`;

const Header:FunctionComponent<HeaderProps> = ({ username }) => {
    return (
        <HeaderContainer>
          <h2>Atomic Test App</h2>
          <UserInfo source="" username={username}/>
        </HeaderContainer>
    )
}

export default Header;