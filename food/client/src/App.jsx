import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignUp from './pages/SignUpPage'
import SignInSide from './pages/SignInPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SignInSide/>
    </>
  )
}

export default App
