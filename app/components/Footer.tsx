import React from 'react';
import { MdOutlineFacebook } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram, FaYoutube } from "react-icons/fa6";
import Link from 'next/link';

export const Footer = () => {
  return (
    <div className="p-6 sm:p-8 lg:p-12 mt-14 sm:mt-32 lg:mt-36 dark:bg-gray-900 dark:text-white bg-white text-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:space-x-8">
        <div className="flex flex-col md:w-[50%] justify-between mb-8 md:mb-0">
          <h2 className="text-lg sm:text-xl lg:text-2xl leading-tight sm:leading-snug lg:leading-normal font-semibold text-black dark:text-white">
            Site name
          </h2>
          <div className="flex space-x-4 mt-4 dark:text-white">
            <Link href={"#"} aria-label="Facebook">
              <MdOutlineFacebook className="text-gray-600 dark:text-gray-400 w-6 h-6 sm:w-7 sm:h-7" />
            </Link>
            <Link href={"#"} aria-label="LinkedIn">
              <FaLinkedin className="text-gray-600 dark:text-gray-400 w-6 h-6 sm:w-7 sm:h-7" />
            </Link>
            <Link href={"#"} aria-label="YouTube">
              <FaYoutube className="text-gray-600 dark:text-gray-400 w-6 h-6 sm:w-7 sm:h-7" />
            </Link>
            <Link href={"#"} aria-label="Instagram">
              <FaInstagram className="text-gray-600 dark:text-gray-400 w-6 h-6 sm:w-7 sm:h-7" />
            </Link>
          </div>
        </div>
        <div className="flex-1 mb-8 md:mb-0">
          <h3 className="text-sm sm:text-base font-semibold text-black dark:text-white">
            Topic
          </h3>
          <ul className="mt-2 space-y-1 sm:space-y-2">
            <li><Link href={"#"} className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">Page</Link></li>
            <li><Link href={"#"} className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">Page</Link></li>
            <li><Link href={"#"} className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">Page</Link></li>
            <li><Link href={"#"} className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">Page</Link></li>
          </ul>
        </div>
        <div className="flex-1 mb-8 md:mb-0">
          <h3 className="text-sm sm:text-base font-semibold text-black dark:text-white">
            Topic
          </h3>
          <ul className="mt-2 space-y-1 sm:space-y-2">
            <li><Link href={"#"} className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">Page</Link></li>
            <li><Link href={"#"} className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">Page</Link></li>
            <li><Link href={"#"} className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">Page</Link></li>
            <li><Link href={"#"} className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">Page</Link></li>
          </ul>
        </div>
        <div className="flex-1 mb-8 md:mb-0">
          <h3 className="text-sm sm:text-base font-semibold text-black dark:text-white">
            Topic
          </h3>
          <ul className="mt-2 space-y-1 sm:space-y-2">
            <li><Link href={"#"} className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">Page</Link></li>
            <li><Link href={"#"} className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">Page</Link></li>
            <li><Link href={"#"} className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">Page</Link></li>
            <li><Link href={"#"} className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">Page</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};
