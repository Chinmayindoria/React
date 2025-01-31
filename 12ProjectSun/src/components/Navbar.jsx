import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav>

            <div >
                <NavLink className={({isActive}) => `${isActive ? " text-orange-300 p-10 m-5" : "text-white p-10 m-5"}`}to = '/' >Home</NavLink>
                <NavLink className={({isActive}) => `${isActive ? " text-orange-300 p-10 m-5" : "text-white p-10 m-5"}`}  to ='/About'>About Us</NavLink>
                <NavLink className={({isActive}) => `${isActive ? " text-orange-300 p-10 m-5" : "text-white p-10 m-5"}`} to= '/Services'>Services And Programs</NavLink>
                <NavLink className={({isActive}) => `${isActive ? " text-orange-300 p-10 m-5" : "text-white p-10 m-5"}`} to = '/Blogs'>Blogs</NavLink>
                <NavLink className={({isActive}) => `${isActive ? " text-orange-300 p-10 m-5" : "text-white p-10 m-5"}`} to='/Gallery'>Gallery</NavLink>
                <NavLink className={({isActive}) => `${isActive ? " text-orange-300 p-10 m-5" : "text-white p-10 m-5"}`} to='/ContactUs'>Contact Us</NavLink>

               
            </div>
        </nav>
    );
}

export default Navbar;