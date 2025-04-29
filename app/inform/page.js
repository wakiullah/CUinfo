'use client';
import { useForm, ValidationError } from '@formspree/react';

export default function InformPage() {

    const [state, handleSubmit] = useForm("xrbqegbk");
    if (state.succeeded) {
        return (
            <div className="flex flex-col items-center justify-center text-center p-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-green-500 mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4m0 0a9 9 0 11-6.364-2.636A9 9 0 0112 21a9 9 0 01-9-9"
                    />
                </svg>
                <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                    Thanks for your Information!
                </p>
            </div>
        );
    }

    return (
        <div className="min-h-screen -mt-32 md:pt-0 flex items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4">
            <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
                <h1 className="text-2xl font-bold mb-6 text-center">Inform Missing</h1>
               
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    <label htmlFor="message " className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300 mt-5">
                        Your Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                    <button type="submit" className="w-full dark:bg-gray-200 bg-gray-900 text-white dark:text-gray-900 pt-3 font-semibold py-2 px-4 rounded-lg transition-all duration-300 cursor-pointer" disabled={state.submitting}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}