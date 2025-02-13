import React from 'react';
import Navbar from './Navbar';
import About from './About';
import Footer from './Footer';


let Cards = [
    "https://space-india.com/wp-content/uploads/2022/11/Space-Astronomy-Club.jpg",
    "https://space-india.com/wp-content/uploads/2022/11/Space-Explorers-Workshop.jpg",
    "https://space-india.com/wp-content/uploads/2022/11/Universe-in-the-school.jpg",
    "https://space-india.com/wp-content/uploads/2022/11/Space-Innovators-Club.jpg",
    "https://space-india.com/wp-content/uploads/2022/11/Space-Mobile-Planetarium.jpg",
    "https://space-india.com/wp-content/uploads/2022/11/comp-oly-1-3.jpg"
]


let icons = [
    "https://space-india.com/wp-content/uploads/2022/08/astronomy-club.png",
    "https://space-india.com/wp-content/uploads/2022/08/explor-logo.png",
    "https://space-india.com/wp-content/uploads/2022/08/uni-logo.png",
    "https://space-india.com/wp-content/uploads/2022/11/Space-Innovators-Club-logo.png",
    "", ""

]

const Gallery = () => {
    return (

        <div>
            <div className='mb-20 w-screen h-[20%]  flex'>
                <Navbar/>
            </div>
            <div className='h-[7rem] w-[100%] text-[500%] ml-0 m-10 text-center font-semibold shadow-md'>
                <h1>
                    Featured Images
                </h1>
            </div>
            <div className='flex flex-wrap h-[300%] w-[100%] gap-10 justify-center mb-[10%]'>
                {

                    Cards.map((s, i) => {
                        return (
                            <div className='w-[26%] h-[35rem] flex flex-col relative bg-slate-100 rounded-3xl rounded-t-3xl shadow-2xl'>
                                <div className='w-full h-2/4  object-contain relative '>
                                    <img src={s} className='rounded-t-3xl h-full' alt="" />
                                    <div className='h-16 w-48 rounded-tr-[10rem] bg-white absolute  bottom-[0.1rem] object-contain'>
                                        <img src={icons[i]} className='h-20 w-48 rounded-3xl' alt="" />
                                    </div>

                                </div>
                                <div className='text-4xl font-semibold ml-5 mt-5'>
                                    <h1>
                                        {/* {props.h1} */}
                                        Space Astronomy Club
                                    </h1>
                                </div >

                            </div>
                        )
                    })

                }

            </div>

            <div>
                <Footer/>
            </div>
        </div>
    );

};

export default Gallery;