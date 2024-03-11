import React from 'react'

export const CardComponent = ({flag,name}) => {
    console.log(flag,name);
  return (
   <div className='border-4 bg-slate-600'>
    <div className='grid grid-cols-9'>
        <div className="col-span-4"></div>
        <div className="col-span-5 bg-white"></div>
    </div>
    <div className='bg-white'>
    </div>
   </div>
  )
}
