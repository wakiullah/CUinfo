import { IoMdArrowDropright } from "react-icons/io";

const SingleDataInfo = ({ title, data, handleButtonClick }) => {
    return (
        < >
            <h1 className="md:text-4xl text-2xl font-bold mb-8 text-center">{title}</h1>
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
            </div>
        </>
    );
}

export default SingleDataInfo;