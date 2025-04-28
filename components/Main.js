'use client';
import React, { useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { universityData, othersInfo } from "../data/versitydata";
import SingleDataInfo from "./signletypeinfo";

const Main = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", items: [] });
  const [selectedItem, setSelectedItem] = useState(null);

  const handleButtonClick = (category, items) => {
    setModalContent({ title: category, items });
    setIsModalOpen(true);
    setSelectedItem(null); // Reset selected item when opening a new modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCopy = (text) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        alert(`Copied: ${text}`);
      }).catch(err => {
        console.error('Failed to copy: ', err);
      });
    } else {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand('copy');
        alert(`Copied: ${text}`);
      } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
      }
      document.body.removeChild(textarea);
    }
  };

  const handleNameClick = (item) => {
    setSelectedItem(item); // Set the selected item to display its details
  };

  return (
    <div>
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal} // Close modal when clicking outside
        >
          <div
            className="bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg shadow-lg p-6 w-11/12 max-w-lg"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <h2 className="text-2xl font-bold mb-4">{modalContent.title}</h2>
            <ul className="space-y-4 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-800">
              {modalContent.items.map((item, index) => (
                <li key={index} className="border dark:bg-gray-700 bg-gray-50 rounded-lg p-4 border-gray-500 transition-all duration-300 ease-in-out">
                  <p
                    className="font-semibold dark:text-white text-gray-800 cursor-pointer hover:underline flex items-center"
                    onClick={() => handleNameClick(item)}
                  >
                    <IoMdArrowDropright className="mr-2" /> <span className="mt-[6px]">{item.name}</span>
                  </p>
                  {selectedItem === item && (
                    <div className="mt-2">
                      <p className="dark:text-white text-gray-800">
                        <span>Phone: </span>
                        <span
                          className=" cursor-pointer hover:underline dark:text-gray-800 text-amber-800"
                          onClick={() => handleCopy(item.phone)}
                        >
                          {item.phone}
                        </span>
                      </p>
                      <p className="dark:text-white text-gray-800">
                        <span>Email: </span>
                        <span
                          className=" cursor-pointer hover:underline dark:text-gray-800 text-amber-800"
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
              className="mt-6 cursor-pointer bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <div className={`min-h-screen dark:bg-gray-900 bg-white text-gray-900 dark:text-gray-100 flex flex-col items-center justify-center p-4 ${isModalOpen ? 'blur-sm' : ''}`}>
        <SingleDataInfo title="CU Informations" data={universityData} handleButtonClick={handleButtonClick} />
        <div className="mt-10"></div>
        <SingleDataInfo title="Others Information" data={othersInfo} handleButtonClick={handleButtonClick} />

      </div>
    </div>
  );
};

export default Main;