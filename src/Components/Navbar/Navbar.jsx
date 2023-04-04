import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Assets/Images/logo.png'

function Navbar() {
  return (
    <nav className='flex w-full mx-auto bg-dark-gray'>
      <div className='max-w-7xl px-8'>
        <Link to={'/'}>
          <img
            src={logo}
            className='max-w-[150px]'
            alt='UPI LOGO'
          />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
