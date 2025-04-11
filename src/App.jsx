import { useState } from 'react'
import './App.css'

import Nav from './Nav'
import Home from './Home'
import Project from './Project'
import AboutMe from './AboutMe'
import SkillsPage from './SkillsPage'
import Footer from './Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Nav/>
     <Home/>
     <Project/>
     <SkillsPage/>  
     <AboutMe/>
     <Footer/>
    </>
  
   
  )
}

export default App
