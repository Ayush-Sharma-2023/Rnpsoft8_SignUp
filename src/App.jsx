import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar.jsx'
import LanguageSelect from './components/Language_selection.jsx'

function App() {

  return (
    <>
      <Navbar />
      <LanguageSelect />
    </>
  )
}

export default App