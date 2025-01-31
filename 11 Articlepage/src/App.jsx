import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(null)
  const[color, setColor] = useState(null)
  function changeColor1(){
    setCount("https://live-production.wcms.abc-cdn.net.au/4d5e852f19615698a8e261cae2d19f59?impolicy=wcms_crop_resize&cropH=1120&cropW=1989&xPos=5&yPos=80&width=862&height=485");
    setColor("white")
  }
  function changeColor2(){
    setCount("https://images.ctfassets.net/yfedqi1sean6/6DZQ3B4SnDs2SZNgwP0DVC/d68df3f184e3188b1ebbab34b7e73a4e/People_standing_on_a_mountain.jpg");
    setColor("white")
  }
  function changeColor3(){
    setCount("https://blogassets.airtel.in/wp-content/uploads/2023/05/felix-rostig-UmV2wr-Vbq8-unsplash.jpg");
    setColor("white")
  }
  return (
    <div
    className='flex justify-center bg-#e2e8f0 '>
      


      {/* home */}
      <div
      style = {{backgroundImage:`url(https://live-production.wcms.abc-cdn.net.au/4d5e852f19615698a8e261cae2d19f59?impolicy=wcms_crop_resize&cropH=1120&cropW=1989&xPos=5&yPos=80&width=862&height=485)`}}
      className='w-11/12 h-screen flex bg-cover m-0 flex-col  opacity-90 animate-wiggle'>





        {/* navbar */}
          <div  
          className='text-black flex space-x-40 p-5 h-14 border-2 border-white backdrop-blur-sm items-center font-bold '
          >
            <div className='text-xl '>Horizone</div>
            <div>Hotel</div>
            <div>Flight</div>
            <div>Train</div>
            <div>Travel</div>

          </div>






        {/* botttom */}
        <div className='w-11/12 h-36 flex  absolute bottom-52'>
        
        
            {/* content */}
             <div className='w-4/12 border-2 h-56 border-white mx-5 rounded-lg backdrop-blur-sm'>
              <div className='text-black text-5xl p-3 font-semibold'>Exploring the world </div>
              <div className='my-5 px-4'>
              <p className='text-black font-semibold '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime similique perferendis molestias consequatur mollitia unde. Corporis est eum nam alias eaque, necessitatibus aperiams tenetur unde ut commodi in quia officia?</p>
              </div>
             </div>   



            {/* img */}
            <div className='absolute right-4 w-5/12 flex backdrop-blur-sm border-solid border-4 rounded-xl '>
  
              <div className='rounded-full h-36 w-36 bg-cover'
               style = {{backgroundImage:`url(./chetan.jpg)`}}
              >  
                </div>
              <div className='mx-10 my-10'>
                 <h1 className='text-4xl font-semibold'>CHETAN BHAGAT</h1>
                 <p className='text-lg'>24 Jan 2024 :  10 min read </p>
                 </div>
             
            </div>


        </div>


      {/* buttton */}
      <div className='absolute bottom-20 mx-10'>
                     <button onClick={changeColor1}
              className={`text-white w-5 h-5 bg-${color}  rounded-full border-2 border-black`}>.</button>
                    <button onClick={changeColor2}
              className={` text-white w-5  h-5 bg-${color}   rounded-full border-2 mx-2 border-black`}>.</button>
                    <button onClick={changeColor3}
              className={` text-white w-5 h-5 bg-${color}   rounded-full border-2 border-black`}>.</button>
      </div>





      </div>
      </div>
         
  )
}

export default App
