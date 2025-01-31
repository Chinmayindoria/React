import React from 'react'



function InputBox({
    label,
    Amount,
    curOptions = [],
    onAmtChange,
    onCurrChange,
    amountDisabled,
    currencyDisabled,
    selectCurrency = 'USD',
}){
     
    
    return(
      <div className = 'rounded-lg text-sm bg-white flex p-3'>
       
        <div className='w-1/2'>
            <label className = 'inline-block mb-2' >{label}</label>
            <input 
            type="Number"
            className = 'outline-none w-full bg-transparent py-1.5'
            placeholder="Amount"
            value = {Amount}
            disabled = {amountDisabled}
            onChange = {(e) => onAmtChange(Number(e.target.value))}
            />
        </div>
        <div className='w-1/2 flex flex-wrap justify-end text-right'>
            <p className='text-black/40 mb-2 w-full' >Currency Type</p>
            <select
            className = 'rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
            value = {selectCurrency}
            onChange = {(e) => onCurrChange(e.target.value) }
            disabled = {currencyDisabled}
            >
                {curOptions.map((currency) => (
                    <option key= {currency} value = {currency}>{currency}</option>
                ))
                }      
            </select>
        </div>
    </div>
)
}

export default InputBox