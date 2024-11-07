
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

function App() {

  return (
    <>
    <Navbar/>
    <Home/>
     <About/>
     <Service/>
     <Project/>
     <Education/>
     <Skill/>
    <ContactForm/> 
    <Footer/>
    </>
  )
}

export default App
