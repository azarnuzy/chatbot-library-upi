import React, { useEffect, useRef, useState } from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import { Send } from '../Assets/Icons/icons'
import { useDispatch, useSelector } from 'react-redux'
import {
  getState,
  setChatLog,
  setInputUser,
  setLoading,
} from '../Features/chat/chatSlice'
import moment from 'moment'

function NewLayout({ children }) {
  const dispatch = useDispatch()
  const initialState = useSelector(getState)
  const [isMounted, setIsMounted] = useState(false)
  const containerRef = useRef(0)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const scrollToBottom = () => {
    setTimeout(() => {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: 'smooth',
      })
    }, 0)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const now = new Date()
    const formattedDate = moment(now).format('h:mm A')
    dispatch(setLoading(true))
    dispatch(
      setChatLog({
        speaker: 'user',
        message: initialState.inputUser,
        time: formattedDate,
      })
    )

    setTimeout(() => {
      dispatch(setLoading(false))
    }, 800)

    setTimeout(() => {
      dispatch(
        setChatLog({
          speaker: 'bot',
          message:
            'Saya tidak mengerti apa yang anda maksud! Mohon tunggu sebentar',
          time: formattedDate,
        })
      )
    }, 801)

    dispatch(setInputUser(''))
    setTimeout(() => {
      scrollToBottom()
    }, 0)
  }

  // when user add message it will be scroll to bottom for the newest messages

  return (
    <div className='flex'>
      <Sidebar />
      <div className='w-full relative'>
        {/* Main Background  */}
        <div className='bg-light absolute -z-50 top-0 left-0 h-screen w-full bg-repeat opacity-75'></div>
        {/* Main Content */}
        <div
          ref={containerRef}
          style={{ scrollBehavior: 'smooth' }}
          className={`h-[83vh] sm:h-[86vh] lg:h-[85vh] pt-4 overflow-x-hidden transform overflow-y-scroll  p-2 transition-all duration-500 ease-in-out max-w-4xl w-full mx-auto  opacity-0 ${
            isMounted ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {children}
        </div>
        {/* Input */}
        <div className='absolute left-1/2 transform -translate-x-1/2  px-8 sm:px-8 max-w-4xl w-full sm:mx-auto  bottom-0 max-h-[100px] p-2 flex items-center justify-center border-t-[1px] border-slate-200 border-solid flex-col gap-2'>
          <form
            className=' w-full rounded-full p-2  bg-white shadow-sm flex justify-between gap-3 items-center'
            onSubmit={(e) => handleSubmit(e)}
          >
            <input
              type='text'
              className='w-full outline-none p-2 bg-transparent'
              placeholder='Tulis Pesan...'
              value={initialState.inputUser}
              onChange={(e) => {
                dispatch(setInputUser(e.target.value))
              }}
            />
            <button
              className='mr-2'
              type='submit'
            >
              <Send />
            </button>
          </form>
          <p className='text-dark-gray-2 text-sm sm:text-base'>
            <i>Chatbot Library UPI v.1.3.1. Copyright 2023.</i>
          </p>
        </div>
      </div>
    </div>
  )
}

export default NewLayout
