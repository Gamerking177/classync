import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faClipboardCheck, faGraduationCap, faWallet, faCalendarAlt, faBookOpen, faUser } from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/logo/logo.png';

const Sidebar = () => (
    <div className="bg-white h-screen w-64 p-4 shadow-md relative">
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
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => 
                            `flex items-center ${isActive ? 'text-blue-500' : 'text-gray-600'}`
                        }
                    >
                        <FontAwesomeIcon icon={faTachometerAlt} className="mr-2" />
                        Dashboard
                    </NavLink>
                </li>
                <li className="mb-4">
                    <NavLink 
                        to="/attendance" 
                        className={({ isActive }) => 
                            `flex items-center ${isActive ? 'text-blue-500' : 'text-gray-600'}`
                        }
                    >
                        <FontAwesomeIcon icon={faClipboardCheck} className="mr-2" />
                        Attendance Management
                    </NavLink>
                </li>
                <li className="mb-4">
                    <NavLink 
                        to="/marks&academic" 
                        className={({ isActive }) => 
                            `flex items-center ${isActive ? 'text-blue-500' : 'text-gray-600'}`
                        }
                    >
                        <FontAwesomeIcon icon={faGraduationCap} className="mr-2" />
                        Marks & Academic
                    </NavLink>
                </li>
                <li className="mb-4">
                    <NavLink 
                        to="/fees" 
                        className={({ isActive }) => 
                            `flex items-center ${isActive ? 'text-blue-500' : 'text-gray-600'}`
                        }
                    >
                        <FontAwesomeIcon icon={faWallet} className="mr-2" />
                        Fees Management
                    </NavLink>
                </li>



                <li className="mb-4">
                    <NavLink 
                        to="/ScheduleDashboard" 
                        className={({ isActive }) => 
                            `flex items-center ${isActive ? 'text-blue-500' : 'text-gray-600'}`
                        }
                    >
                        <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                        Schedules
                    </NavLink>
                </li>



                <li className="mb-4">
                    <NavLink 
                        to="/register-courses" 
                        className={({ isActive }) => 
                            `flex items-center ${isActive ? 'text-blue-500' : 'text-gray-600'}`
                        }
                    >
                        <FontAwesomeIcon icon={faBookOpen} className="mr-2" />
                        Course Registration
                    </NavLink>
                </li>
                <li className="mb-4">
                    <NavLink 
                        to="/user-profile" 
                        className={({ isActive }) => 
                            `flex items-center ${isActive ? 'text-blue-500' : 'text-gray-600'}`
                        }
                    >
                        <FontAwesomeIcon icon={faUser} className="mr-2" />
                        User Profile
                    </NavLink>
                </li>
            </ul>
        </nav>

        {/* Profile Footer Section */}
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
