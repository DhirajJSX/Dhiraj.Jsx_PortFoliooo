import React from 'react';
import './Footer.scss'
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 py-12">
            <div className="container mx-auto flex flex-wrap justify-between">
                <div className="w-full lg:w-1/2 xl:w-1/3 mb-8 lg:mb-0">
                    <h2 className="text-xl font-semibold mb-4">About Us</h2>
                    <p>We are a team of passionate developers dedicated to creating innovative solutions.</p>
                </div>
                <div className="w-full lg:w-1/2 xl:w-1/3 mb-8 lg:mb-0">
                    <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
                    <p>Email: example@example.com</p>
                    <p>Phone: +1234567890</p>
                </div>
                <div className="w-full lg:w-1/2 xl:w-1/3">
                    <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-300 hover:text-gray-400 transition-colors duration-300">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="text-gray-300 hover:text-gray-400 transition-colors duration-300">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="text-gray-300 hover:text-gray-400 transition-colors duration-300">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="text-center mt-8">
                <p className="text-sm">&copy; 2024 Your Website. All rights reserved.</p>
                <p className="mt-2">Thanks for visiting!</p>
            </div>
        </footer>
    );
}

export default Footer;
