import React from 'react';


export const Cards = ({ title, Icon, description1 , description2 }: any) => {
  return (

            <div className="p-4 dark:bg-gray-900 dark:text-white">
            <div className="flex flex-col ">
            {Icon && <Icon size={25}  className=" mb-2"/>} 
              <div>
                <h3 className="text-[24px] leading-[36px] font-[400] mb-2">{title}</h3>
                <p className="text-[16px]  text-[#828282] font-[500] text-justify ">
                 {description1}
                </p>
                <p className="text-[16px]  text-[#828282] font-[500] text-justify  mt-2">
                  {description2}
                </p>
              </div>
            </div>
          </div>
 
        
 
  );
};
