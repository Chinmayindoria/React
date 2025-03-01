import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { IoRocketOutline } from "react-icons/io5";
import { MdDesignServices } from "react-icons/md";
import { LiaBlogSolid } from "react-icons/lia";
import { GrGallery } from "react-icons/gr";
import { IoCallOutline } from "react-icons/io5";
import { CgMenu } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";

import App from "../App.jsx"


function Menu() {
  console.log("ch");
  let main = document.querySelector("*");
  main.style.overflow = 'hidden';
  let maincontent = document.querySelector(".MenuContent");
  maincontent.style.display = 'flex';

}
function Menuhide() {
  console.log("ch");
  let main = document.querySelector("*");
  main.style.overflow = 'visible';
  let maincontent = document.querySelector(".MenuContent");
  maincontent.style.display = 'none';

}

function Navbar() {
  return (
    <nav className='flex w-[100%] gap-[5vw] text-2xl items-center  p-[1.5vw]  '>

      <div className="logo text-white p-[1.5vh]">
        Your logo
      </div>

      <div className='MenuContent hidden h-screen w-[100%] fixed top-0 left-0 bg-white flex-col gap-[5vh]  z-[1000] '>
        <div className=" w-[100%] h-[19.5vw] flex bg-[#171E40] p-[2.5vh] items-center ">
          <div className="logo text-white  ">
            Your logo
          </div>
          <div className='text-[#171E40] bg-white h-[4%] w-[10%] text-[3.5vh] rounded-xl font-extrabold flex items-center justify-center absolute right-[3vh]'
          >
          <button onClick={Menuhide} >
          <RxCross2 />
          </button>
          </div>
        </div>


      <div className='flex flex-col gap-[1vh] font-semibold text-[2.5vh] p-[2vh]'>
        <ul><a>Home</a></ul>
        <ul><a>About Us</a></ul>
        <ul><a>Service and Program</a></ul>
        <ul><a>Blogs</a></ul>
        <ul><a>Contact Us</a></ul>
      </div>

      <div className='absolute bottom-[10vh] h-[10%] w-[100%]  flex items-center justify-center'>
      <button className=" bg-[#171E40] text-white h-[50%] w-[50%] rounded-3xl  font-semibold ">
        Sign in
      </button> 
      </div>

      </div>



      <div className='Navlist flex justify-center items-center gap-[8vw]' >
        <div className='flex flex-col justify-center items-center p-[1vw] '>
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


            <div className='flex justify-center text-[1.2vw] '>
              <GrGallery />


            </div>
            <div className='text-[1.07vw]'>
              Gallery
            </div>
          </NavLink></div>

        <div className='flex flex-col justify-center  '><NavLink className={({ isActive }) => `${isActive ? " text-white " : "text-white "}`} to='/Gallery' >


          <div className='flex justify-center '>
            <IoCallOutline />


          </div>

          <div className='text-[1.07vw]'>
            Contact Us
          </div>
        </NavLink></div>
      </div>

      <div className="icon1 flex justify-center items-center bg-slate-50 mx-0 h-[4%] w-[10%] p-[0.4vw] px-[0.7vw] rounded-lg text-[1.9vw] right-[3vh] absolute">
        <button
          onClick={Menu}>
          <CgMenu />
        </button>
      </div>
      <button className="icon2 bg-slate-50  h-[2.5vw] w-[4.5vw] rounded-3xl text-[1.07vw] font-semibold p-[0.3vw]">
        Sign in
      </button>

    </nav>
  );
}

export default Navbar;
