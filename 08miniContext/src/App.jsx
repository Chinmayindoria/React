import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './component/Login'
import Profile from './component/Profile'
import React , {useContext} from 'react'
import UserContext from './context/UserContext.js'
import Hello from './component/Hi.jsx'
import Hello2 from './component/Hi2.jsx'


function App() {
  function Pass(){
    const {Pass} = useContext(UserContext)
    return(
    <div>Password : {Pass}</div>
    )
 }
 

  return (
    <UserContextProvider>
          <div>Chai Aur React Lecture</div>
    <Login/>
    <Profile/>
    <Hello/>
    <Hello2/>

    <div>
      <Pass/>
    </div>

    </UserContextProvider>
  )
}

export default App
