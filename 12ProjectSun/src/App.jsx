import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Sun from '../src/Video/Sun.mp4'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    
    <div className='main'>
      <div className="overlays"></div>
      <video src = {Sun} autoPlay loop muted  />





      <div>
      {/* Content at landin page */}
      <div className='content'>




        {/* Navbar */}
        <div className="Navbar">
          <Navbar />
        </div>





      
        
          </div>


      
      </div>


      <div>
      
      </div>
      </div>
    </>
  )
}

export default App
