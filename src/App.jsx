import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Nav from './Nav'
import Home from './Home'
import Project from './Project'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
     <Home/>
     <Project/>
      
    </>
  
   
  )
}

export default App
