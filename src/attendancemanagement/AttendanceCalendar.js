import React, { useState } from "react";

const AcademicCalendar = () => {
  const [selectedSemester, setSelectedSemester] = useState("All");

  const calendarData = {
    semesters: [
      { name: "Semester 1", start: "2024-01-10", end: "2024-06-10" },
      { name: "Semester 2", start: "2024-07-10", end: "2024-12-10" },
    ],
    deadlines: [
      { name: "Course Registration", date: "2024-01-15", semester: "Semester 1" },
      { name: "Add/Drop Courses", date: "2024-01-25", semester: "Semester 1" },
      { name: "Withdraw Deadline", date: "2024-02-20", semester: "Semester 1" },
      { name: "Final Exams", date: "2024-12-05", semester: "Semester 2" },
    ],
    exams: [
      { name: "Midterm Exams", date: "2024-03-10 - 2024-03-20", semester: "Semester 1" },
      { name: "Final Exams", date: "2024-06-01 - 2024-06-10", semester: "Semester 1" },
    ],
    holidays: [
      { name: "National Holiday", date: "2024-01-26", semester: "All" },
      { name: "Independence Day", date: "2024-08-15", semester: "All" },
    ],
    events: [
      { name: "Orientation", date: "2024-01-05", semester: "Semester 1" },
      { name: "Annual Day", date: "2024-04-15", semester: "Semester 1" },
    ],
    results: [
      { name: "Midterm Results", date: "2024-03-25", semester: "Semester 1" },
      { name: "Final Results", date: "2024-06-20", semester: "Semester 1" },
    ],
    internships: [
      { name: "Internship Registration", date: "2024-05-01", semester: "Semester 1" },
      { name: "On-Campus Placements", date: "2024-09-10", semester: "Semester 2" },
    ],
    facultyDevelopment: [
      { name: "Faculty Training", date: "2024-06-15", semester: "Semester 1" },
    ],
  };

  const filteredItems = (items) => {
    return items.filter(
      (item) => selectedSemester === "All" || item.semester === selectedSemester
    );
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8">Academic Calendar</h1>

      {/* Semester Filter */}
      <div className="text-center mb-4">
        <label className="mr-3 font-medium text-lg">Filter by Semester:</label>
        <select
          className="p-2 rounded border border-gray-300"
          value={selectedSemester}
          onChange={(e) => setSelectedSemester(e.target.value)}
        >
          <option value="All">All</option>
          {calendarData.semesters.map((sem, idx) => (
            <option key={idx} value={sem.name}>{sem.name}</option>
          ))}
        </select>
      </div>

      {/* Calendar Sections */}
      <div className="space-y-6">
        <Section title="Semester Dates" items={calendarData.semesters} />

        <Section title="Important Deadlines" items={filteredItems(calendarData.deadlines)} />

        <Section title="Exam Dates" items={filteredItems(calendarData.exams)} />

        {/* Customized Holidays Section */}
        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Holidays and Observances</h2>
          <table className="w-full border">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="border p-2">Holiday</th>
                <th className="border p-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems(calendarData.holidays).map((holiday, index) => (
                <tr key={index} className="text-gray-700">
                  <td className="border p-2">{holiday.name}</td>
                  <td className="border p-2">{holiday.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Section title="Events and Activities" items={filteredItems(calendarData.events)} />

        <Section title="Grading and Result Dates" items={filteredItems(calendarData.results)} />

        <Section title="Internship and Placement Drives" items={filteredItems(calendarData.internships)} />

        <Section title="Faculty Development Days" items={filteredItems(calendarData.facultyDevelopment)} />
      </div>
    </div>
  );
};

const Section = ({ title, items }) => (
  <div className="p-4 bg-white shadow rounded-lg">
    <h2 className="text-xl font-semibold mb-4">{title}</h2>
    <ul className="list-disc pl-5 space-y-2">
      {items.map((item, index) => (
        <li key={index} className="text-gray-700">
          <span className="font-medium">{item.name}:</span> {item.date || `${item.start} - ${item.end}`}
        </li>
      ))}
    </ul>
  </div>
);

export default AcademicCalendar;
