import { useState } from 'react'
import './App.css'

import Nav from './Nav'
import Home from './Home'
import Project from './Project'
import AboutMe from './AboutMe'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Nav/>
     <Home/>
     <Project/>
     <AboutMe/>
    </>
  
   
  )
}

export default App
