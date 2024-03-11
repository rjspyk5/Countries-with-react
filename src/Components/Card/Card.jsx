import React, { useState } from 'react'

export const CardComponent = ({flag,name,capital}) => {
    const [isVisited, setisVisited] = useState(false)
const handleIsVisited=()=>setisVisited(!isVisited)
    console.log(capital);
  return (
   <div className='border-8 rounded-xl border-black bg-[#282727] p-2'>
    <div className='grid grid-cols-9'>
        <div className="col-span-4 m-2 ">
            <img className='w-full h-12 rounded-md' src={flag} alt="" />
        </div>
        <div className="col-span-5 bg-white rounded-t-xl ">
        </div>
    </div>
    <div className='bg-white rounded-b-xl rounded-tl-xl p-5 ' > 
    <h1 className='text-center font-black text-2xl'>{name}</h1>
    <p className='text-center text-xl my-2'>Capital City</p>
    <h1 className='text-center'>{capital!==undefined ? capital[0]:"Unknown"}</h1>
    <button onClick={handleIsVisited} className={` ${isVisited? "bg-green-500":"bg-red-500"} rounded-xl text-white px-2 py-1 `}>{isVisited? "Visited":"Visited?"}</button>
   
    </div>
   </div>
  )
}
