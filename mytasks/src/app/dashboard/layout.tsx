import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './global.module.css'
import Sidebar from '../components/dashboard/sidebar/sidebar'
import Skins from '../components/dashboard/skins/skins'
import Friends from '../components/dashboard/friends/friends'
import aoumad from '../imgs/aoumad.jpeg'
import Achievement from '../components/dashboard/achievements/achievement'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const friendsList = [
    { id: "1", name: "Friend 1", picture: aoumad.src },
    { id: "2", name: "Friend 2", picture: aoumad.src },
    { id: "3", name: "Friend 3", picture: aoumad.src },
    { id: "4", name: "Friend 4", picture: aoumad.src },
    { id: "5", name: "Friend 5", picture: aoumad.src },
    { id: "6", name: "Friend 6", picture: aoumad.src },
    { id: "7", name: "Friend 7", picture: aoumad.src },
    { id: "8", name: "Friend 8", picture: aoumad.src },
    // Add more friends as needed
  ];

  return (
    <>
    <div className="App">
      <div className="AppGlass">
          <Sidebar/>
          <Skins/>
          <Friends friends={friendsList} />
          <Achievement />
      </div>
    </div>
        {children}
    </>
  )
}