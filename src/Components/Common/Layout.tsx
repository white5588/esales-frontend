import React from 'react'
import {Outlet} from "react-router-dom"
import Header from '../Static/Header'
import Detailed from '../../Pages/Detailed'
import Products from '../../Pages/Products'


const Layout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
      <Detailed/>
      <Products/>
    </div>
  )
}

export default Layout