import React,{useEffect} from "react"
import Home from "./components/Home"
import Navbar from "./components/navbar"
import Skills from "./components/Skills"
import Project from "./components/Project"
import Aos from "aos";
import "aos/dist/aos.css"
import Contact from "./components/Contact"
const App = () => {
  useEffect(() => {
    Aos.init();
  
   }, [])
  return (
    <div>
     <Navbar/>
     <div className="container_home">
      <Home/>
      <Skills/>
      <Project/>
      <Contact/>
     </div>
    </div>
  )
}

export default App
