import React, { useState } from 'react'
import logo from '../../Assets/Images/Logo-circle.png'
import { Chat, HomeIcon, Moon, Sun } from '../../Assets/Icons/icons'

export default function Sidebar() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode)
  }

  return (
    <div className='max-w-[80px] bg-dark-gray flex flex-col h-screen shadow-md justify-between py-8 w-[80px] items-center'>
      <div className='flex flex-col gap-4 items-center'>
        <img
          src={logo}
          alt='Logo UPI'
        />
        <div className='w-[40px] h-[40px] rounded-full bg-light-red flex items-center justify-center border-[0.5px] border-transparent border-solid'>
          <HomeIcon />
        </div>
        <div className='w-[40px] h-[40px] rounded-full bg-transparent flex items-center justify-center border-[0.5px] border-dark-gray-4 border-solid'>
          <Chat />
        </div>
      </div>

      <button
        className={`flex items-center relative justify-center w-[50px]  rounded-full flex-col border border-1 border-dark-gray-4 broder-solid py-1 outline-none transition duration-200 shadow-inner  gap-4`}
        onClick={toggleDarkMode}
      >
        <Sun
          className={`relative z-10 w-[40px] h-[40px] transition-opacity duration-200 `}
        />
        <Moon
          className={`relative z-10 w-[40px] h-[40px] transition-opacity duration-200 `}
        />
        <div
          className={`w-[46px] absolute z-0 h-[46px] p-1 rounded-full ${
            darkMode ? 'bg-light-red' : 'bg-dark-gray-3'
          } transition-all transform ${
            darkMode ? '-translate-y-7' : 'translate-y-7'
          }`}
        ></div>
      </button>
    </div>
  )
}
