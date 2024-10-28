import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTachometerAlt,
  faClipboardCheck,
  faGraduationCap,
  faWallet,
  faCalendarAlt,
  faBookOpen,
  faUser,
  faBars,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/logo/logo.png';
import DefaultProfile from '../assets/default profile.png';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle sidebar open/close
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const profileData = {
    name: "Game Play",
    email: "gameplayap1@gmail.com",
    profilePic: DefaultProfile
  };

  return (
    <div className="relative">
      {/* Hamburger Button for mobile view */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 right-4 z-20 text-gray-600 lg:hidden"
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="2x" />
      </button>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full bg-white shadow-lg p-4 z-10 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:w-64`}>
        {/* Logo for sidebar */}
        <div className="flex items-center justify-between mb-8">
          <img src={Logo} alt="Logo" className="rounded-full w-8 h-8 ml-1" />
          <h3 className="ml-2 text-xl font-semibold text-gray-800">ClassSync</h3>
          {/* Removed the close button here */}
        </div>

        {/* Navigation Links */}
        <nav>
          <ul>
            <li className="mb-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center px-4 ${isActive ? 'text-blue-500' : 'text-gray-600'}`
                }
              >
                <FontAwesomeIcon icon={faTachometerAlt} className="mr-2" />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li className="mb-4">
              <NavLink
                to="/attendance"
                className={({ isActive }) =>
                  `flex items-center px-4 ${isActive ? 'text-blue-500' : 'text-gray-600'}`
                }
              >
                <FontAwesomeIcon icon={faClipboardCheck} className="mr-2" />
                <span>Attendance Management</span>
              </NavLink>
            </li>
            <li className="mb-4">
              <NavLink
                to="/marks&academic"
                className={({ isActive }) =>
                  `flex items-center px-4 ${isActive ? 'text-blue-500' : 'text-gray-600'}`
                }
              >
                <FontAwesomeIcon icon={faGraduationCap} className="mr-2" />
                <span>Marks & Academic</span>
              </NavLink>
            </li>
            <li className="mb-4">
              <NavLink
                to="/fees"
                className={({ isActive }) =>
                  `flex items-center px-4 ${isActive ? 'text-blue-500' : 'text-gray-600'}`
                }
              >
                <FontAwesomeIcon icon={faWallet} className="mr-2" />
                <span>Fees Management</span>
              </NavLink>
            </li>
            <li className="mb-4">
              <NavLink
                to="/ScheduleDashboard"
                className={({ isActive }) =>
                  `flex items-center px-4 ${isActive ? 'text-blue-500' : 'text-gray-600'}`
                }
              >
                <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                <span>Schedules</span>
              </NavLink>
            </li>
            <li className="mb-4">
              <NavLink
                to="/register-courses"
                className={({ isActive }) =>
                  `flex items-center px-4 ${isActive ? 'text-blue-500' : 'text-gray-600'}`
                }
              >
                <FontAwesomeIcon icon={faBookOpen} className="mr-2" />
                <span>Course Registration</span>
              </NavLink>
            </li>
            <li className="mb-4">
              <NavLink
                to="/user-profile"
                className={({ isActive }) =>
                  `flex items-center px-4 ${isActive ? 'text-blue-500' : 'text-gray-600'}`
                }
              >
                <FontAwesomeIcon icon={faUser} className="mr-2" />
                <span>User Profile</span>
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Profile Footer Section (Static) */}
        <div className="absolute bottom-4 left-4 flex items-center">
          <div className="w-12 h-12 p-1 rounded-full bg-gray-200 flex items-center justify-center">
            <img
              src={profileData.profilePic}
              alt="Profile"
              className="rounded-full object-cover w-full h-full"
            />
          </div>
          <div className="ml-2 max-w-[200px]">
            <p className="font-bold">{profileData.name}</p>
            <p className="text-gray-600 text-sm">{profileData.email}</p>
          </div>
        </div>
      </div>

      {/* Overlay for mobile view */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black opacity-50 lg:hidden"
        />
      )}
    </div>
  );
};

export default Sidebar;
