import React from "react";

const AcademicCalendar = () => {
  const calendarData = {
    semesters: [
      { name: "Semester 1", start: "2024-01-10", end: "2024-06-10" },
      { name: "Semester 2", start: "2024-07-10", end: "2024-12-10" },
    ],
    deadlines: [
      { name: "Course Registration", date: "2024-01-15" },
      { name: "Add/Drop Courses", date: "2024-01-25" },
      { name: "Withdraw Deadline", date: "2024-02-20" },
    ],
    exams: [
      { name: "Midterm Exams", date: "2024-03-10 - 2024-03-20" },
      { name: "Final Exams", date: "2024-06-01 - 2024-06-10" },
    ],
    holidays: [
      { name: "National Holiday", date: "2024-01-26" },
      { name: "Independence Day", date: "2024-08-15" },
    ],
    events: [
      { name: "Orientation", date: "2024-01-05" },
      { name: "Annual Day", date: "2024-04-15" },
    ],
    results: [
      { name: "Midterm Results", date: "2024-03-25" },
      { name: "Final Results", date: "2024-06-20" },
    ],
    internships: [
      { name: "Internship Registration", date: "2024-05-01" },
      { name: "On-Campus Placements", date: "2024-09-10" },
    ],
    facultyDevelopment: [
      { name: "Faculty Training", date: "2024-06-15" },
    ],
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Academic Calendar</h1>
      
      <div className="space-y-6">
        {/* Semester Dates */}
        <Section title="Semester Dates" items={calendarData.semesters} />

        {/* Important Deadlines */}
        <Section title="Important Deadlines" items={calendarData.deadlines} />

        {/* Exam Dates */}
        <Section title="Exam Dates" items={calendarData.exams} />

        {/* Holidays and Observances */}
        <Section title="Holidays and Observances" items={calendarData.holidays} />

        {/* Events and Activities */}
        <Section title="Events and Activities" items={calendarData.events} />

        {/* Grading and Result Dates */}
        <Section title="Grading and Result Dates" items={calendarData.results} />

        {/* Internship and Placement Drives */}
        <Section title="Internship and Placement Drives" items={calendarData.internships} />

        {/* Faculty Development Days */}
        <Section title="Faculty Development Days" items={calendarData.facultyDevelopment} />

        {/* Miscellaneous Notes */}
        <div className="p-4 bg-white shadow rounded-lg mt-6">
          <h2 className="text-xl font-semibold">Miscellaneous Notes</h2>
          <p className="text-gray-700 mt-2">
            For more information on academic policies, visit the{" "}
            <a href="#" className="text-blue-600 hover:underline">academic handbook</a>.
          </p>
        </div>
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
