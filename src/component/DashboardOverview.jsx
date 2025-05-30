import React from "react";
import AnatomySection from "./AnatomySection";
import CalenderView from "./CalendarView";

const DashboardOverview = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row gap-6">
      <AnatomySection />
      <CalenderView />
    </section>
  );
};

export default DashboardOverview;
