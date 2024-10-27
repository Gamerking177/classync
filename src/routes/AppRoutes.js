import React, { useState } from 'react'; // Import useState
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from '../route/protextiveroute'; 
import { useAuth } from '../context/authContext/authContext';
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
import LibraryPage from '../library/LibraryPage';
import ScheduleDashboard from '../components/ScheduleDashboard';

const AppRoutes = () => {
  const { userLoggedIn } = useAuth();
  
  // Move useState inside the component
  const [selectedTab, setSelectedTab] = useState(null);

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
        path="/ClassSchedule" 
        element={
          <ProtectedRoute isAuthenticated={userLoggedIn}>
            <ClassSchedule />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/ScheduleDashboard" 
        element={
          <ProtectedRoute isAuthenticated={userLoggedIn}>
            <ScheduleDashboard selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
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
      <Route 
        path="/library" 
        element={
          <ProtectedRoute isAuthenticated={userLoggedIn}>
            <LibraryPage />
          </ProtectedRoute>
        } 
      />

      {/* Additional Attendance Routes */}
      <Route path="/attendance-record" element={<AttendanceRecord />} />
      <Route path="/attendance-calendar" element={<AttendanceCalendar />} />
      <Route path="/attendance-overview" element={<AttendanceOverview />} />
    </Routes>
  );
};

export default AppRoutes;
