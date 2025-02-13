import React, { useState } from 'react';




const Slider = ({ slides }) => {

  

  // const [current, setCurrent] = useState(0);


  let current = 0;




  function nextSlide() {
    if (current === slides.length - 1) {
      current = 0;
    }
    else {
     current = current + 1;
    }
  }

  return (

    <>

      <div className={`overflow-hidden relative rounded-3xl  `}>
      <button className='h-[10rem] w-[10rem] bg-pink-600' 
                  onClick={nextSlide}>cdfd</button>
        <div className={`items flex translate-x-[-${current*100}] `}>
          {slides.map((s) => {

            return (
              
                <img src={s} alt="" />
            
              
            )
          }
          )
          }
        </div>
        <div className='absolute bottom-0 py-4 flex justify-center gap-5 w-full'>
          {
            slides.map((s, i) => {
              console.log(current);
              return (

                <div
                  
                  key={i}
                  className={`rounded-full w-5 h-5 ${current === i ? "bg-slate-500" : "bg-white"}`}>

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

