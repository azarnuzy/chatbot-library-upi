import React, { useEffect, useState } from 'react'
import logo from '../Assets/Images/logo.png'
import { questions } from '../utils/faq'
import { Link, useNavigate } from 'react-router-dom'
import NewLayout from '../Layout/NewLayout'
import { useDispatch } from 'react-redux'
import { setInputUser } from '../Features/chat/chatSlice'

const generateQuestions = () => {
  const shuffled = questions.sort(() => 0.5 - Math.random())
  return shuffled.slice(0, 6)
}

function NewHome() {
  const [pickedQuestions, setPickedQuestions] = useState([])
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    // randomly pick 6 question
    setPickedQuestions(generateQuestions())
  }, [])

  return (
    <NewLayout>
      {/* Main Content */}

      <div className='flex w-full justify-center mt-10'>
        <img
          src={logo}
          alt='Logo Universitas with Description'
        />
      </div>
      {/* Example Questions */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10 justify-center mt-10 '>
        {pickedQuestions.map((item, i) => (
          <div
            className={`flex justify-center ${
              i % 2 === 0 ? 'sm:justify-end' : 'sm:justify-start'
            }`}
          >
            <div
              className='cursor-pointer bg-white max-w-[260px] h-fit rounded-[10px] shadow-lg p-4 hover:scale-105 transition ease-in-out duration-300'
              onClick={() => {
                dispatch(setInputUser(item))
                navigate('/chat')
              }}
              key={i}
            >
              "{item}"
            </div>
          </div>
        ))}
      </div>
    </NewLayout>
  )
}

export default NewHome
