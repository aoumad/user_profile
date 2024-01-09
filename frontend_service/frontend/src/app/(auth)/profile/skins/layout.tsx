import React from "react";
import styles from './global.module.css'
import SearchBar from '../components/skins/SearchBar/SearchBar'
import { FaGoogleWallet } from 'react-icons/fa';
import StatusBar from "../components/skins/StatusBar/StatusBar";
import Table from "../components/skins/Table/Table";

export default async function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
      <div className={styles['skins']}>
        <div className={styles['skins-container']}>
          <div className={styles['skins-topBar']}>
          <SearchBar />
          {/* <StatusBar Table={<Table />} Paddle={<Paddle />} Ball={<Ball />} */}
          <StatusBar Table={<Table />} />
          <div className={styles.wallet}>
              <FaGoogleWallet />
              <span className={styles['wallet-value']}>215</span>
          </div>
          </div>
        </div>
      </div>
          {children}
      </>
    )
};