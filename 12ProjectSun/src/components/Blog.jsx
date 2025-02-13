import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../index.css'


let Cards = [
    "https://space-india.com/wp-content/uploads/2022/11/Space-Astronomy-Club.jpg",
    "https://space-india.com/wp-content/uploads/2022/11/Space-Explorers-Workshop.jpg",
    "https://space-india.com/wp-content/uploads/2022/11/Universe-in-the-school.jpg",
    "https://space-india.com/wp-content/uploads/2022/11/Space-Innovators-Club.jpg",
    "https://space-india.com/wp-content/uploads/2022/11/Space-Mobile-Planetarium.jpg",
    "https://space-india.com/wp-content/uploads/2022/11/comp-oly-1-3.jpg"
]


const Blog = () => {
    return (
        <>
            {/* <div className='w-[100%] h-[20rem] flex flex-col relative bg-slate-100 rounded-3xl rounded-t-3xl shadow-2xl'>
        <div className='w-full h-2/4  object-cover relative '>
            <img src= {"https://space-india.com/wp-content/uploads/2025/02/Culmination-of-the-Workshop-1024x683.png"} className='rounded-t-3xl h-full' alt="" />
            <div className='h-16 w-48 rounded-tr-[10rem] bg-white absolute  bottom-[0.1rem] object-contain'>
                <img src={"https://space-india.com/wp-content/uploads/2025/02/Culmination-of-the-Workshop-1024x683.png"} className='h-20 w-48 rounded-3xl' alt="" />
        </div>
 
        </div>
       <div className='text-4xl font-semibold ml-5 mt-5'>
       <h1>
        
         Space Astronomy Club
        </h1>
       </div >
        <div className='mt-2 ml-5 mr-5 font-medium text-lg'>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum ipsam exercitationem assumenda harum molestiae nisi, nulla porro quaerat explicabo deserunt quo accusamus ducimus aperiam voluptas illo quisquam architecto ullam officiis?
        </p>
        </div>
        </div> */}


            <div>
                <Navbar />
            </div>

            <div className='flex  flex-col  '>
                {Cards.map((s, i) => {
                    return (
                        <div className='BlogCard w-full'> 
                            <div className='h-[80%] flex w-auto m-20 mb-10  shadow-2xl rounded-3xl'>
                           
                                <a href="" className='blog2'>
                                <div className='  p-10 object-contain '>
                                    
                                    
                                    <img src={s} className="Blogimg w-[20rem ] h-[20rem] rounded-2xl shadow-2xl" alt="" />
                                    
                                    

                                </div>
                                </a>
                            




                                <div className='flex flex-col w-[50%]'>
                                    <a href="" className='blog'>
                                        <div className='font-bold h-[20%] p-5 w-[100%] pl-0  text-5xl mt-11 '>
                                            <h1 className='m-'>Lorem ispsum</h1>
                                        </div>
                                        <div className='font-normal text-xl mt-11 '>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cum excepturi soluta corporis quae? Illum, quibusdam. Magnam repudiandae officia debitis, eligendi numquam quidem blanditiis odio, facilis ea reprehenderit nisi iusto.</p>
                                        </div>
                                    </a>
                                </div>


                            </div>
                        </div>
                    )
                })
                }
                


            </div>
            <div>
                <Footer />
            </div>
        </>

    );
};

export default Blog;