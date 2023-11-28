import React from 'react'
import styles from './friends.module.css'
import FriendItem from './FriendItem';

interface Friend {
    id: string;
      name: string;
      picture: string;
  }
  
  interface FriendsProps {
    friends: Friend[];
  }

const FriendList: React.FC<FriendsProps> = ({ friends }) => {
  return (
    <div className={styles['friends-list']}>
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
  )
}

export default FriendList