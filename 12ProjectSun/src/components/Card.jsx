import React from 'react';


const Card = (props) => {
    return (
        // <div className="card">
        //     {props.children}
        // </div>
        <>
        <div className='w-[26%] h-[35rem] flex flex-col relative bg-slate-100 rounded-3xl rounded-t-3xl shadow-2xl'>
        <div className='w-full h-2/4  object-cover relative '>
            <img src= {props.source} className='rounded-t-3xl h-full' alt="" />
            <div className='h-16 w-48 rounded-tr-[10rem] bg-white absolute  bottom-[0.1rem] object-contain'>
                <img src={props.icons} className='h-20 w-48 rounded-3xl' alt="" />
        </div>
 
        </div>
       <div className='text-4xl font-semibold ml-5 mt-5'>
       <h1>
         {/* {props.h1} */}
         Space Astronomy Club
        </h1>
       </div >
        <div className='mt-2 ml-5 mr-5 font-medium text-lg'>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum ipsam exercitationem assumenda harum molestiae nisi, nulla porro quaerat explicabo deserunt quo accusamus ducimus aperiam voluptas illo quisquam architecto ullam officiis?
        </p>
        </div>
        </div>
        </>
    );
};

export default Card;