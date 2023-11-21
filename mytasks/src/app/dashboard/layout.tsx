import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './global.module.css'
import Sidebar from '../components/dashboard/sidebar/sidebar'
import Skins from '../components/dashboard/skins/skins'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <>
    <div className="App">
      <div className="AppGlass">
          <Sidebar/>
          <Skins/>
      </div>
    </div>
        {children}
    </>
  )
}