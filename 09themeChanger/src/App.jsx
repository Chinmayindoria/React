import { ContextProvider } from './Context/Theme'
import './App.css'
import ThemeBtn from './components/Themebtn'
import Card from './components/Card'
import { useEffect, useState } from 'react'

function App() {
  const [themeMode,setThemeMode] =  useState('light')

    const darkTheme = () =>{
      setThemeMode('dark')
    }
    const lightTheme = () => {
      setThemeMode('light')
    }
  
    useEffect(() =>{
      document.querySelector('html').classList.remove('dark','light')
      document.querySelector('html').classList.add(themeMode)
    },[themeMode]
    )

  return (

  <ContextProvider value = {{themeMode,darkTheme,lightTheme}}>
   <><div className="flex flex-wrap min-h-screen items-center">
    <div className="w-full">
      <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>
        </div>

        <div className="w-full max-w-sm mx-auto">
          <Card/>
        </div>
    </div>
    </div>
    </>
  </ContextProvider> 

  )
}

export default App
