import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/DashboardStats';
import StudentDashboard from './components/StudentCard';
import NoticePage from './pages/NoticePage';
import ExamPage from './pages/ExamPage';
import SummaryPage from './components/SummaryPage';
import AcademicPerformance from './components/marks&academic';
import AttendanceManagement from './pages/AttendanceManagement';
import AcademicPerformance from './components/marks&academic'
import AttendanceManagement from './pages/AttendanceManagement'
 import ExamAssignmentSchedule from './components/ExamAssignmentSchedule';
import ClassSchedule from './components/ClassSchedule';
 import FeesManagement from './pages/FeesManagement';
import CourseRegistration from './pages/CourseRegistration';
import UserProfile from './pages/UserProfile';
import ReplyPage from './Replypage';
   const App = () => (
     <Router>
        <div className="flex">
            <Sidebar />
            <div className="flex-grow p-4">  
                <Routes>
                    <Route path="/" element={<Dashboard />}/>
                    <Route path="/students" element={<StudentDashboard />} />
                    <Route path="/notices" element={<NoticePage />} />
                    <Route path="/exam" element={<ExamPage />} />
                    <Route path="/summary" element={<SummaryPage />} />
                    <Route path="/marks&academic" element={< AcademicPerformance/>} />
                    <Route path="/attendance" element={< AttendanceManagement/>} />
                    <Route path="/Schedules" element={< ExamAssignmentSchedule/>} />
                    <Route path="/ClassSchedule" element={<ClassSchedule />} />
                    <Route path="/ExamAssignmentSchedule" element={<ExamAssignmentSchedule />} />
                    <Route path="/fees" element={<FeesManagement />} />
                    <Route path="/register-courses" element={<CourseRegistration />} />
                    <Route path="/user-profile" element={<UserProfile />} />
                    <Route path="/reply" element={<ReplyPage />} />
                 </Routes>
             </div>
        </div>
    </Router>
);

export default App;
