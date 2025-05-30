import { useState, useEffect } from "react";
import Sidebar from "./component/Sidebar";
import Header from "./component/Header";
import DashboardMainContent from "./component/DashboardMainContent";

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDark ? "abyss" : "light");
  }, [isDark]);

  const [toggle, setToggle] = useState("false");
  return (
    <>
      <div className="flex h-screen">
        <div className={`${toggle ? "block" : "hidden"}`}>
          <Sidebar />
        </div>
        <div className="flex flex-col flex-1">
          <Header onMenuToggle={() => setToggle(!toggle)} isDark={isDark} setIsDark={setIsDark} />
          <DashboardMainContent />
        </div>
      </div>
    </>
  );
}

export default App;
