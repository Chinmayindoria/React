import React from "react"

function Card1(props){
  console.log(props);
    return(
      <div>       <div class="mx-auto max-w-7xl px-2 md:px-0">
      <div class="my-4">
        <h1 class="text-3xl font-bold">Our Team</h1>
        <p class="mt-2 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatum.
        </p>
      </div>
      <div class="grid grid-cols-1 gap-[30px] md:grid-cols-3">
        <div class="flex flex-col items-center text-start">
          <div
            class="relative flex h-[342px] w-full flex-col justify-end rounded-[10px] bg-red-300"
            
          >
            <img
              src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fHBlcnNvbnxlbnwwfHwwfHw%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
              alt=""
              class="z-0 h-full w-full rounded-[10px] object-cover"
            />
            <div class="absolute bottom-4 left-4">
              <h1 class="text-xl font-semibold text-white">{userName}</h1>
              <h6 class="text-base text-white">Frontend Developer</h6>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center text-start">
          <div
            class="relative flex h-[342px] w-full flex-col justify-end rounded-[10px] bg-red-300"

          >
            <img
              src="https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
              alt=""
              class="z-0 h-full w-full rounded-[10px] object-cover"
            />
            <div class="absolute bottom-4 left-4">
              <h1 class="text-xl font-semibold text-white">Mark Cook</h1>
              <h6 class="text-base text-white">Backend Developer</h6>
            </div>
          </div>
        </div>  
        <div class="flex flex-col items-center text-start">
          <div
            class="relative flex h-[342px] w-full flex-col justify-end rounded-[10px] bg-red-300"
          >
            <img
              src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHBlcnNvbnxlbnwwfHwwfHw%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
              alt=""
              class="z-0 h-full w-full rounded-[10px] object-cover"
            />
            <div class="absolute bottom-4 left-4">
              <h1 class="text-xl font-semibold text-white">Ketty</h1>
              <h6 class="text-base text-white">Designer</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
)
}

export default Card1

