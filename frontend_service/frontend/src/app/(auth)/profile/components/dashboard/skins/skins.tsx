import React from 'react';
import styles from "./skins.module.css"; // Update the import if needed

const Skins: React.FC = () => {
  return (
    <div className={styles.Skins}>
      <div className={styles['skins-container']}>
        <span className={styles['skins-title']}>Skins</span>
        <div className={styles['Skins-rectangle']}>
          <div className={styles['Skins-circle']}></div>
          <div className={styles['Skins-stick']}></div>
        </div>
      </div>
    </div>
  );
};

export default Skins;