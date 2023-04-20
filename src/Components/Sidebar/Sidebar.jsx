import React, { useEffect, useState } from 'react'
import logo from '../../Assets/Images/Logo-circle.png'
import {
  Chat,
  Close,
  HomeIcon,
  Information,
  Menu,
  Moon,
  NormalMenu,
  Sun,
} from '../../Assets/Icons/icons'
import { Link, NavLink } from 'react-router-dom'
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
  const [showMenu, setShowMenu] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)
  const initialState = useSelector(getState)

  const dispatch = useDispatch()
  const darkMode = initialState.darkMode
  const toggleDarkMode = () => {
    dispatch(setDarkMode(initialState.darkMode))
    localStorage.setItem('mode', !initialState.darkMode)
  }

  return (
    <>
      {/* Mobile navbar */}
      <div className='fixed top-0 flex shadow-lg p-3 bg-dark-gray sm:hidden justify-between w-full z-50 items-center'>
        <div
          onClick={() => {
            setMobileMenu(true)
          }}
        >
          <NormalMenu />
        </div>
        <div className='text-white font-bold text-xl'>Chatbot Library UPI</div>
        <Link to={'/'}>
          <img
            src={logo}
            alt='Logo UPI'
          />
        </Link>
      </div>
      {/* Container background active sidebar mobile */}
      <div
        className={`${
          mobileMenu ? 'absolute' : 'hidden opacity-0 '
        } w-full h-screen z-10 bg-dark-gray transition-opacity duration-300 opacity-30 top-0 left-0`}
        onClick={() => {
          setMobileMenu(() => false)
        }}
      ></div>
      {/* Sidebar Mobile */}
      <div
        className={`absolute z-[60] top-0 w-[75%] h-screen bg-dark-gray-2 flex flex-col px-3 gap-3 justify-between py-3 sm:hidden duration-1000 ease-in-out ${
          mobileMenu ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className='flex justify-between flex-row-reverse'>
          <div
            className='w-[40px] h-[40px] rounded-full  flex items-center justify-center border-[0.5px] border-solid  transition duration-150 cursor-pointer bg-transparent border-dark-gray-4 '
            onClick={() => setMobileMenu(false)}
          >
            <Close />
          </div>
          <div className='flex-col flex gap-4 w-3/4'>
            <Link
              className='flex gap-3 items-center'
              to={'/chatbot'}
            >
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
              <h2
                className={`${'text-white'} text-2xl font-bold tracking-wider`}
              >
                Home
              </h2>
            </Link>
            <Link
              className='flex gap-3 items-center'
              to={'/chat'}
            >
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
              <h2
                className={`${'text-white'} text-2xl font-bold tracking-wider`}
              >
                Chat
              </h2>
            </Link>

            <Link
              className='flex gap-3 items-center'
              to={'/about'}
            >
              <NavLink
                className={({ isActive }) => {
                  return `w-[40px] h-[40px] rounded-full  flex items-center justify-center border-[0.5px] border-solid  transition duration-150 cursor-pointer ${
                    isActive
                      ? 'bg-light-red border-transparent hover:border-transparent hover:opacity-90'
                      : 'bg-transparent border-dark-gray-4 hover:border-transparent hover:bg-light-red'
                  }`
                }}
                to={'/about'}
              >
                <Information />
              </NavLink>
              <h2
                className={`${'text-white'} text-2xl font-bold tracking-wider`}
              >
                About
              </h2>
            </Link>
          </div>
        </div>
      </div>
      {/* Desktop Sidebar */}
      <div className='hidden max-w-[80px] px-4 bg-dark-gray sm:flex flex-col h-screen drop-shadow-2xl justify-between py-8 w-[80px] items-center'>
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
                darkMode && 'bg-light-red'
              } ${!darkMode && 'bg-dark-gray-3'} transition-all transform ${
                darkMode ? '-translate-y-7' : 'translate-y-7'
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
          className={`hidden min-w-0 max-w-[400px] drop-shadow-md h-screen bg-white text-black sm:flex flex-col gap-10 pt-20 items-center transform px-8 relative -z-50 transition duration-200 dark:bg-dark-gray-2 dark:text-light-white `}
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
