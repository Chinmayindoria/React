import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from './Layout.jsx'
import {RouterProvider, createBrowserRouter,createRoutesFromElements,Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Footer from './components/Footer.jsx'
import Contactus from './components/Contactus.jsx'
import Gallery from './components/Gallery.jsx'
import Blog from './components/Blog.jsx'


const router = createBrowserRouter(
  // createRoutesFromElements(
  //   <Route path = "/" elements = {<Layout/>}>
  //     <Route path = "" elments = {<App/>}/> 
  //   </Route>

  // )


  [
    {
      path: '/',
      element: <><App/><Home/></>,
        
      },{

          path: "/About",
          element: <><App/><About/><Footer/></>
        },
        {

          path: "/ContactUs",
          element: <><App/><Contactus/><Footer/></>
        },
        {

          path: "/Gallery",
          element: <><Gallery/></>
        },
        {

          path: "/Blogs",
          element: <><Blog/></>
        }
  ]
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>
)
