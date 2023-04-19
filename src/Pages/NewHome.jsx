import React, { useEffect, useState } from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import Content from '../Components/Content/Content'
import logo from '../Assets/Images/logo.png'
import { questions } from '../utils/faq'
import { Send } from '../Assets/Icons/icons'

const generateQuestions = () => {
  const shuffled = questions.sort(() => 0.5 - Math.random())
  return shuffled.slice(0, 6)
}

function NewHome() {
  const [inputUser, setInputUser] = useState()
  const [pickedQuestions, setPickedQuestions] = useState([])

  const handleSubmit = () => {}
  useEffect(() => {
    // randomly pick 6 question
    setPickedQuestions(generateQuestions())
  }, [])

  return (
    <div className='flex'>
      <Sidebar />
      <Content />
      <div className='w-full relative'>
        {/* Main Background  */}
        <div className='bg-light absolute -z-50 top-0 left-0 h-screen w-full bg-repeat opacity-75'></div>
        {/* Main Content */}
        <div
          style={{ scrollBehavior: 'smooth' }}
          className='h-[80vh] sm:h-[86vh] pt-4 overflow-x-hidden transform overflow-y-scroll  p-2 transition-all duration-150 ease-in-out max-w-4xl w-full mx-auto'
        >
          <div className='flex w-full justify-center mt-10'>
            <img
              src={logo}
              alt='Logo Universitas with Description'
            />
          </div>
          {/* Example Questions */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 justify-center mt-10 '>
            {pickedQuestions.map((item, i) => (
              <div
                className={`flex ${
                  i % 2 === 0 ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className='bg-white max-w-[260px] h-fit rounded-[10px] shadow-lg p-4'
                  key={i}
                >
                  "{item}"
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Input */}
        <div className='max-w-4xl w-full mx-auto  bottom-0 max-h-[100px] p-2 flex items-center justify-center border-t-[1px] border-slate-200 border-solid flex-col gap-2'>
          <form
            className='w-full rounded-full p-2  bg-white shadow-sm flex justify-between gap-3 items-center'
            onSubmit={(e) => handleSubmit(e)}
          >
            <input
              type='text'
              className='w-full outline-none p-2 bg-transparent'
              placeholder='Tulis Pesan...'
              value={inputUser}
              onChange={(e) => {
                setInputUser(e.target.value)
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
            <i>
              Chatbot Library UPI Verion 1.3.1. Copyright 2023. Universitas
              Pendidikan Indonesia.
            </i>
          </p>
        </div>
      </div>
    </div>
  )
}

export default NewHome
