import React from "react"
import {useContext , createContext} from 'react'


export const themeContext = createContext({
    themeMode : 'light',
    darkTheme: () => {},
    lightTheme: ()=>{}
})
export const ContextProvider = themeContext.Provider



export default function useTheme(){
    return(
        useContext(themeContext)
    )
}
