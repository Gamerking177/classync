import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../src/firebase/firebase'; // import your Firebase auth instance here
import Sidebar from './components/Sidebar';
import Dashboard from './components/DashboardStats';
import StudentDashboard from './components/StudentCard';
import NoticePage from './pages/NoticePage';
import ExamPage from './pages/ExamPage';
import SummaryPage from './components/SummaryPage';
import AcademicPerformance from './components/marks&academic';
import AttendanceManagement from './pages/AttendanceManagement';
import Login from '../src/auth/login/login'; // Add a login component for unauthenticated users

const App = () => {
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <p>Loading...</p>; // Optionally add a loading spinner here
    }

    return (
        <Router>
            <div className="flex">
                {user && <Sidebar />} {/* Show Sidebar only if user is logged in */}
                <div className="flex-grow p-4">
                    <Routes>
                        {user ? (
                            <>
                                <Route path="/" element={<Dashboard />} />
                                <Route path="/students" element={<StudentDashboard />} />
                                <Route path="/notices" element={<NoticePage />} />
                                <Route path="/exam" element={<ExamPage />} />
                                <Route path="/summary" element={<SummaryPage />} />
                                <Route path="/marks&academic" element={<AcademicPerformance />} />
                                <Route path="/attendance" element={<AttendanceManagement />} />
                            </>
                        ) : (
                            <>
                                <Route path="/login" element={<Login />} />
                                <Route path="*" element={<Navigate to="/login" />} />
                            </>
                        )}
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
