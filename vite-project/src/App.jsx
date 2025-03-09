import { useState } from 'react' 
import Header from './components/Header'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import './App.css'
import Svg from './components/Svg'
import Services from './components/Services.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App">
      
    <Svg className="absolute top-0 z-111 "/>
    <Header className="fixed top-0"/>
    <Hero />
    <AboutUs />
    <Services />
    
    </div>
      
    </>
  )
}

export default App
