import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-100 dark:text-white dark:bg-gray-900 border-t border-gray-600text-gray-800 py-6">
            <div className="container mx-auto px-4 text-center">
                <p className="text-sm mb-4">
                    Designed and Developed by <span className="font-semibold">Md Wakiullah</span>
                </p>
                <div className="flex justify-center space-x-4">
                    <a
                        href="https://facebook.com/mwakiullah"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-500"
                    >
                        Facebook
                    </a>
                    <a
                        href="https://www.linkedin.com/in/mdwakiullah/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400"
                    >
                        Linkedin
                    </a>
                    <a
                        href="https://github.com/wakiullah"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600"
                    >
                        Github
                    </a>
                    <a
                        href="https://wa.me/+8801308163654"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600"
                    >
                        Whatsapp
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;