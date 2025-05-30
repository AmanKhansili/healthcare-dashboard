// src/components/DashboardMainContent.jsx
import React from "react";
import DashboardOverview from "./DashboardOverview";
import UpcomingSchedule from "./UpcomingSchedule";
import ActivityFeed from "./ActivityFeed";

const DashboardMainContent = () => {
  return (
    <main className="flex flex-col gap-6 p-6 w-full bg-base-100 overflow-y-auto">
      <DashboardOverview />
      <UpcomingSchedule />
      <ActivityFeed />
    </main>
  );
};

export default DashboardMainContent;
