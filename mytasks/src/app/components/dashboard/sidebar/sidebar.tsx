// Sidebar.tsx
import React from 'react';
import styles from './sidebar.module.css'; // Update the import if needed
declare module '@iconscout/react-unicons';
import picture from '../../../imgs/aoumad.jpeg';
import { UilSetting } from '@iconscout/react-unicons';
import { FaGoogleWallet } from 'react-icons/fa';

const Sidebar: React.FC = () => {
  return (
// {/* <div className="grid row-start-1 row-end-4 col-start-2 col-end-3 flex flex-col relative pt-4 transition-all duration-300 ease"> 
//   <div className="pb-800 [background:linear-gradient(169.75deg,rgba(255,255,255,0)_-50.22%,rgb(4,9,36)_9.3%,rgb(17,21,52)_-1.17%,rgba(68.34,71.48,111.29,0.96)_83.26%,rgba(154,155,211,0.9)_136.85%)]" >
//         <div className="profile-bg pt-20 pb-0 rounded-lg "> */}
//         {/* <div className={styles['profile-header']}> */}
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
