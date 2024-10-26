 import React from 'react';
 import StudentDashboard from './StudentCard'

const Dashboard = () => (
   <>
   <StudentDashboard/>
    {/* <div className="flex-1 p-6 bg-gray-100">
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <div className="flex items-center">
                <input type="month" className="border p-2 rounded mr-2" defaultValue="2024-05" />
                <select className="border p-2 rounded">
                    <option>5th</option>
                </select>
            </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-100 p-4 rounded shadow">
                <div className="flex items-center">
                    <i className="fas fa-graduation-cap text-blue-500 text-2xl mr-2"></i>
                    <div>
                        <p className="font-bold">Total Student</p>
                        <p className="text-2xl">10</p>
                    </div>
                </div>
            </div>
            <div className="bg-blue-100 p-4 rounded shadow">
                <div className="flex items-center">
                    <i className="fas fa-chart-line text-blue-500 text-2xl mr-2"></i>
                    <div>
                        <p className="font-bold">Total Present</p>
                        <p className="text-2xl">83.3%</p>
                    </div>
                </div>
            </div>
            <div className="bg-blue-100 p-4 rounded shadow">
                <div className="flex items-center">
                    <i className="fas fa-chart-line text-blue-500 text-2xl mr-2"></i>
                    <div>
                        <p className="font-bold">Total Absent</p>
                        <p className="text-2xl">16.7%</p>
                    </div> 
                </div>  
            </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded shadow">
                <h2 className="font-bold mb-4">Attendance</h2>
                <img src="https://placehold.co/400x200?text=Bar+Chart" alt="Bar chart showing attendance data" />
            </div>
            <div className="bg-white p-4 rounded shadow">
                <h2 className="font-bold mb-4">Monthly Attendance</h2>
                <img src="https://placehold.co/200x200?text=Pie+Chart" alt="Pie chart showing monthly attendance data" />
            </div>
        </div>
    </div> */}
    </>
);

export default Dashboard;
