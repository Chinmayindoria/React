import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Galaxy from '../src/Video/Galaxy.mp4'
import Hero from './components/Hero'
import Slider from '../src/components/Slider'
import Cards from '../src/components/Card'
import './index.css'
import About from './components/About'






function App() {
  const [count, setCount] = useState(0);





  let slides = [
    "https://space-india.com/wp-content/uploads/2024/09/Buy-Exclusive-ISRO-Merchandise-online-from-Space-Arcade-ISRO-Products-1.png",
    "https://space-india.com/wp-content/uploads/2024/08/Space-Observatory.jpg",
    "https://space-india.com/wp-content/uploads/2024/08/Space-and-Astronomy-Programs-for-Schools.jpg",
    "https://space-india.com/wp-content/uploads/2024/02/Space-Outreach-Program.webp",
    "https://space-india.com/wp-content/uploads/2024/02/Buy-Telescope.webp"
  ]

  let cards = [
    "https://space-india.com/wp-content/uploads/2022/11/Space-Astronomy-Club.jpg",
    "https://space-india.com/wp-content/uploads/2022/11/Space-Explorers-Workshop.jpg",
    "https://space-india.com/wp-content/uploads/2022/11/Universe-in-the-school.jpg",
    "https://space-india.com/wp-content/uploads/2022/11/Space-Innovators-Club.jpg",
    "https://space-india.com/wp-content/uploads/2022/11/Space-Mobile-Planetarium.jpg"
  ]

  let icons = [
    "https://space-india.com/wp-content/uploads/2022/08/astronomy-club.png",
    "https://space-india.com/wp-content/uploads/2022/08/explor-logo.png",
    "https://space-india.com/wp-content/uploads/2022/08/uni-logo.png",
    "https://space-india.com/wp-content/uploads/2022/11/Space-Innovators-Club-logo.png",
    "", ""

  ]
  let [current, setCurrent] = useState(0);




  function nextSlide() {
    if (current === slides.length - 1) {
      console.log(current);
      setCurrent(0);
    }
    else {
      setCurrent(current + 1);
      console.log(current);
    }
  }



  return (
    <>
      {/* <div className='flex flex-wrap justify-center text-center'>

       
        <div className='h-svh w-svw'>
          <div className="navbar h-20 w-[100rem] p-1  flex flex-row flex-nowrap gap-10 absoluted top-16 left-[10rem] z-[10]">
            <Navbar />
          </div>
     

          <div className='slides  w-[10%] object-contain flex flex-wrap '>
            <div className=" object-contain   rounded-3xl bg-white border-8 shadow-2xl  z-10 ">
              <Slider slides={slides} />
            </div>
          </div>

          <div className="h-4/5 w-full absolute top-0 -z-10">
            <video src={Galaxy} autoPlay loop muted />
          </div>


        </div>
     


        <div className=" h-[40rem] w-4/5 mx-48 mt-20 relative flex shadow-2xl bg-white-900 rounded-xl ">
          <div className=" text-3xl text-orange-300  h-10 w-3/12 m-5  mt-20 absolute right-1/4 -translate-x-5 font-bold">
            <h1>About Us</h1>
          </div>
          <div className='text-2xl text-black  w-1/2 h-4/6 m-5 mt-32 right-5 absolute font-medium'>
            <p>Space Technology and Education Pvt. Ltd., also recognized as SPACE India, is a pioneer organization with a legacy of 24 years in developing and popularizing Astronomy, Space Science, and STEM education and experiences at Grassroots level (K-12) and beyond. As a registered Space Tutor of the Indian Space Research Organization (ISRO), SPACE India has been instrumental in creating an impact through science, and aligns with the United Nations’ Sustainable Development Goals.

              SPACE India has inspired 1.5M+ Students and empowered 1,000+ Schools through a diverse range of products and services. SPACE India is the parent company of the SPACE Group of companies.</p>
          </div>
          <div className=" text-3xl text-white bg-red-400 h-40 w-4/12 m-5 mt-20 rounded-lg absolute left-40 ">
            <img src="https://space-india.com/wp-content/uploads/2024/04/Cover-Images-with-Logo-2048x1729.png" alt="" />
          </div>
        </div>


        <div className=" h-[110rem] w-[100%] mt-40 relative flex flex-col justify-center">


          <div className='  text-6xl w-full h-[5rem] font-["M PLUS Rounded 1c", Sans-seri] top-0 text-[#253B70] font-semibold  text-center m-5 shadow-lg   '>
            <h1>
              Services and Program
            </h1>
          </div>

          <div className='  text-2xl  text-slate-500 m-5 mx-20 font-semibold '>
            <p>
              Space Technology and Education Pvt. Ltd. offers a range of meticulously curated, school-based educational programs in Astronomy, Space Science, and STEM (Robotics, Drones & AI) to promote the development of 21st-century skills in students. Our programs are the culmination of years of research and are tailored to different age groups following the National Education Policy. At Space Technology and Education Pvt. Ltd., we are committed to providing high-quality educational programs that inspire the next generation of scientists and innovators. Our team of experts is dedicated to ensuring that our programs are engaging, informative, and promote a deep understanding of the fascinating world of science and technology.

              The organization is committed to nurturing the next generation of space science students by providing unparalleled educational standards. Our passion for inspiring and mentoring students is evident in their unwavering dedication to cultivating young minds and fostering a love for space science.


            </p>
          </div>

          <div className='  w-[100%] flex relative flex-wrap gap-10 justify-center m-10'>
            {
              cards.map((s, i) => {
                return (< Cards source={s} icons={icons[i]} />)
              })
            }
          </div>



        </div>

   
        <div className="bg-red-500 h-svh m-10">
          hi
        </div>
        <div className="bg-orange-400 h-svh m-10">
          hi
        </div>
      </div> */}


      <div className='main w-[100%] h-[100%] flex flex-col items-center gap-[3vw] m-0 p-0 '>

        <div className="navbar w-[100%] h-[6vw] flex bg-[#171E40] pl-[1vw] ">
          <Navbar/>
        </div>


        <div className="newslides w-[80vw] h-[35vw] flex relative flex-wrap overflow-hidden z-10 rounded-3xl border-slate-600 shadow-2xl ">
        <Slider  slides={slides} />
        </div>

         
      </div>
      <div className="Aboutus h-[40rem] w-4/5 mx-48 mt-20 relative flex shadow-2xl bg-white-900 rounded-xl text-wrap ">
      <About/>
        </div> 

           
     
    </>
  )
}

export default App