import React, { useEffect, useState } from 'react'
import logo from '../Assets/Images/logo.png'
import { questions } from '../utils/faq'
import { useNavigate } from 'react-router-dom'
import NewLayout from '../Layout/NewLayout'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchChatRespon,
  getState,
  setChatLog,
  setInputUser,
  setLoading,
} from '../Features/chat/chatSlice'
import moment from 'moment'
import axios from 'axios'

const generateQuestions = () => {
  const shuffled = questions.sort(() => 0.5 - Math.random())
  return shuffled.slice(0, 6)
}

function NewHome() {
  const [pickedQuestions, setPickedQuestions] = useState([])
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const initialState = useSelector(getState)
  useEffect(() => {
    // randomly pick 6 question
    setPickedQuestions(generateQuestions())
  }, [])

  const handleClick = async (item) => {
    // await dispatch(fetchChatRespon({ input: item }))

    const now = new Date()
    const formattedDate = moment(now).format('h:mm A')
    dispatch(setLoading(true))
    dispatch(
      setChatLog({
        speaker: 'user',
        message: item,
        time: formattedDate,
      })
    )

    const fetchChatRespon = async () => {
      try {
        const response = await axios.post(
          `http://perpustakaan.upi.edu:4000/v1/api/message`,
          {
            input: item,
          },
          {
            withCredentials: true,
          }
        )

        setTimeout(() => {}, 800)
        // set bot to chatlog state
        setTimeout(() => {
          // console.log('2', initialState.response)
          dispatch(
            setChatLog({
              speaker: 'bot',
              message: response.data,
              time: formattedDate,
            })
          )

          // waiting animation done
          dispatch(setLoading(false))

          // scrollToBottom()
        }, 801)

        dispatch(setInputUser(''))

        setTimeout(() => {
          localStorage.setItem(
            'chatLog',
            JSON.stringify([
              ...initialState.chatLog,
              {
                speaker: 'user',
                message: item,
                time: formattedDate,
              },
              {
                speaker: 'bot',

                message: response.data,

                time: formattedDate,
              },
            ])
          )
          // scrollToBottom()
          navigate('/chat')
        }, 800)
        // scroll to bottom newest chat
        // setTimeout(() => {
        //   scrollToBottom()
        // }, 400)
        // console.log(response)
        return response.data
      } catch (error) {
        console.error(error)
      }
    }

    fetchChatRespon()
  }

  return (
    <NewLayout>
      {/* Main Content */}

      <div className='flex w-full justify-center mt-14 sm:mt-10'>
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
            key={i}
          >
            <div
              className='cursor-pointer bg-white max-w-[260px] h-fit rounded-[10px] shadow-lg p-4 hover:scale-105 transition ease-in-out duration-300 dark:bg-dark-gray-3 dark:text-light-white'
              onClick={() => {
                handleClick(item)
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
