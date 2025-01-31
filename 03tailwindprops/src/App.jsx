import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card1 from './components/Card1.jsx'
import Card2 from './components/Card2.jsx'

function App() {
  const [count, setCount] = useState(0)

  let newArr = [1,2,3];
  let obj = {
    Name : "Chinmay",
    Class: "Richest"
  }

  return (
    <>
    <h1 className="bg-green-200 rounded-xl p-4 text-7xl font-bold underline">Tailwind Test</h1>
    <Card1 userName = 'Chinmay' myArr={newArr} myobj={obj}/>
    <Card2/>
    </>
  )
}

export default App
