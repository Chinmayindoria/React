import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App(){
  let [Count , newCount] = useState(0)
  let addVal = () =>{
    if(Count < 20){
      newCount(Count = Count + 1);
      newCount(Count + 1);
      newCount(Count + 1);
      newCount(Count + 1);
      }
    else{
      Count = 20;
      newCount(Count);
    }
  }
  let subVal = () => {
    if(Count > 0){
      newCount(Count--);
    }
    else{
      Count = 0;
      newCount(Count);
    }
  }
   
  return (
    <>
      <h1>Counter Value : {Count}</h1>
      <button 
      onClick = {addVal}>Add Value</button>
      <br/>
      <button
      onClick = {subVal}>Subtract Value</button>
      </>
  )
}

export default App
