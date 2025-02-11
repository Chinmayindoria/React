import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { IoRocketOutline } from "react-icons/io5";
import { MdDesignServices } from "react-icons/md";
import { LiaBlogSolid } from "react-icons/lia";
import { GrGallery } from "react-icons/gr";
import { IoCallOutline } from "react-icons/io5";


function Navbar() {
    return (
        <nav className='flex flex-nowrap gap-10 text-2xl w-full bg-black '>
           <div className='flex flex-col justify-center  '><NavLink className={({isActive}) => `${isActive ? " text-orange-300 p-10 m-5" : "text-white p-10 m-5"}`}to = '/ ' >
             

            <div className='mx-3 text-3xl'>
              <FaHome/>


            </div>
            Home</NavLink></div>
            <div className='flex flex-col justify-center  '><NavLink className={({isActive}) => `${isActive ? " text-orange-300 p-10 m-5" : "text-white p-10 m-5"}`}to = '/ ' >
             

             <div className='mx-8 text-3xl'>
               <IoRocketOutline/>
 
 
             </div>
             About Us</NavLink></div>
             <div className='flex flex-col justify-center  '><NavLink className={({isActive}) => `${isActive ? " text-orange-300 p-10 m-5" : "text-white p-10 m-5"}`}to = '/ ' >
             

             <div className='mx-20 text-3xl'>
                <MdDesignServices/>
 
             </div>
             Services and Program</NavLink></div>
             <div className='flex flex-col justify-center  '><NavLink className={({isActive}) => `${isActive ? " text-orange-300 p-10 m-5" : "text-white p-10 m-5"}`}to = '/ ' >
             

             <div className='mx-4 text-3xl'>
               <LiaBlogSolid/>
 
 
             </div>
             Blogs</NavLink></div>
             <div className='flex flex-col justify-center  '><NavLink className={({isActive}) => `${isActive ? " text-orange-300 p-10 m-5" : "text-white p-10 m-5"}`}to = '/ ' >
             

             <div className='mx-4 text-2xl'>
               <GrGallery/>
 
 
             </div>
             Gallery</NavLink></div>

             <div className='flex flex-col justify-center  '><NavLink className={({isActive}) => `${isActive ? " text-orange-300 p-10 m-5" : "text-white p-10 m-5"}`}to = '/ ' >
             

            <div className='mx-5 text-3xl'>
               <IoCallOutline/>
 
 
             </div>
             Contact Us</NavLink></div>
           {/* <div className=' bg-white'><NavLink className={({isActive}) => `${isActive ? " text-orange-300 p-10 m-5" : "text-white p-10 m-5"} `}  to ='/About'>About Us</NavLink></div>
           <div className=' '><NavLink className={({isActive}) => `${isActive ? " text-orange-300 p-10 m-5" : "text-white p-10 m-5"} `} to= '/Services'>Services And Programs</NavLink></div>
           <div className=' '><NavLink className={({isActive}) => `${isActive ? " text-orange-300 p-10 m-5" : "text-white p-10 m-5"} `} to = '/Blogs'>Blogs</NavLink></div>
           <div className=' '><NavLink className={({isActive}) => `${isActive ? " text-orange-300 p-10 m-5" : "text-white p-10 m-5"} `} to='/Gallery'>Gallery</NavLink></div>
           <div className=' '><NavLink className={({isActive}) => `${isActive ? " text-orange-300 p-10 m-5" : "text-white p-10 m-5"} `} to='/ContactUs'>Contact Us</NavLink></div> */}

        
        </nav>
    );
}

export default Navbar;
