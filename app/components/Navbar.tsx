'use client';
import React from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { MdWbSunny } from 'react-icons/md';

export const Navbar = () => {
    const { theme, setTheme } = useTheme();

    const handleThemeToggle = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div className="w-full relative mt-2 dark:bg-gray-900 dark:text-white bg-white text-black">
            <nav className="flex flex-col md:flex-row items-center justify-between mb-4 md:mb-0 px-4 sm:px-6 lg:px-8">
                <Link href="/" className="mb-4 md:mb-0 text-2xl sm:text-3xl md:text-[30px] font-medium leading-tight md:leading-[30px]">
                    Pankh.AI
                </Link>
                <div className="flex flex-wrap gap-4 sm:gap-6 justify-center md:justify-start">
                    <Link href="/pages/services" className="nav-item text-base sm:text-lg md:text-[20px] font-medium leading-tight md:leading-[30px] flex justify-center items-center rounded-sm hover:cursor-pointer">
                        Services
                    </Link>
                    <Link href="/products" className="nav-item text-base sm:text-lg md:text-[20px] font-medium leading-tight md:leading-[30px] flex justify-center items-center rounded-sm hover:cursor-pointer">
                        Products
                    </Link>
                    <Link href="/about-us" className="nav-item text-base sm:text-lg md:text-[20px] font-medium leading-tight md:leading-[30px] flex justify-center items-center rounded-sm hover:cursor-pointer">
                        About Us
                    </Link>
                    <Link href="/contact-us" className="nav-item w-[6rem] p-2 text-base sm:text-lg md:text-[20px] font-medium leading-tight md:leading-[30px] bg-black text-white flex justify-center items-center hover:cursor-pointer rounded-lg dark:bg-white dark:text-black">
                        Sign Up
                    </Link>
                </div>
                <button onClick={handleThemeToggle} className="text-xl sm:text-2xl p-2">
                    {theme === 'light' ? <BsFillMoonStarsFill /> : <MdWbSunny />}
                </button>
            </nav>
        </div>
    );
};
