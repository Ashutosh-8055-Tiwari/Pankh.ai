import React from 'react';
import { Data } from '../utils/Contant';
import { Button } from './Button';

export const Infotant = () => {
  return (
    <div className="flex flex-wrap justify-center dark:bg-gray-900 dark:text-white">
      {Data.map((item, index) => {
        return (
          <div
            key={index}
            className={`mx-auto flex flex-col ${item.id === 2 ? 'md:flex-row-reverse' : 'md:flex-row'} md:gap-14 dark:bg-gray-900 dark:text-white items-center justify-center bg-white p-6 mb-20`}
          >
            <div className="md:w-[50%] p-4">
              <h2 className="text-3xl font-semibold text-[#000000] mb-6 dark:text-white">{item.title}</h2>
              <p className="text-lg text-[#828282] mb-8 text-justify">
                {item.description}
              </p>
              <Button data={"Learn More"} />
            </div>
            <div className="md:w-[40%] p-4">
              <img src={item.image} alt={item.title} className="rounded-lg shadow-md h-[350px] w-full md:w-full object-cover" />
            </div>
          </div>
        );
      })}
    </div>
  );
};
