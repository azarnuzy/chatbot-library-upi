import React from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import Content from '../Components/Content/Content'
import logo from '../Assets/Images/logo.png'
import { questions } from '../utils/faq'

function NewHome() {
  const pickedQuestions = []

  // randomly pick 6 question
  while (pickedQuestions.length < 6) {
    const randomIndex = Math.floor(Math.random() * questions.length)
    if (!pickedQuestions.includes(questions[randomIndex])) {
      pickedQuestions.push(questions[randomIndex])
    }
  }

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
          className='h-[86vh] pt-4 overflow-x-hidden transform overflow-y-scroll  p-2 transition-all duration-150 ease-in-out max-w-4xl w-full mx-auto'
        >
          <div className='flex w-full justify-center mt-10'>
            <img
              src={logo}
              alt='Logo Universitas with Description'
            />
          </div>
          {/* Example Questions */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10 justify-center mt-10 '>
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
      </div>
    </div>
  )
}

export default NewHome
