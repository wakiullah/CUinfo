'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa'; 

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); 

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); 
    };

    
    return (
        <nav className={`sticky top-0 flex items-center justify-between md:px-20 p-3 py-4 dark:bg-gray-800 dark:text-white bg-gray-100 text-gray-800`}>
            <div className="text-xl font-bold">
                <Link href="/">CUinfo</Link>
            </div>

            <ul className="hidden md:flex space-x-6 font-semibold">
                <li className="cursor-pointer hover:text-blue-500">
                    <Link href="/">Home</Link>
                </li>
                <li className="cursor-pointer hover:text-blue-500">
                    <Link href="/inform">Inform Missing</Link>
                </li>
                <li className="cursor-pointer hover:text-blue-500">
                    <Link href="/hireme">Hire Me</Link>
                </li>
            </ul>

            <div className="md:hidden">
                <button
                    className="p-2 focus:outline-none"
                    onClick={toggleMenu} 
                >
                    <span className="block w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
                    <span className="block w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
                    <span className="block w-6 h-1 bg-gray-800 dark:bg-white"></span>
                </button>
            </div>

            <div  onClick={toggleMenu}
                className={`fixed inset-0 bg-gray-400 bg-opacity-50 z-50 transition-opacity duration-300 ease-in-out ${isMenuOpen ? ' opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            >
                <div
                    className={`fixed top-0 left-0 w-64 h-full bg-gray-200 dark:bg-gray-800 shadow-lg p-4 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    <div className='text-right flex justify-end mt-3'>
                        <button
                            className="text-red-600 hover:text-red-900 dark:text-white mb-4 flex items-right text-right"
                            onClick={toggleMenu} 
                        >
                            <FaTimes className="mr-2" /> Close
                        </button>
                    </div>
                    <ul className="space-y-4 text-lg font-medium">
                        <li>
                            <Link onClick={() => setIsMenuOpen(false)} href="/" className=" cursor-pointer hover:text-blue-500">
                                Home</Link>
                        </li>

                        <Link onClick={() => setIsMenuOpen(false)} href="/hireme" className="cursor-pointer hover:text-blue-500 mt-3 block">Hire Me</Link>

                        <Link onClick={() => setIsMenuOpen(false)} href="/inform" className="cursor-pointer hover:text-blue-500 ">Inform Missing</Link>
                    </ul>
                </div>
            </div>
        </nav >
    );
};

export default Navbar;
