import React, { useState } from 'react'
import logo from '../../Assets/Images/Logo-circle.png'
import { Chat, HomeIcon, Menu, Moon, Sun } from '../../Assets/Icons/icons'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getState, setDarkMode } from '../../Features/chat/chatSlice'

const content = {
  title: `Layanan Chatbot  Perpustakaan Universitas Pendidikan Indonesia`,
  desc: {
    isi: 'Sebuah layanan chatbot yang dapat membantu anda untuk mendapatkan informasi tentang:',
    list: [
      'Ketersediaan buku',
      'Lokasi perpustakaan',
      'Tanggal peminjaman dan pengembalian',
      'Informasi denda peminjaman buku yang terlambat',
      'dan lain-lain',
    ],
    closing:
      'Dengan demikian, chatbot ini dapat mempermudah proses interaksi antara pengunjung perpustakaan dan perpustakaan UPI itu sendiri',
  },
  invite: 'Mulai untuk bertanya sekarang!',
}
export default function Sidebar() {
  // const [darkMode, setDarkMode] = useState(false)
  const [showMenu, setShowMenu] = useState(true)
  const initialState = useSelector(getState)

  const dispatch = useDispatch()

  const toggleDarkMode = () => {
    dispatch(setDarkMode(initialState.darkMode))
  }

  return (
    <>
      <div className='max-w-[80px] px-4 bg-dark-gray flex flex-col h-screen drop-shadow-2xl justify-between py-8 w-[80px] items-center'>
        <nav className='flex flex-col gap-4 items-center'>
          <NavLink
            end
            to='/'
          >
            <img
              src={logo}
              alt='Logo UPI'
            />
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              return `w-[40px] h-[40px] rounded-full  flex items-center justify-center border-[0.5px] border-solid  transition duration-150 cursor-pointer ${
                isActive
                  ? 'bg-light-red border-transparent hover:border-transparent hover:opacity-90'
                  : 'bg-transparent border-dark-gray-4 hover:border-transparent hover:bg-light-red'
              }`
            }}
            to={'/chatbot'}
          >
            <HomeIcon />
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              return `w-[40px] h-[40px] rounded-full  flex items-center justify-center border-[0.5px] border-solid  transition duration-150 cursor-pointer ${
                isActive
                  ? 'bg-light-red border-transparent hover:border-transparent hover:opacity-90'
                  : 'bg-transparent border-dark-gray-4 hover:border-transparent hover:bg-light-red'
              }`
            }}
            to={'/chat'}
          >
            <Chat />
          </NavLink>
        </nav>
        <div className={`w-auto flex flex-col gap-4 items-center`}>
          <button
            className={`flex items-center relative justify-center w-[50px]  rounded-full flex-col border border-1 border-dark-gray-4 broder-solid py-1 outline-none transition duration-200 shadow-inner  gap-4`}
            onClick={() => {
              toggleDarkMode()
            }}
          >
            <Sun
              className={`relative z-10 w-[40px] h-[40px] transition-opacity duration-200 `}
            />
            <Moon
              className={`relative z-10 w-[40px] h-[40px] transition-opacity duration-200 `}
            />
            <div
              className={`w-[46px] absolute z-0 h-[46px] p-1 rounded-full ${
                initialState.darkMode ? 'bg-light-red' : 'bg-dark-gray-3'
              } transition-all transform ${
                initialState.darkMode ? '-translate-y-7' : 'translate-y-7'
              }`}
            ></div>
          </button>
          <div
            className='cursor-pointer w-[40px] h-[40px] rounded-full bg-transparent flex items-center justify-center border-[0.5px] border-dark-gray-4 border-solid hover:border-transparent hover:bg-light-red transition duration-150'
            onClick={() => {
              setShowMenu((value) => !value)
            }}
          >
            <Menu />
          </div>
        </div>
      </div>
      {showMenu && (
        <div
          className={`min-w-0 max-w-[400px] drop-shadow-md h-screen bg-white text-black sm:flex flex-col gap-10 pt-20 items-center transform px-8 relative -z-50 transition duration-200 `}
        >
          <h3 className='text-2xl font-bold'>{content.title}</h3>
          <div className='text-lg'>
            <p>{content.desc.isi}</p>
            <ol className='list-decimal pl-8'>
              {content.desc.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ol>
            <p>{content.desc.closing}</p>
          </div>
          <h3 className='text-2xl font-bold'>Mulai untuk bertanya sekarang!</h3>
        </div>
      )}
    </>
  )
}
