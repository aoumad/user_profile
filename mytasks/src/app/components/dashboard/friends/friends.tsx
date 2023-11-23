import React from 'react';
import FriendItem from './FriendItem';
import styles from './friends.module.css';
import NotifIcon from './notif_icon';
interface Friend {
  id: string;
    name: string;
    picture: string;
}

interface FriendsProps {
  friends: Friend[];
}

const Friends: React.FC<FriendsProps> = ({ friends }) => {
  return (
    <div className={styles.friends}>
        <div className={styles['friends-container']}>
            <span className={styles['friends-title']}>Friends</span>
            <NotifIcon />
            <ul>
                {friends.map((friend) => (
                <FriendItem
                    key={friend.id}
                    id={friend.id}
                    name={friend.name}
                    picture={friend.picture}
                />
                ))}
            </ul>
        </div>
    </div>
  );
};

export default Friends;