import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home'
import NewHome from './Pages/NewHome'
import ChatPage from './Pages/Chat'
import About from './Pages/About'

function App() {
  return (
    <div className=''>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/chatbot'
          element={<NewHome />}
        />
        <Route
          path='/chat'
          element={<ChatPage />}
        />
        <Route
          path='/about'
          element={<About />}
        />
      </Routes>
    </div>
  )
}

export default App
