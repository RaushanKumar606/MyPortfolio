
import { useEffect } from 'react'
import './App.css'
import { About } from './component/About/About'
import ContactForm from './component/Contact/ContactForm'
import { Education } from './component/Education/Education'
import { Footer } from './component/Footer/Footer'
import { Home } from './component/Home/Home'
import Navbar from './component/Navbar/Navbar'
import { Project } from './component/Project/Project'
import { Service } from './component/Service/Service'
import { Skill } from './component/Skill/Skill'
import Aos from "aos"
import "aos/dist/aos.css"
function App() {
  useEffect(()=>{
Aos.init(); 
  },[])

  return (
    <>
    <Navbar/>
    <Home/>
     <About/>
     <Service/>
     <Education/>
     <Skill/>
     <Project/>
    <ContactForm/> 
    <Footer/>
    </>
  )
}

export default App
