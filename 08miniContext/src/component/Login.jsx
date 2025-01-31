import { useContext, useState } from 'react'
import React  from 'react'
import UserContext from '../context/UserContext'

function Login(){
  const  [UserName , setUserName] = useState('')
  const [Password ,  setPassword] = useState('')
    const {setUser} = useContext(UserContext)
    const {setPass} = useContext(UserContext)

    const submitHandle = (e) => {
        e.preventDefault()
        console.log(UserName)
        setUser(UserName)
        setPass(Password)
    }

    return (
        <>
        <input 
            type = 'text' 
            placeholder = 'username'
            value = {UserName}
            onChange = {(e) => setUserName(e.target.value) }
        />
        
        <input 
            type = 'password' 
            placeholder = 'password'
            value = {Password}
            onChange = {(e) => setPassword(e.target.value) }
        />

        <button
        onClick = {submitHandle} >Submit</button>
        
     </>

    )
}
export default Login 