

import React from "react";
import Link from "next/link";


export const Navbar = () => {
  return (
    <div className="w-full relative mt-2 ">
      <nav className="flex flex-col md:flex-row items-center justify-between mb-2 md:mb-0">
        <div className="mb-4 md:mb-0 text-[30px] font-medium leading-[30px]">
        Pankh.AI
        </div>
        <div className="flex flex-wrap gap-6 justify-center md:justify-start">
          <Link href={"/pages/services"} className="nav-item text-[20px] font-medium leading-[30px]  flex justify-center items-center rounded-sm hover:cursor-pointer">Services</Link>
          <Link href="/pages/products" className="nav-item text-[20px] font-medium leading-[30px]  flex justify-center items-center rounded-sm hover:cursor-pointer">Page</Link>
          <Link href={"/pages/about-us"} className="nav-item  text-[20px] font-medium leading-[30px] flex justify-center items-center rounded-sm hover:cursor-pointer">Page</Link>
          <Link href={"/pages/contact-us"} className="nav-item w-[6rem] p-1 text-[20px] font-medium leading-[30px] bg-black text-white flex justify-center items-center hover:cursor-pointer rounded-lg">Sign Up</Link>
          
          
        </div>
      </nav>
 
    </div>
  );
};
