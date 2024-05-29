import React from 'react'

export const ServicesInfo = (props:any) => {
  return (      
  
  <div className="  p-6 mt-20">
    <h2 className="text-[64px] leading-[77.45px] font-bold mb-4">{props.title}</h2>
    <p className="text-[#828282]  text-[24px] leading-[36px] font-[400] mb-6">{props.description}</p>
    <img src={props.image} alt="Code and Keyboard" className="w-full rounded-lg shadow-md h-[650px]" />
 </div>
  )
}
