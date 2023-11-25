import React from "react";
import styles from './global.module.css'
import SearchBar from '../components/skins/SearchBar/SearchBar'


export default async function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
      <div className={styles['skins']}>
        <div className={styles['skins-container']}>
          <SearchBar />
        </div>
      </div>
          {children}
      </>
    )
};