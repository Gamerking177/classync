// Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo/logo.png'

const Sidebar = () => (
    <div className="bg-white h-screen w-64 p-4 shadow-md">
        <div className="flex items-center mb-8">
            <img
                src={Logo}
                alt="Logo"
                className="rounded-full w-12 h-12 ml-2"
            />
            <h3 className="ml-3 text-2xl font-semibold text-gray-800">ClassSync</h3>
        </div>


        <nav>
            <ul>
                <li className="mb-4">
                    <Link to="/" className="flex items-center text-blue-500">
                        <i className="fas fa-tachometer-alt mr-2"></i>
                        Dashboard
                    </Link>
                </li>
                <li className="mb-4">
                    <Link to="/attendance" className="flex items-center text-gray-600">
                        <i className="fas fa-user-graduate mr-2"></i>
                        Attendance
                    </Link>
                </li>
                <li className="mb-4">
                    <Link to="/marks&academic" className="flex items-center text-gray-600">
                        <i className="fas fa-hand-paper mr-2"></i>
                        Marks & Academic
                    </Link>
                </li>



                <li className="mb-4">
                    <Link to="/notices" className="flex items-center text-gray-600">
                        <i className="fas fa-bullhorn mr-2"></i>
                        Notices
                    </Link>
                </li>
                <li className="mb-4">
                    <Link to="/exam" className="flex items-center text-gray-600">
                        <i className="fas fa-pencil-alt mr-2"></i>
                        Exam
                    </Link>
                </li>

                <li className="mb-4">
                    <Link to="/attendance" className="flex items-center text-gray-600">
                        <i className="fas fa-hand-paper mr-2"></i>
                        Attendance
                    </Link>
                </li>

                <li className="mb-4">
                    <Link to="/summary" className="flex items-center text-gray-600">
                        <i className="fas fa-chart-line mr-2"></i>
                        Summary
                    </Link>
                </li>

            </ul>
        </nav>
        <div className="absolute bottom-4 left-4 flex items-center">
            <div className="bg-green-500 p-2 rounded-full">
                <span className="text-white text-xl">G</span>
            </div>
            <div className="ml-2">
                <p className="font-bold">Game Play</p>
                <p className="text-gray-600 text-sm">gameplayapp007@gmail.com</p>
            </div>
        </div>
    </div>
);

export default Sidebar;
