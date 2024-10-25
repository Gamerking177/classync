import React from 'react';

function DashboardCard({ title, value, icon }) {
    return (
        <div className="bg-blue-100 p-4 rounded-lg">
            <div className="flex items-center">
                <i className={`${icon} text-blue-600 text-2xl`}></i>
                <div className="ml-4">
                    <p className="text-gray-600">{title}</p>
                    <p className="text-2xl font-bold">{value}</p>
                </div>
            </div>
        </div>
    );
}

export default DashboardCard;
