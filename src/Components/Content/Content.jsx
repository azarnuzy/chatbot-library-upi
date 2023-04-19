import React from 'react'

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

function Content() {
  return (
    <div className='max-w-[400px]  drop-shadow-md h-screen bg-white text-black flex flex-col gap-10 pt-20 items-center px-8 '>
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
  )
}

export default Content
