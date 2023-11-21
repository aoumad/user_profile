import React from "react";
import { Friend } from './FriendItem';


export const Friends = ({ friends }) => {
    return (
        <div className="friends">
        <h2>Friends</h2>
        <ul>
            {friends.map(friend => (
            <Friend key={friend.id} friend={friend} />
            ))}
        </ul>
        </div>
    );
};