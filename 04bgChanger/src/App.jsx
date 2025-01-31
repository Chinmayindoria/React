import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [color, setColor] = useState('white')

  return (
    <div className = 'w-full h-screen duration-200 '
    style = {{backgroundColor : color}}>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className = 'flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>

      <button
      onClick = {() => {setColor('red')}}
      className = 'outline-none px-4 py-1 rounded-full text-white shadow-lg'
      style = {{ backgroundColor : 'red' , color : 'white'}}>Red</button>

      <button 
      onClick = {() => {setColor('green')}}
      className = 'flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'
      style = {{backgroundColor : 'Green', color : 'white'}}>Green</button>

      <button 
      onClick = {() => {setColor('blue')}}
      className = 'flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'
      style = {{backgroundColor : 'blue', color : 'white'}}>Blue</button>

      <button
      onClick = {() => {setColor('olive')}}
      className = 'flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'
      style = {{backgroundColor : 'olive', color : 'white'}}>Olive</button>

      <button 
      onClick = {() => {setColor('grey')}}
      className = 'flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'
      style = {{backgroundColor : 'grey', color : 'white'}}>Grey</button>

      <button 
      onClick = {() => {setColor('yellow')}}
      className = 'flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'
      style = {{backgroundColor : 'yellow'}}>Yellow</button>

      <button 
      onClick = {() => {setColor('pink')}}
      className = 'flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'
      style = {{backgroundColor : 'pink'}}>Pink</button>

      <button 
      onClick = {() => {setColor('purple')}}
      className = 'flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'
      style = {{backgroundColor : 'purple', color : 'white'}}>Purple</button>

      <button 
      onClick = {() => {setColor('lavender')}}
      className = 'flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'
      style = {{backgroundColor : 'lavender'}}>Lavender</button>

      <button 
      onClick = {() => {setColor('white')}}
      className = 'flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'
      style = {{backgroundColor : 'white'}}>White</button>

      <button 
      onClick = {() => {setColor('black')}}
      className = 'flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'
      style = {{backgroundColor : 'black', color : 'white'}}>Black</button> 
    </div>
    </div>
    </div>
  )
}

export default App
