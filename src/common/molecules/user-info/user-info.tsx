import React, { FunctionComponent } from "react";
import './styles.css';
import Image from "../../atoms/image";

const UserInfo:FunctionComponent<UserInfoProps> = ({ source, username }) => {
    return (
        <div className="user-info">
            <Image source="" alt="" textSize="avatar" className="avatar"/>
            <p className="user-text">{username}</p>
        </div>
    )
}

export default UserInfo;