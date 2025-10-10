import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router'

const MainRoot = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  )
}

export default MainRoot