import React, { useRef, useState } from 'react'
import Bot from '../Assets/Icons/Bx_bot'
import Vector from '../Assets/Icons/Vector'
import Send from '../Assets/Icons/send'
import SEOHead from '../Components/SEO/SEOHead'
import homeImg from '../Assets/Images/home.png'
import axios from 'axios'

function Home() {
  const firstText =
    'Selamat Datang 👋 di layanan chatbot perpustakaan Universitas Pendidikan Indonesia. Ada yang bisa saya bantu?'

  const [chatLog, setChatLog] = useState([
    { speaker: 'bot', message: firstText },
  ])

  const containerRef = useRef(0)
  const [inputUser, setInputUser] = useState([])

  const postRes = async (input) => {
    // const res = await axios.post(
    //   'http://perpustakaan.upi.edu:5000/predict',
    //   {
    //     input: inputUser,
    //   },
    //   {
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //     },
    //   }
    // )

    const newChatLog = [
      ...chatLog,
      { speaker: 'user', message: input },
      {
        speaker: 'bot',
        message: 'Saya tidak mengerti maksud anda. Coba tanyakan ulang!',
        option: [
          'Kapan perpustakaan buka?',
          'Bagaimana cara meminjam buku?',
          'Saya ingin memperpanjang peminjaman buku',
        ],
      },
    ]
    setChatLog(newChatLog)
    setInputUser('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await postRes(inputUser)
    containerRef.current.scrollTo(0, containerRef.current.scrollHeight)
  }
  const handleClick = async (item) => {
    setInputUser(inputUser)
    await postRes(item)
    containerRef.current.scrollTo(0, containerRef.current.scrollHeight)
  }

  return (
    <>
      <SEOHead
        title='UPI Chatbot - Get Your Questions Answered Quickly and Efficiently'
        description='The UPI Chatbot is here to help you get answers to your questions quickly and efficiently. With our AI-powered chatbot, you can get the information you need in a matter of seconds.'
        keywords='UPI, chatbot, artificial intelligence, AI, questions, answers'
        image={homeImg}
        url='https://v1-dev-chatbot-upi.netlify.app/'
      />
      <div className='flex flex-col justify-center sm:flex-row gap-8 sm:justify-around'>
        <div className='w-full sm:w-1/2 mt-5 sm:mt-10 lg:mt-[3vh]  flex justify-center sm:justify-end'>
          <div className='shadow-xl border-[1px] border-solid border-slate-200 rounded-t-xl max-w-2xl min-w-xl lg:w-[80%] w-[90%] relative'>
            <div className='bg-light-red rounded-t-xl flex items-center gap-3 px-8'>
              <div className='rounded-full p-2 flex items-center justify-center w-[40px] h-[38px] bg-light-gray my-3'>
                <Bot
                  width={'28'}
                  height={'28'}
                />
              </div>
              <div className='py-1 '>
                <h4 className='text-lg font-bold'>Dipi</h4>
                <p className='font-medium'>Chatbot Support</p>
              </div>
            </div>
            <div
              ref={containerRef}
              style={{ scrollBehavior: 'smooth' }}
              className='h-[50vh] pt-4 overflow-x-hidden transform overflow-y-scroll  p-2 transition-all duration-150 ease-in-out'
            >
              {chatLog.length === 1 && (
                <div className='ml-3 w-full flex gap-3 mb-5'>
                  <div className='rounded-full p-2 flex items-center justify-center w-[40px] h-[38px] bg-light-gray'>
                    <Bot />
                  </div>
                  <div className='w-fit bg-light-silver rounded-xl p-2 shadow-md mr-14'>
                    {chatLog.length === 1 && firstText}
                  </div>
                </div>
              )}
              {chatLog.map((item, i) => {
                return (
                  <>
                    {chatLog.length !== 1 && item.speaker === 'bot' && (
                      <>
                        <div className='ml-3 w-full flex gap-3 mb-5'>
                          <div className='rounded-full p-2 flex items-center justify-center w-[40px] h-[38px] bg-light-gray'>
                            <Bot />
                          </div>
                          <div className='w-fit bg-light-silver rounded-xl p-2 shadow-md mr-14'>
                            {item.message}
                          </div>
                        </div>
                        {item?.option?.length > 0 &&
                          item.option.map((suggest) => (
                            <div className='ml-3 w-full flex gap-3 mb-2'>
                              <button
                                onClick={() => handleClick(suggest)}
                                className='ml-[52px] shadow w-fit border-1 border border-solid border-light-silver  rounded-xl p-2 mr-14'
                              >
                                {suggest}
                              </button>
                            </div>
                          ))}
                      </>
                    )}
                    {item.speaker === 'user' && (
                      <div className='w-full flex justify-end gap-3 mb-5'>
                        <div className='w-fit  bg-light-silver rounded-xl p-2 shadow-md ml-14'>
                          {item.message}
                        </div>
                        <div className='rounded-full p-2 flex items-center justify-center w-[40px] h-[38px] bg-light-gray'>
                          <Vector />
                        </div>
                      </div>
                    )}
                  </>
                )
              })}
            </div>
            <div className='h-[80px]'></div>
            <div className='w-full  absolute bottom-0 max-h-[100px] p-2 flex items-center justify-center border-t-[1px] border-slate-200 border-solid'>
              <form
                className='w-full rounded-full p-2  bg-[#EBEBEB] shadow-sm flex justify-between gap-3 items-center'
                onSubmit={(e) => handleSubmit(e)}
              >
                <input
                  type='text'
                  className='w-full outline-none p-2 bg-transparent'
                  placeholder='Tulis Pesan...'
                  value={inputUser}
                  onChange={(e) => setInputUser(e.target.value)}
                />
                <button
                  className='mr-2'
                  type='submit'
                >
                  <Send />
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='w-full sm:w-1/2 max-w-xl lg:pr-10 font-medium text-md flex flex-col justify-center px-3 mb-24 sm:mb-0  sm:mt-[10vh]'>
          <h3 className='text-lg font-bold'>
            Layanan Chatbot Perpustakaan Universitas Pendidikan Indonesia
          </h3>
          <p>
            Sebuah layanan chatbot yang dapat membantu anda untuk mendapatkan
            informasi tentang:
          </p>
          <ol className='list-decimal pl-8'>
            <li>Ketersediaan buku</li>
            <li>Lokasi buku</li>
            <li>Tanggal peminjaman dan pengembalian</li>
            <li>Informasi denda peminjaman buku yang terlambat</li>
            <li>dan lain-lain</li>
          </ol>
          <p>
            Dengan demikian, chatbot ini dapat mempermudah proses interaksi
            antara pengunjung perpustakaan dan perpustakaan UPI itu sendiri
          </p>
          <h3 className='text-lg font-bold'>Mulai untuk bertanya sekarang!</h3>
        </div>
      </div>
    </>
  )
}

export default Home
