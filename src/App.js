import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/DashboardStats';
 
  
import AcademicPerformance from './components/marks&academic';
import AttendanceManagement from './pages/AttendanceManagement'
import ExamAssignmentSchedule from './components/ExamAssignmentSchedule';
import ClassSchedule from './components/ClassSchedule';
import FeesManagement from './pages/FeesManagement';
import CourseRegistration from './pages/CourseRegistration';
import UserProfile from './pages/UserProfile';
import ReplyPage from './Replypage';
import Login from '../src/auth/login/login';
import ProtectedRoute from '../src/route/protextiveroute';
import { useAuth } from './context/authContext/authContext'; // Import useAuth to check auth state

const App = () => {
  const { userLoggedIn } = useAuth(); // Get auth state from context

  return (
    <Router>
      <div className="flex">
        {userLoggedIn && <Sidebar />} {/* Only show Sidebar if authenticated */}
        <div className="flex-grow p-4">
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
              path="/schedules" 
              element={
                <ProtectedRoute isAuthenticated={userLoggedIn}>
                  <ExamAssignmentSchedule />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/class-schedule" 
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
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
