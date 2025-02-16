import React, { useState } from 'react';
import "../index.css"



const Slider = ({ slides }) => {



  // const [current, setCurrent] = useState(0);


  const [current, setCurrent] = useState(0);




  function nextSlide(i) {
    // if (current === slides.length - 1) {
    //   // console.log(current);
    //   setCurrent(0);
    // }
    // else {
    //  setCurrent(current + 1);
    // //  console.log(current);
    // }
    setCurrent(i);
  }





  return (

    <>


      <div className='w-[100%] h-[100%] flex flex-nowrap  transition ease-out duration-1000 infinte object-contain  '
        style={{
          transform: `translateX(-${current * 100}%)`,

        }
        }
      >
        {slides.map((s) => {

          return (


            <img src={s} alt="" className=' h-[100%] w-[100%]' />



          )
        }
        )
        }

     
      </div>
     

      <div className='SliderDots absolute bottom-0 flex gap-5 py-4 w-full justify-center'>
          {
            slides.map((s, i) => {
              console.log(current);
              return (

                <div

                  key={i}
                  className={`rounded-full w-5 h-5 ${current === i ? "bg-slate-500" : "bg-white"}`}
                  onClick={() => {
                    setCurrent(i);
                  }}>

                </div>


              )
            })
          }
        </div>

    </>



  );
};
export default Slider;

