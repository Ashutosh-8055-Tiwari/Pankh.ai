import React from 'react';

export const Cards = ({ title, Icon, description1, description2 }: any) => {
  return (
    <div className="p-4 dark:bg-gray-900 dark:text-white">
      <div className="flex flex-col">
        {Icon && <Icon size={25} className="mb-2" />}
        <div>
          <h3 className="text-lg md:text-xl lg:text-2xl leading-tight font-semibold mb-2">{title}</h3>
          <p className="text-sm md:text-base lg:text-lg text-[#828282] font-medium text-justify mb-2">
            {description1}
          </p>
          <p className="text-sm md:text-base lg:text-lg text-[#828282] font-medium text-justify">
            {description2}
          </p>
        </div>
      </div>
    </div>
  );
};
