'use client';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = () => {


    return (
        <nav className={` flex items-center justify-between md:px-20 p-3 py-4 dark:bg-gray-800 dark:text-white bg-white text-gray-800 shadow-md`}>
            {/* Logo */}
            <div className="text-xl font-bold">CUinfo</div>

            {/* Menu */}
            <ul className="hidden md:flex space-x-6">
                <li className="cursor-pointer hover:text-blue-500">Hire Me</li>
                <li className="cursor-pointer hover:text-blue-500">Add More</li>
                <li className="cursor-pointer hover:text-blue-500">Einfo</li>
            </ul>

            {/* Dark Mode Toggle */}

            {/* Mobile Menu */}
            <div className="md:hidden">
                <button className="p-2 focus:outline-none">
                    <span className="block w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
                    <span className="block w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
                    <span className="block w-6 h-1 bg-gray-800 dark:bg-white"></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;