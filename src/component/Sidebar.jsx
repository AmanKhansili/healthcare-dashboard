// src/components/Sidebar.jsx
import React from "react";
import {
  Home,
  Calendar,
  BarChart,
  History,
  Settings,
  MessageCircle,
  HelpCircle,
  ClipboardList,
} from "lucide-react";

const navItems = [
  { icon: <Home size={20} />, label: "Dashboard" },
  { icon: <History size={20} />, label: "History" },
  { icon: <Calendar size={20} />, label: "Calendar" },
  { icon: <ClipboardList size={20} />, label: "Appointments" },
  { icon: <MessageCircle size={20} />, label: "Chat" },
  { icon: <HelpCircle size={20} />, label: "Support" },
  { icon: <Settings size={20} />, label: "Setting" },
];

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-base-200 p-6 shadow-2xl gap-2">
      {/* Logo or App Title */}
      <h1 className="text-2xl font-bold text-primary mb-10 lg:hidden">
        Health<span className="text-warning">care.</span>
      </h1>

      {/* Navigation Links */}
      <nav className="space-y-4">
        <h2 className="text-sm uppercase mb-5">General</h2>
        <ul className="space-y-7">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-3 textarea-lg font-medium hover:text-primary cursor-pointer"
            >
              {item.icon}
              {item.label}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
