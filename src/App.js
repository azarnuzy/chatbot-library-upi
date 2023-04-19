import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home'
import NewHome from './Pages/NewHome'

function App() {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/chatbot'
          element={<NewHome />}
        />
      </Routes>
    </>
  )
}

export default App
