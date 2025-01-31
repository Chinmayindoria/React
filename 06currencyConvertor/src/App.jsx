import { useState,useEffect } from 'react'
import InputBox from './Components/InputBox.jsx'
import useCurrencyInfo from './hooks/useCurrencyInfo.js'

function App() {
  const [amount, setAmt] = useState ()
  const [from, setFrom]  = useState("USD")
  const [to, setTo] = useState("INR")
  const [convertedAmount , setConvertedAmount] = useState()


  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmt(convertedAmount);
    setConvertedAmount(amount);
    return 0;
  }
 

  const currencyObj = useCurrencyInfo(from);
  
  const currencyArr = Object.keys(currencyObj);
 

  const convertedAmt = () => {
    setConvertedAmount(amount * currencyObj[to]) ;
    return 0;
  }

  return (
    
    <div 
    className = 'w-full flex justify-center  items-center h-screen bg-cover bg-no-repeat '
    style = {{backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`}}
    >
      <div className = 'w-full '>
       
      <div className = 'flex border justify-between border-gray-60 w-full  mx-auto backdrop-blur-sm bg-white/30 rounded-lg p-5'>
      <div
    
        className='  p-2 bg-contain  bg-no-repeat   w-full max-w-md '
          style = {{
            backgroundImage : `url('https://media.istockphoto.com/id/1204350865/photo/goddess-sculpture-in-indian-wedding.jpg?s=1024x1024&w=is&k=20&c=pS3XmU-V-8uavn3VJ8HOf7vhnbYMGybCp-og6_Nmxh0=')`}}>
        </div>
      <form onSubmit = {(e) => {
        e.preventDefault();
        convert()}
        }>
          <div className= 'w-full mb-1'>
            <InputBox 
            label = 'From'
            Amount = {amount}
            onAmtChange = {(Amount) => setAmt(Amount)}
            onCurrChange = {(currency) => setFrom(currency)}
            curOptions = {currencyArr}
            selectCurrency = {from}
            
        />
      </div>
      <div className = 'relative w-full h-0.5'>
        <button 
        className = 'bg-blue-600  rounded-md absolute text-white left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white px-2'
        onClick = {swap}>SWAP</button>
      </div>
      <div className= 'w-full mt-1 mb-4'>
        <InputBox
        label = 'To'
        Amount = {convertedAmount}
        onCurrChange = {(currency) => setTo(currency)}
        curOptions = {currencyArr}
        selectCurrency = {to}
        amountDisabled 
        />
        </div>
        <button 
        className = 'w-full bg-blue-600 rounded-lg text-white px-4 py-3 text-center '
        onClick = {convertedAmt}>CLICK TO CONVERT {from} TO {to} </button>
      </form>
      </div>
      </div>
      
    </div>
   
  )
}

export default App

