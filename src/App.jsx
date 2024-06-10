import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar.jsx'
import LanguageSelect from './components/Language_selection.jsx'
import Signup from './components/SignUp.jsx'

function App() {

  return (
    <>
      {/* <Navbar /> */}
      {/* <LanguageSelect /> */}
      <Signup />
    </>
  )
}

export default App