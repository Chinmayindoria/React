import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { IoRocketOutline } from "react-icons/io5";
import { MdDesignServices } from "react-icons/md";
import { LiaBlogSolid } from "react-icons/lia";
import { GrGallery } from "react-icons/gr";
import { IoCallOutline } from "react-icons/io5";
import { CgMenu } from "react-icons/cg";


function Navbar() {
  return (
    <nav className='flex w-[100%] gap-[5vw] text-2xl items-center p-[2vw]  '>

      <div className="logo text-white">
        Your logo
      </div>

      <div className=' flex justify-center items-center gap-[8vw]' >
        <div className='flex flex-col justify-center items-center '>
          <NavLink className={({ isActive }) => `${isActive ? " text-white " : "text-white "}`} to='/' >


            <div className='flex justify-center'>
              <FaHome />


            </div >
            <div className='text-[1.07vw]'>
              Home
            </div>
          </NavLink>
        </div>
        <div className='flex flex-col justify-center  '><NavLink className={({ isActive }) => `${isActive ? " text-white " : "text-white "}`} to='/' >


          <div className='flex justify-center '>
            <IoRocketOutline />


          </div>
          <div className='text-[1.07vw]'>
            About Us
          </div>

        </NavLink></div>
        <div className='flex flex-col justify-center  '><NavLink className={({ isActive }) => `${isActive ? " text-white " : "text-white "}`} to='/' >


          <div className='flex justify-center'>
            <MdDesignServices />

          </div>
          <div className='text-[1.07vw]'>
            Services and Program
          </div>
        </NavLink></div>
        <div className='flex flex-col justify-center  '>
          <NavLink className={({ isActive }) => `${isActive ? " text-white " : "text-white "}`} to='/Blogs' >


            <div className='flex justify-center '>
              <LiaBlogSolid />


            </div>
            <div className='text-[1.08vw]'>
              Blogs
            </div>
          </NavLink></div>
        <div className='flex flex-col justify-center  '>
          <NavLink className={({ isActive }) => `${isActive ? " text-white " : "text-white "}`} to='/Gallery' >


            <div className='flex justify-center text-[1vw] pt-[0.3vw]'>
              <GrGallery />


            </div>
            <div className='text-[1.06vw]'>
              Gallery
            </div>
          </NavLink></div>

        <div className='flex flex-col justify-center  '><NavLink className={({ isActive }) => `${isActive ? " text-white " : "text-white "}`} to='/Gallery' >


          <div className='flex justify-center text-[1.1vw]'>
            <IoCallOutline />


          </div>

          <div className='text-[1vw]'>
            Contact Us
          </div>
        </NavLink></div>
      </div>

      {/* <div className="icon bg-slate-50 mx-0 h-[2.5vw] w-[3.5vw] p-[0.4vw] px-[0.7vw] rounded-lg text-[1.9vw]">
        <CgMenu />
      </div> */}
      <button className="icon bg-slate-50 mx-0 h-[2.5vw] w-[4.5vw] rounded-3xl text-[1.07vw] font-semibold p-[0.3vw]">
        Sign in
      </button>

    </nav>
  );
}

export default Navbar;
