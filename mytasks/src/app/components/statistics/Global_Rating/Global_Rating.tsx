import React from 'react'
import styles from './Global_Rating.module.css'
import Global_RatingList from './Global_RatingList';

interface Rating {
    id: string;
    player_profile: string;
    player_name: string;
    player_title: string;
    rating: number;
}

interface RatingListProps {
    ratings: Rating[];
}

const Global_Rating: React.FC<RatingListProps> = ({ratings}) => {
  return (
    <div className={styles['global-rating']}>
        <div className={styles['global-rating-title']}>
            <span>Global Rating</span>
        </div>
        <Global_RatingList ratings={ratings} />
    </div>
  )
}

export default Global_Rating;