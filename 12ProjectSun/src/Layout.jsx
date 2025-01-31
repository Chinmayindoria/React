import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import App from './App'

function Layout() {
    <>
    <App/>
    <Outlet />
    </>
}
export default Layout