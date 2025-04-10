import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import UseContextProvider from './usecontext/UseContextProvider'
import Home from './Home/Home'


function App() {

  return (
    <>
    <UseContextProvider>
     <Login></Login>
    </UseContextProvider>

    </>
  )
}

export default App
