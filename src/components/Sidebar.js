import React from 'react';
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
import DefaultProfile from '../assets/default profile.png'; // Ensure the correct path to DefaultProfile image

const Sidebar = () => {
  // Static profile data
  const profileData = {
    name: "Game Play",
    email: "gameplayap1@gmail.com",
    profilePic: DefaultProfile
  };

  return (
    <div>
      {/* Logo and Toggle Button */}
      <div className="flex items-center justify-between mb-8 p-4">
        <img
          src={Logo}
          alt="Logo"
          className="rounded-full w-8 h-8 ml-1"
        />
        <h3 className="ml-2 text-xl font-semibold text-gray-800">
          ClassSync
        </h3>
        <button className="transition-transform duration-300">
          <FontAwesomeIcon icon={faBars} className="text-gray-600" />
        </button>
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
              <span className="opacity-100">
                Dashboard
              </span>
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
              <span className="opacity-100">
                Attendance Management
              </span>
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
              <span className="opacity-100">
                Marks & Academic
              </span>
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
              <span className="opacity-100">
                Fees Management
              </span>
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
              <span className="opacity-100">
                Schedules
              </span>
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
              <span className="opacity-100">
                Course Registration
              </span>
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
              <span className="opacity-100">
                User Profile
              </span>
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
        <div className="ml-2 max-w-[200px]"> {/* Static profile details */}
          <p className="font-bold">{profileData.name}</p>
          <p className="text-gray-600 text-sm">{profileData.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
