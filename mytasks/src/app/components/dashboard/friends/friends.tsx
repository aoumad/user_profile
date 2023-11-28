"use client";

import React from 'react';
import FriendItem from './FriendItem';
import Notification from '../Notification/Notification';
import styles from './friends.module.css';
import FriendList from './FriendList';
import FriendRequests from './FriendRequest';


interface Friend {
  id: string;
  name: string;
  picture: string;
}

interface FriendRequest {
  id: string;
  name: string;
  picture: string;
}

interface FriendsProps {
  friends: Friend[];
  friendsReq: FriendRequest[];
}

const Friends: React.FC<FriendsProps> = ({ friends, friendsReq }) => {
  const [showRequest, setRequest] = React.useState(false);

  const handleRequestClick = () => {
    // Toggle the visibility of the Friends component
    setRequest((prevShowRequest) => !prevShowRequest);
  };

  return (
    <div className={styles.friends}>
      <div className={styles['friends-container']}>
        <span className={styles['friends-title']}>Friends</span>
        <Notification onRequestClick={handleRequestClick} />
        {showRequest ? (
          <FriendRequests friendRequests={friendsReq} />
        ) : (
          <FriendList friends={friends} />
        )}
      </div>
    </div>
  );
};

export default Friends;