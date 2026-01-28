import { useState } from 'react'
import './App.css'
import { Button } from "@/components/ui/button"
import Navbar from './components/Navbar.jsx'
import LandingPage from './components/LandingPage.jsx'
import Signup from './components/SignUp.jsx'
import { Routes, Route } from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  )
}

export default App
