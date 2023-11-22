// Sidebar.tsx
import React from 'react';
import styles from './sidebar.module.css'; // Update the import if needed
declare module '@iconscout/react-unicons';
import picture from '../../../imgs/aoumad.jpeg';
import { UilSetting } from '@iconscout/react-unicons';
import { FaGoogleWallet } from 'react-icons/fa';

const Sidebar: React.FC = () => {
  return (
    <div className={styles.Sidebar}>
      <div className={styles['sidebar-container']}>
        <div className={styles['profile-header']}>
          <div className={styles['profile-image']}>
            <img src={picture.src} alt="Profile" className={styles['profile-image']} />
            <span className={styles.username}>Abderazzak</span>
            <span className={styles['user-id']}>aoumad</span>
            <div className={styles.wallet}>
              <FaGoogleWallet />
              <span className={styles['wallet-value']}>215</span>
            </div>
            <div className={styles.settings}>
              <UilSetting />
              <span className={styles['setting-span']}> Settings</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
