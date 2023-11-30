import React from 'react';
import styles from './global.module.css';
import Statistics from '../components/dashboard/Statistics/Statistics'

export default async function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
            <div className={styles['statistics']}>
                <div className={styles['statistics-container']}>
                <Statistics />
                </div>
            </div>
        {children}
        </>
    )
};