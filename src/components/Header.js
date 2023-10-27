import React from 'react'
import logo from "../assets/images/logo.png"
const Header = () => {
  return (
  <div className='absolute py-2 px-8 bg-gradient-to-b from-black z-10'>
  <img className='w-44 ' src={logo} alt='logo'/>
  </div>
  )
}

export default Header