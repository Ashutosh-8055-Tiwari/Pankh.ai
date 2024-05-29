import React from 'react';
import { MdOutlineFacebook } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import Link from 'next/link';

export const Footer = () => {
  return (
    <div className=" dark:bg-zinc-900 p-12 mt-36">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:space-x-8">
        <div className="flex flex-col w-[50%] justify-between mb-8 md:mb-0">
          <h2 className="text-[24px] leading-[36px] font-[400] text-[#000000] dark:text-zinc-100">Site name</h2>
          <div className="flex space-x-4 mt-4">
            <Link  href={"#"} aria-label="Facebook">
              <MdOutlineFacebook  className='text-[#828282] w-7 h-7'/>
            </Link>
            <Link href={"#"} aria-label="LinkedIn">
             <FaLinkedin className='text-[#828282] w-7 h-7 '/>
            </Link>
            <Link href={"#"} aria-label="YouTube">
              <FaYoutube className='text-[#828282] w-7 h-7 '/>
            </Link>
            <Link href={"#"} aria-label="Instagram">
             <FaInstagram className='text-[#828282] w-7 h-7 '/>
            </Link>
          </div>
        </div>
        <div className="flex-1 mb-8 md:mb-0">
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            Topic
          </h3>
          <ul className="mt-2 space-y-1">
            <li><Link href={"#"} className="text-zinc-600 dark:text-zinc-400">Page</Link></li>
            <li><Link href={"#"} className="text-zinc-600 dark:text-zinc-400">Page</Link></li>
            <li><Link href={"#"} className="text-zinc-600 dark:text-zinc-400">Page</Link></li>
            <li><Link href={"#"} className="text-zinc-600 dark:text-zinc-400">Page</Link></li>
          </ul>
        </div>
        <div className="flex-1 mb-8 md:mb-0">
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Topic</h3>
          <ul className="mt-2 space-y-1">
            <li><Link href={"#"} className="text-zinc-600 dark:text-zinc-400">Page</Link></li>
            <li><Link href={"#"} className="text-zinc-600 dark:text-zinc-400">Page</Link></li>
            <li><Link href={"#"} className="text-zinc-600 dark:text-zinc-400">Page</Link></li>
            <li><Link href={"#"} className="text-zinc-600 dark:text-zinc-400">Page</Link></li>
          </ul>
        </div>
        <div className="flex-1 mb-8 md:mb-0">
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Topic</h3>
          <ul className="mt-2 space-y-1">
            <li><Link href={"#"} className="text-zinc-600 dark:text-zinc-400">Page</Link></li>
            <li><Link href={"#"} className="text-zinc-600 dark:text-zinc-400">Page</Link></li>
            <li><Link href={"#"} className="text-zinc-600 dark:text-zinc-400">Page</Link></li>
            <li><Link href={"#"} className="text-zinc-600 dark:text-zinc-400">Page</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};
