import React from 'react'

import { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile(){
    const {user} = useContext(UserContext)
    const{Pass} = useContext(UserContext)
    console.log(user);
    console.log(Pass);
    if(!user) return <div>Please Login</div>
    else return (<div>Welcome: {user}</div>)
}

export default Profile