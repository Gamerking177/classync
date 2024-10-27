// src/AppRoutes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from '../route/protextiveroute'; 
import { useAuth } from '../context/authContext/authContext';
import Dashboard from '../components/DashboardStats';
import AcademicPerformance from '../components/marks&academic';
import AttendanceManagement from '../pages/AttendanceManagement';
import ExamAssignmentSchedule from '../components/ExamAssignmentSchedule';
import ClassSchedule from '../components/ClassSchedule';
import FeesManagement from '../pages/FeesManagement';
import CourseRegistration from '../pages/CourseRegistration';
import UserProfile from '../pages/UserProfile';
import ReplyPage from '../Replypage';
import Login from '../auth/login/login';
import LibraryPage from '../library/LibraryPage'; // Import the LibraryPage component

const AppRoutes = () => {
  const { userLoggedIn } = useAuth();

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      
      {/* Protected Routes */}
      <Route 
        path="/" 
        element={
          <ProtectedRoute isAuthenticated={userLoggedIn}>
            <Dashboard />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/marks&academic" 
        element={
          <ProtectedRoute isAuthenticated={userLoggedIn}>
            <AcademicPerformance />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/attendance" 
        element={
          <ProtectedRoute isAuthenticated={userLoggedIn}>
            <AttendanceManagement />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/ExamAssignmentSchedule" 
        element={
          <ProtectedRoute isAuthenticated={userLoggedIn}>
            <ExamAssignmentSchedule />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/classSchedule" 
        element={
          <ProtectedRoute isAuthenticated={userLoggedIn}>
            <ClassSchedule />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/fees" 
        element={
          <ProtectedRoute isAuthenticated={userLoggedIn}>
            <FeesManagement />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/register-courses" 
        element={
          <ProtectedRoute isAuthenticated={userLoggedIn}>
            <CourseRegistration />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/user-profile" 
        element={
          <ProtectedRoute isAuthenticated={userLoggedIn}>
            <UserProfile />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/reply" 
        element={
          <ProtectedRoute isAuthenticated={userLoggedIn}>
            <ReplyPage />
          </ProtectedRoute>
        } 
      />
      {/* Library Page Route */}
      <Route 
        path="/library" 
        element={
          <ProtectedRoute isAuthenticated={userLoggedIn}>
            <LibraryPage />
          </ProtectedRoute>
        } 
      />
    </Routes>
  );
};

export default AppRoutes;
