import React from "react";

const CalendarView = () => {
  return (
    <div className="w-full lg:w-1/2 bg-base-200 p-4 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">📅 October 2021</h2>
      <div className="grid grid-cols-7 gap-2 text-center text-sm">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="font-bold">
            {day}
          </div>
        ))}
        {[...Array(31)].map((_, i) => (
          <div key={i} className="p-2 border rounded">
            {i + 1}
          </div>
        ))}
      </div>

      {/* Appointments */}
      <div className="mt-4">
        <h3 className="font-semibold mb-2">Appointments:</h3>
        <div className="bg-base-300 p-2 rounded shadow mb-2">🦷 Dentist — 09:00 AM</div>
        <div className="bg-base-300 p-2 rounded shadow">🏃‍♂️ Physiotherapy — 11:00 AM</div>
      </div>
    </div>
  );
};

export default CalendarView;
