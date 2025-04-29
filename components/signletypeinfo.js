import { IoMdArrowDropright } from "react-icons/io";
import { CiSquareInfo } from "react-icons/ci";

const SingleDataInfo = ({ title, data, handleButtonClick }) => {

    return (
        < >
            <h1 className="md:text-4xl text-2xl font-bold mb-8 text-center flex">{title}<CiSquareInfo className="ml-3 mt-1 text-2xl " /> </h1>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                {data.map((category) => (
                    <button
                        key={category.category}
                        onClick={() => handleButtonClick(category.category, category.items)}
                        className="dark:bg-gray-700 dark:hover:bg-gray-600 bg-gray-100 hover:bg-gray-200 dark:text-white text-gray-800 text-left font-semibold py-3 px-3 rounded-lg transform hover:scale-105 transition-transform flex items-center justify-between"
                    >
                        <p className="mt-1">{category.category}</p>
                        <IoMdArrowDropright />
                    </button>
                ))}
                <a href="https://drive.google.com/file/d/1B70_rlJ-O-TVv5CfuYb-ihdf1PlgnGiJ/view?usp=sharing" target="_blank" rel="noopener noreferrer"

                    className="dark:bg-gray-700 dark:hover:bg-gray-600 bg-gray-100 hover:bg-gray-200 dark:text-white text-gray-800 text-left font-semibold py-3 px-3 rounded-lg transform hover:scale-105 transition-transform flex items-center justify-between"
                >
                    <p className="mt-1">Shuttle Schedule </p>
                    <IoMdArrowDropright />
                </a>
            </div>
        </>
    );
}

export default SingleDataInfo;
