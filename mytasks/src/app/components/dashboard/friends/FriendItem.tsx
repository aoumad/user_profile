import React from "react";
import styles from "./friends.module.css";
import MoreIcon from "./more_icon";

interface FriendItemProps {
    name: string;
    picture: string;
    id: string;
}

const FriendItem: React.FC<FriendItemProps> = (props) => {
    return (
        // <div className={styles.FriendItem}>
            <div className={styles['friendItem-container']}>
                <div className={styles['friend-image']}>
                    <img src={props.picture} alt="Profile" className="rounded-full" />
                </div>
                <div className={styles['friend-name']}>
                    <span className={styles['friend-name']}>{props.name}</span>
                    {/* add more icon here */}
                </div>
                <MoreIcon />
            </div>
        // </div>
    );
};

export default FriendItem;