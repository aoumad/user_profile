"use client";

import React from 'react'
import styles from './Settings.module.css'
import { UilSetting } from '@iconscout/react-unicons';

interface SettingsProps {
    isOpen?: boolean;
    onClick?: () => void;
}


const Settings: React.FC<SettingsProps> = ({ isOpen, onClick }) => {
    const [open, setOpen] = React.useState(false);
    const [otherBarsOpen, setOtherBarsOpen] = React.useState(false);

    const handleMouseEnter = () => {
        setOpen(true);
    };

    const handleMouseLeave = () => {
        setOpen(false);
    };

    const handleClick = () => {
        if (onClick) {
        setOtherBarsOpen(!otherBarsOpen);
        }
    };

    return (
        <div
            className={styles.settings}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            <div className={styles['settings-container']}>
                <UilSetting />
                <span className={styles['setting-span']}> Settings</span>
            </div>
        </div>
    );
};

export default Settings;