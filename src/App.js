import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/DashboardStats';
import StudentDashboard from './components/StudentCard';  
import NoticePage from './pages/NoticePage';
import ExamPage from './pages/ExamPage';
import AttendancePage from './components/AttendancePage';
import SummaryPage from './components/SummaryPage';
import ForgetPassword from '../src/auth/forget password/forgetpass'
import Login from '../src/auth/login/login'
   const App = () => (
    <Router>
        <div className="flex">
            <Sidebar />
            <div className="flex-grow p-4">  
                <Routes>
                    <Route path="/" element={<Dashboard />} Component={Login}/>
                    <Route path="/students" element={<StudentDashboard />} />
                    <Route path="/notices" element={<NoticePage />} />
                    <Route path="/exam" element={<ExamPage />} />
                    <Route path="/attendance" element={<AttendancePage />} />
                    <Route path="/summary" element={<SummaryPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/forgetpassword" element={<ForgetPassword />} />

                </Routes>
            </div>
        </div>
    </Router>
);

export default App;
