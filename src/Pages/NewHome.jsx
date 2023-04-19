import React from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import Content from '../Components/Content/Content'

function NewHome() {
  return (
    <div className='flex'>
      <Sidebar />
      <Content />
    </div>
  )
}

export default NewHome
