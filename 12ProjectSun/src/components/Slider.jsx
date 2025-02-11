import React from 'react';

const Slider = ({slides , current , setCurrent}) => {
    return (

      <>

       <div className=' overflow-hidden relative rounded-3xl '>
          <div className='items flex'>
            {slides.map((s) => {
              
               return <img src={s} alt="" />
            }
            )
            }
        </div>
        <div className='absolute bottom-0 py-4 flex justify-center gap-5 w-full'>
           {
            slides.map((s,i) =>{
              console.log(current);
              return(
               
                <div 
                onClick={setCurrent(i)}
                key={i}
                className={`rounded-full w-5 h-5 ${
                  current-4 === i ?"bg-slate-500": "bg-white"}`}>

                  </div>
              )
            })
           }
        </div>
      </div>
      

   

      </>
     

      
    );
};
export default Slider;

