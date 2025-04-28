'use client';
import React, { useState, useEffect } from "react";
import { IoMdArrowDropright } from "react-icons/io";

export const universityData = [
    {
        category: "Embulance",
        items: [{ name: "Medical Center", phone: "+8801764565703", email: "Empty" }],
    },
    {
        category: "Proctors",
        items: [
            { name: "Dr. Tanvir Mohammad Hayder Arif", phone: "+8801819387122", email: "proctor@cu.ac.bd" },
            { name: "Dr. Md. Korban Ali", phone: "01716609315", email: "korban.cu@gmail.com" },
        ],
    },
    // Add more categories as needed...
];

const Main = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({ title: "", items: [] });
    const [selectedItem, setSelectedItem] = useState(null);
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Load dark mode preference from localStorage on initial render
    useEffect(() => {
        const storedMode = localStorage.getItem("theme");
        if (storedMode === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark");
        }
    }, []);

    // Save dark mode preference to localStorage whenever it changes
    useEffect(() => {
        if (isDarkMode) {
            localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
        } else {
            localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark");
        }
    }, [isDarkMode]);

    const handleButtonClick = (category, items) => {
        setModalContent({ title: category, items });
        setIsModalOpen(true);
        setSelectedItem(null); // Reset selected item when opening a new modal
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            alert(`Copied: ${text}`);
        });
    };

    const handleNameClick = (item) => {
        setSelectedItem(item); // Set the selected item to display its details
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div>
            {/* Dark Mode Toggle Button */}
            <div className="flex justify-end p-4">
                <button
                    onClick={toggleDarkMode}
                    className="bg-gray-300 dark:bg-gray-700 text-black dark:text-white px-4 py-2 rounded"
                >
                    {isDarkMode ? "Light Mode" : "Dark Mode"}
                </button>
            </div>

            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50"
                    onClick={closeModal} // Close modal when clicking outside
                >
                    <div
                        className="bg-white dark:bg-[#1e293b] text-black dark:text-white rounded-lg shadow-lg p-6 w-11/12 max-w-lg"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
                    >
                        <h2 className="text-2xl font-bold mb-4">{modalContent.title}</h2>
                        <ul className="space-y-4 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-800">
                            {modalContent.items.map((item, index) => (
                                <li key={index} className="border bg-gray-700 rounded-lg p-4 border-gray-500 transition-all duration-300 ease-in-out">
                                    <p
                                        className="font-semibold text-white cursor-pointer hover:underline flex items-center"
                                        onClick={() => handleNameClick(item)}
                                    >
                                        <IoMdArrowDropright className="mr-2" /> <span className="mt-[6px]">{item.name}</span>
                                    </p>
                                    {selectedItem === item && (
                                        <div className="mt-2">
                                            <p className="text-white">
                                                <span>Phone: </span>
                                                <span
                                                    className=" cursor-pointer hover:underline"
                                                    onClick={() => handleCopy(item.phone)}
                                                >
                                                    {item.phone}
                                                </span>
                                            </p>
                                            <p className="text-white">
                                                <span>Email: </span>
                                                <span
                                                    className=" cursor-pointer hover:underline"
                                                    onClick={() => handleCopy(item.email)}
                                                >
                                                    {item.email}
                                                </span>
                                            </p>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={closeModal}
                            className="mt-6 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
            <div className={`min-h-screen dark:bg-gray-900 bg-gray-100 flex flex-col items-center justify-center p-4 ${isModalOpen ? 'blur-sm' : ''}`}>
                <h1 className="text-4xl font-bold mb-8 text-center">University Information</h1>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                    {universityData.map((category) => (
                        <button
                            key={category.category}
                            onClick={() => handleButtonClick(category.category, category.items)}
                            className="bg-gray-700 hover:bg-gray-600 text-white text-left font-semibold py-3 px-3 rounded-lg shadow-lg transform hover:scale-105 transition-transform flex items-center justify-between"
                        >
                            <p className="mt-1">{category.category}</p>
                            <IoMdArrowDropright />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Main;