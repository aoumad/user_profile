// Sidebar.tsx
import React from 'react';
import styles from './sidebar.module.css'; // Update the import if needed
declare module '@iconscout/react-unicons';
import picture from '../../../imgs/aoumad.jpeg';
import { UilSetting } from '@iconscout/react-unicons';
import { FaGoogleWallet } from 'react-icons/fa';
import Settings from '../Settings/Settings';
import styled from 'styled-components';

interface SidebarInfo {
  id: string;
  username: string;
  profilePic: string;
  title: string;
  wallet: number;
}

interface SidebarProps {
  sidebar: SidebarInfo;
  // onSidebarItemClick: (id: string) => void;
}

const SidebarRoot = styled.div`
  grid-row-start: 1;
  grid-row-end: 4;
  grid-column-start: 2;
  grid-column-end: 3;
  display: flex;
  flex-direction: column;
  position: relative;
  top: 4vh;
  transition: all 300ms ease;

  @media (max-width: 1000px) {
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 1;
    grid-column-end: 2;
    display: flex;
    flex-direction: column;
    position: relative;
    top: 5vh;
    transition: all 300ms ease;
  }

  @media (max-width: 550px) {
    display: flex;
    flex-direction: column;
    position: relative;
    top: 5vh;
    transition: all 300ms ease;
    width: 85%;
    height: 40%;
  }
  `;
  
  const SidebarContainer = styled.div`
  background: linear-gradient(169.75deg, rgba(255, 255, 255, 0) -50.22%, #040924 -9.3%, #111534 -1.17%, rgba(68, 71, 111, 0.957018) 83.26%, rgba(154, 155, 211, 0.9) 136.85%);
  height: 95%;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;

  @media (max-width: 1000px) {
    height: 88%;
    width: 100%;
  }
`;

const ProfileHeader = styled.div`
  border-radius: 10px;
  background: rgba(5, 10, 39, 0.55);
  width: 80%;
  height: 40%;
  position: relative;
  top: 3vh;

  @media (max-width: 1000px) {
    width: 93%;
    top: 1vh;
  }
`;

const ProfileImage = styled.div`
  width: auto;
  margin: 2.5vh 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Username = styled.span`
color: #FEFFFF;
font-family: Poppins;
font-size: 1.5rem;
font-style: normal;
font-weight: 400;
line-height: normal;

@media (max-width: 1000px) {
  position: relative;
  bottom: 6vh;
}
`;

const UserId = styled.span`
  color: #FEFFFF;
  font-family: Poppins;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 2rem;

  @media (max-width: 1000px) {
    position: relative;
    bottom: 6vh;
  }
`;

const Wallet = styled.div`
  color: aliceblue;
  position: relative;
  top: 5vh;
  left: 0vw;
  margin: 30px;
  gap: 0.5rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const WalletIcon = styled(FaGoogleWallet)`
  width: 50px;
  height: 50px;
`;

const WalletValue = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

const Sidebar: React.FC<SidebarProps> = (props) => {
  return (
        <SidebarRoot>
        <SidebarContainer>
          <ProfileHeader>
          <ProfileImage>
            <img src={props.sidebar.profilePic} alt="Profile" className={styles['profile-image']} />
            {/* <OnlineStatus online={props.sidebar.online}>
            </OnlineStatus> */}
            <Username>{props.sidebar.username}</Username>
            <UserId>{props.sidebar.title}</UserId>
          </ProfileImage>
        </ProfileHeader>
        <Wallet>
            <WalletIcon />
            <WalletValue>{props.sidebar.wallet}</WalletValue>
        </Wallet>
        <Settings />
        </SidebarContainer>
    </SidebarRoot>
  );
};

export default Sidebar;
