import React from "react";

const UpcomingSchedule = () => {
  return (
    <div>
      <h3 className="text-md font-bold mb-2">The Upcoming Schedule</h3>
      <div className="space-y-3">
        <div className="bg-blue-100 text-blue-900 p-2 rounded-lg flex justify-between items-center">
          <span>Health checkup</span>
          <span>11:00 AM</span>
        </div>
        <div className="bg-purple-100 text-purple-900 p-2 rounded-lg flex justify-between items-center">
          <span>Ophthalmologist</span>
          <span>2:00 PM</span>
        </div>
        <div className="bg-red-100 text-red-900 p-2 rounded-lg flex justify-between items-center">
          <span>Cardiologist</span>
          <span>12:00 AM</span>
        </div>
      </div>
    </div>
  );
};

export default UpcomingSchedule;
