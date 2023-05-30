import React, { useEffect, useState } from 'react'
import NewLayout from '../Layout/NewLayout'
import { Dot, Robot, User } from '../Assets/Icons/icons'
import { useDispatch, useSelector } from 'react-redux'
import { getState, setLoading } from '../Features/chat/chatSlice'

function ChatPage() {
  const initialState = useSelector(getState)
  // console.log(initialState)
  return (
    <NewLayout>
      <div className='flex flex-col gap-4 w-full mt-16 sm:mt-0'>
        {initialState.chatLog.map((item, i) => {
          // console.log(initialState.isLoading)
          console.log(item)
          return (
            <div
              className={`flex gap-3 ${
                i % 2 === 0 ? 'justify-end' : 'justify-start'
              }`}
              key={i}
            >
              {/* Bot Answer  */}
              {i % 2 === 1 && item.speaker === 'bot' && (
                <>
                  <Robot className='p-1 w-[40px] h-[40px] rounded-full  flex items-center justify-center border-[0.5px] border-solid  transition duration-150 cursor-pointer bg-light-red border-transparent hover:border-transparent hover:opacity-90 shadow-md' />
                  <div className='relative p-3 rounded-xl bg-white dark:bg-dark-gray-3 dark:text-light-white shadow-xl'>
                    <p className='mr-3 mb-1'>{item?.message?.data?.message}</p>
                    <p className='text-[11px] text-dark-gray-3 text-end dark:text-light-white'>
                      {item.time}
                    </p>
                    <div className='w-9 h-2 dark:bg-dark-gray-3 bg-white absolute top-0 -left-1 rounded-bl-3xl'></div>
                  </div>
                </>
              )}
              {/* User Input */}
              {i % 2 === 0 && item.speaker === 'user' && (
                <>
                  <div className='relative p-3 rounded-xl bg-white shadow-xl dark:bg-dark-gray-3 dark:text-light-white'>
                    <p className='mr-3 mb-1'>{item?.message}</p>
                    <p className='text-[11px] text-dark-gray-3 text-end dark:text-light-white'>
                      {item.time}
                    </p>
                    <div className='w-9 h-2 bg-white absolute top-0 -right-1 rounded-br-3xl dark:bg-dark-gray-3'></div>
                  </div>
                  <User className='p-1 w-[40px] h-[40px] rounded-full  flex items-center justify-center border-[0.5px] border-solid  transition duration-150 cursor-pointer bg-light-red border-transparent hover:border-transparent hover:opacity-90 shadow-md' />
                </>
              )}
            </div>
          )
        })}
        {/* Loading typing message */}
        {initialState.isLoading && (
          <div className='flex gap-3 '>
            <Robot className='p-1 w-[40px] h-[40px] rounded-full  flex items-center justify-center border-[0.5px] border-solid  transition duration-150 cursor-pointer bg-light-red border-transparent hover:border-transparent hover:opacity-90 shadow-md' />
            <div className='relative p-3 rounded-xl py-5 dark:bg-dark-gray-3 bg-white shadow-xl'>
              <div className='flex items-center justify-center'>
                <div
                  className='mr-1 animate-bounce  flex items-center '
                  style={{ animationDelay: '0.1s' }}
                >
                  <Dot className={`${initialState.darkMode ? '' : 'dark'}  `} />
                </div>
                <div
                  className='mr-1 animate-bounce  flex items-center '
                  style={{ animationDelay: '0.2s' }}
                >
                  <Dot
                    className={` ${initialState.darkMode ? '' : 'dark'} -ml-4`}
                  />
                </div>
                <div
                  className='animate-bounce  flex items-center '
                  style={{ animationDelay: '0.3s' }}
                >
                  <Dot
                    className={`${initialState.darkMode ? '' : 'dark'}  -ml-4`}
                  />
                </div>
              </div>
              <div className='w-9 h-2 dark:bg-dark-gray-3 bg-white absolute top-0 -left-1 rounded-bl-3xl'></div>
            </div>
          </div>
        )}
      </div>
    </NewLayout>
  )
}

export default ChatPage
