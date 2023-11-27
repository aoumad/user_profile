"use client";

import React from 'react'
import styles from './Notification.module.css'
import NotifIcon from './notif_icon';
import Friends from '../friends/friends';
import yamon from '/Users/aoumad/Desktop/user_profile/mytasks/src/app/imgs/ael-yamo.jpeg'

const friendsList = [
    { id: "1", name: "Friend 1", picture: yamon.src },
    { id: "2", name: "Friend 2", picture: yamon.src },
    { id: "3", name: "Friend 3", picture: yamon.src },
    { id: "4", name: "Friend 4", picture: yamon.src },
    { id: "5", name: "Friend 5", picture: yamon.src },
    { id: "6", name: "Friend 6", picture: yamon.src },
    { id: "7", name: "Friend 7", picture: yamon.src },
    { id: "8", name: "Friend 8", picture: yamon.src },
    // Add more friends as needed
  ];

  const Notification: React.FC = () => {
    const [notif, setNotif] = React.useState('');
    const [showFriends, setShowFriends] = React.useState(false);

    const handleNotifChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNotif(event.target.value);
    };

    const handleNotifIconClick = () => {
        // Toggle the visibility of the Friends component
        setShowFriends((prevShowFriends) => !prevShowFriends);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <div className={styles.notification} onChange={handleNotifChange}>
            <NotifIcon onClick={handleNotifIconClick} />
            {showFriends && <Friends friends={friendsList} />}
        </div>
    );
};

export default Notification;