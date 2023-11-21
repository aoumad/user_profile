import React from "react";

interface FriendItemProps {
    name: string;
    picture: string;
    id: string;
}

const FriendItem: React.FC<FriendItemProps> = (props) => {
    return (
        <div className="FriendItem">
            <div className="friend-container">
                <div className="friend-image">
                    <img src={props.picture} alt="Profile" className="friend-image" />
                </div>
                <div className="friend-name">
                    <span className="friend-name">{props.name}</span>
                </div>
            </div>
        </div>
    );
};