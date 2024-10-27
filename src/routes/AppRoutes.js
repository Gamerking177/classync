import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from '../route/protextiveroute'; 
import { useAuth } from '../context/authContext/authContext'; // Adjusted path for useAuth
import Dashboard from '../components/DashboardStats';
import AcademicPerformance from '../components/marks&academic';
import AttendanceManagement from '../attendancemanagement/AttendanceManagement';
import ExamAssignmentSchedule from '../components/ExamAssignmentSchedule';
import ClassSchedule from '../components/ClassSchedule';
import FeesManagement from '../pages/FeesManagement';
import CourseRegistration from '../pages/CourseRegistration';
import UserProfile from '../pages/UserProfile';
import ReplyPage from '../Replypage';
import Login from '../auth/login/login';
import AttendanceRecord from '../attendancemanagement/AttendanceRecord';
import AttendanceOverview from '../attendancemanagement/AttendanceOverview';
import AttendanceCalendar from '../attendancemanagement/AttendanceCalendar';

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
      <Route path="/" element={<AttendanceManagement />} />
      <Route path="/attendance-record" element={<AttendanceRecord />} />
      <Route path="/attendance-calendar" element={<AttendanceCalendar />} />
      <Route path="/attendance-overview" element={<AttendanceOverview />} />
    </Routes>
  );
};

export default AppRoutes;
