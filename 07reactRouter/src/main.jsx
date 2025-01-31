import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter , createRoutesFromChildren , RouterProvider ,Route} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contactus/Contact.jsx'
import User from './components/User/User.jsx'
import GitHub , {getData} from './components/GitHub/GitHub.jsx'


// const router = createBrowserRouter([
//   {path : '/',
//     element: <Layout/>,
//     children : [
//       {
//         path: '',
//         element: <Home/>
//       },
//       {
//         path: 'About',
//         element: <About/>
//       },
//       {
//         path : 'Contactus',
//         element : <Contact/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromChildren(
  <Route path = '/' element = {<Layout/>} >
    <Route path = '' element = {<Home/>}/>
    <Route path = 'About' element = {<About/>}/>
    <Route path = 'Contactus' element = {<Contact/>}/>
    <Route path = 'User/:Userid' element = {<User/>}/>
    <Route 
    loader = {getData}
    path = 'GitHub' 
    element = {<GitHub/>}/>
  </Route>
)
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
