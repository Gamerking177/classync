import ShowCauseNotice from './ShowCauseNotice';
import React from 'react';
 
const StudentDashboard = () => {
    return (    
        <div className="p-4">
            <ShowCauseNotice />
           
            <div className="flex">
                <div className="w-1/4 p-2">
                    <div className="border p-2">
                        <img src="https://placehold.co/150x200" alt="No image available" className="w-full" />
                        <div className="text-center mt-2">NO IMAGE AVAILABLE</div>
                    </div>
                </div>
                <div className="w-3/4 p-2">
                    <div className="bg-blue-600 text-white p-2 mb-2">Welcome, KETAN KUMAR -</div>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="border p-2">
                            <div>Faculty: <span className="font-bold">BCA</span></div>
                            <div>Reg. No.: <span className="font-bold">444-9758</span></div>
                            <div>Univ.Reg.: <span className="font-bold"></span></div>
                            <div>Gender: <span className="font-bold">MALE</span></div>
                            <div>Nationality: <span className="font-bold">Indian</span></div>
                            <div>E-mail: <span className="font-bold">ketan.bcastudent23.9758@cimage.in</span></div>
                        </div>
                        <div className="border p-2">
                            <div>Semester: <span className="font-bold">BCA-PPU-2ND YEAR-BATCH-1</span></div>
                            <div>Reg. Date: <span className="font-bold">2023-07-05</span></div>
                            <div>DOB: <span className="font-bold">2004-09-09</span></div>
                            <div>Blood Group: <span className="font-bold"></span></div>
                            <div>MotherTong: <span className="font-bold">Hindi</span></div>
                            <div>Mobile No: <span className="font-bold">9608934174,960893174</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentDashboard;
