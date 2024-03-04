import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignUp from './pages/SignUpPage'
import SignInSide from './pages/SignInPage'
import HomePage from './pages/HomePage'
import { Container } from '@mui/material'
import NavBar from './components/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <NavBar />
  </>
      
    
  )
}

export default App
