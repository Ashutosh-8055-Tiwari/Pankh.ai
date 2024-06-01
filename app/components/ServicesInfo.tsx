import React from 'react';

export const ServicesInfo = (props:any) => {
  return (      
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 mt-10 sm:mt-20 dark:bg-gray-900 dark:text-white">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] leading-tight sm:leading-[44px] md:leading-[58px] lg:leading-[70px] xl:leading-[77.45px] font-bold mb-4">
        {props.title}
      </h2>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[24px] text-gray-600 dark:text-[#828282] leading-6 sm:leading-7 md:leading-8 lg:leading-9 xl:leading-[36px] font-[400] mb-6">
        {props.description}
      </p>
      <img 
        src={props.image} 
        alt="Code and Keyboard" 
        className="w-full rounded-lg shadow-md h-60 sm:h-80 md:h-96 lg:h-[500px] xl:h-[650px]" 
      />
    </div>
  )
}
