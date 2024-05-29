import React from 'react'
import { Data } from '../utils/Contant'
import { Button } from './Button'

export const Infotant = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {Data.map((item, index) => {
        return (
          <div key={index} className={`mx-auto flex flex-col md:${item.position} items-center justify-center bg-white dark:bg-zinc-900 p-6 mb-20`}>
            <div className="md:w-[60%] p-4">
              <h2 className="text-[40px] leading-[44px] font-[600] text-[#000000] dark:text-white mb-6">{item.title}</h2>
              <p className="text-[#828282] dark:text-zinc-300 mb-8 text-lg w-[90%] text-justify">
                {item.description}
              </p>
              <Button data={"Learn More"} />
            </div>
            <div className="md:w-[40%] p-4">
              <img src={item.image} alt={item.title} className="rounded-lg shadow-md h-[350px] w-[400px] " />
            </div>
          </div>
        );
      })}
    </div>
  );
}
