import React from 'react'
import Sidebar  from './Componenets/sidebar/sidebar'
import { Topbar } from './Componenets/topbar/topbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='page'>
     <Sidebar />
      <div className='content'>
        <div className='Topbar-content'>
        <Topbar />
        </div>

        <div className='Body-content'>
            <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout