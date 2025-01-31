import React from 'react'
import {useState , useEffect} from 'react'
import {useLoaderData} from 'react-router-dom'

function GitHub(){
//    const [data,setData] = useState([])
//     useEffect(() =>
//             {
//                 fetch(`https://api.github.com/users/hiteshchoudhary`)
//                 .then(response => response.json())
//                 .then(res => setData(res))
//             },[])

 
let data = useLoaderData()
    return(
      <> <div className = 'bg-gray-500 text-white text-3xl text-center '>GitHub Followers: {data.followers}
      <img src={data.avatar_url} alt="avatar" width={300}/>
      </div>
  </> )
}
 export default  GitHub
 


 export const getData = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    const data = response.json()
    return data
 }

  
