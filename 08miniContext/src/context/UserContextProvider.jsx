import React, { useState } from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({children}) => {
   const [user,setUser] = useState(null)
   const [Pass,setPass] = useState(null)
    return (
        <UserContext.Provider value = {{user, setUser,Pass, setPass}}>
            {children}
        </UserContext.Provider>        
    )
}

export default UserContextProvider