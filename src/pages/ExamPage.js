// ExamPage.js
import React from 'react';

const ExamPage = () => {
    return (
        <div className="p-4 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-semibold text-blue-600">
                Exams <span className="text-gray-500">» Detail</span>
            </h1>
            <div className="mt-4">
                <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                        <label className="mr-2">Display</label>
                        <select className="border border-gray-300 rounded p-1">
                            <option>50</option>
                        </select>
                        <span className="ml-2">records</span>
                    </div>
                    <div className="flex items-center">
                        <label className="mr-2">Search:</label>
                        <input type="text" className="border border-gray-300 rounded p-1" />
                    </div>
                </div>
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr className="bg-blue-100">
                            <th className="border border-gray-300 p-2">S.N.</th>
                            <th className="border border-gray-300 p-2">Year</th>
                            <th className="border border-gray-300 p-2">Month</th>
                            <th className="border border-gray-300 p-2">Exam</th>
                            <th className="border border-gray-300 p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-t-2 border-red-500">
                            <td className="border border-gray-300 p-2">1</td>
                            <td className="border border-gray-300 p-2">2024</td>
                            <td className="border border-gray-300 p-2">February</td>
                            <td className="border border-gray-300 p-2">INTERNAL EXAM BCA-PPU-2ND-YEAR (SESSIONAL-2)</td>
                            <td className="border border-gray-300 p-2">
                                <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
                                    <i className="fas fa-file-alt"></i> Schedule
                                </button>
                                <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
                                    <i className="fas fa-id-card"></i> Admit Card
                                </button>
                                <button className="bg-blue-500 text-white px-2 py-1 rounded">
                                    <i className="fas fa-chart-line"></i> Grade Score
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 p-2">2</td>
                            <td className="border border-gray-300 p-2">2024</td>
                            <td className="border border-gray-300 p-2">October</td>
                            <td className="border border-gray-300 p-2">INTERNAL EXAM BCA PPU- 2ND YEAR - SESSIONAL -1 (OCT-24)</td>
                            <td className="border border-gray-300 p-2">
                                <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
                                    <i className="fas fa-file-alt"></i> Schedule
                                </button>
                                <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
                                    <i className="fas fa-id-card"></i> Admit Card
                                </button>
                                <button className="bg-blue-500 text-white px-2 py-1 rounded">
                                    <i className="fas fa-chart-line"></i> Grade Score
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 p-2">3</td>
                            <td className="border border-gray-300 p-2">2023</td>
                            <td className="border border-gray-300 p-2">December</td>
                            <td className="border border-gray-300 p-2">MONTHLY ASSESSMENT</td>
                            <td className="border border-gray-300 p-2">
                                <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
                                    <i className="fas fa-file-alt"></i> Schedule
                                </button>
                                <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
                                    <i className="fas fa-id-card"></i> Admit Card
                                </button>
                                <button className="bg-blue-500 text-white px-2 py-1 rounded">
                                    <i className="fas fa-chart-line"></i> Grade Score
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="flex justify-between items-center mt-2">
                    <span>Showing 1 to 3 of 3 entries</span>
                    <div className="flex items-center">
                        <button className="bg-gray-300 text-gray-700 px-2 py-1 rounded mr-2">Previous</button>
                        <button className="bg-blue-500 text-white px-2 py-1 rounded">1</button>
                        <button className="bg-gray-300 text-gray-700 px-2 py-1 rounded ml-2">Next</button>
                    </div>
                </div>
            </div>
            <footer className="mt-4 text-center text-gray-500">
                CIMAGE Group of Institutions
            </footer>
        </div>
    );
};

export default ExamPage;
