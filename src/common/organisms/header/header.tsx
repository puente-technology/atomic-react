import React, { FunctionComponent } from "react";
import './styles.css';
import UserInfo from "../../molecules/user-info";

const Header:FunctionComponent<HeaderProps> = ({ username }) => {

    return (
        <div className="header">
          <h2>Atomic Test App</h2>
          <UserInfo source="" username={username}/>
        </div>
    )
}

export default Header;