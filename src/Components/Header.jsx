import React from 'react'
import './Header.css'
import logo from '../images/Logo.svg'

const Header = () => {
  return (
    <div className='header'>
        <img src={logo} alt="" />
        <div className='link'>
            <a href="/">Order</a>
            <a href="2">Order Review</a>
            <a href="3">Manage Inventory</a>
            <a href="4">Login</a>
        </div>
    </div>
  )
}

export default Header