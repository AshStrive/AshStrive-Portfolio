import Blogs from "./components/Blogs" // blogs section component
import Projects from "./components/Projects" // projects section component
import Hero from "./components/Hero" // hero section component
import FloatingAI from "./components/FloatingAI" // floating AI button
import Navbar from "./components/Navbar" // navbar component
import Footer from "./components/Footer" // footer section component
import Contact from "./components/Contact" // contact section component
import { motion } from "framer-motion" // smooth animations library
import { FaRobot } from "react-icons/fa" // floating AI robot icon
import JumpRings from "./components/JumpRings" // mini game component
function App() {

  return (

    /*
      Main website container

      min-h-screen  -> poori screen ki minimum height
      bg-black      -> black background
      text-white    -> default saara text white
    */
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Projects />
      <Blogs />
      <Contact />
      <Footer />
      <FloatingAI />
      <JumpRings />
  
    </div>
  )
}

export default App