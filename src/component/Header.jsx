import { Bell, Plus, Menu } from "lucide-react";
// import avatar from "../assets/avatar.png";

export default function Header({ onMenuToggle, isDark, setIsDark }) {
  return (
    <header className="w-full flex justify-between items-center px-6 py-4 bg-base-300 shadow-md">
      <div className="flex items-center gap-4">
        <button className="btn btn-ghost btn-circle lg:hidden" onClick={onMenuToggle}>
          <Menu className="w-6 h-6" />
        </button>
        <p className="text-2xl font-bold text-primary hidden lg:block">
          Health<span className="text-warning">care.</span>
        </p>
      </div>

      <div className="hidden md:flex flex-1 mx-10 max-w-xl">
        <input
          type="text"
          placeholder="Search..."
          className="input input-bordered w-full rounded-full"
          readOnly
        />
      </div>

      <div className="flex items-center gap-4">
        <label className="flex cursor-pointer gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <input
            type="checkbox"
            className="toggle theme-controller"
            checked={isDark}
            onChange={(e) => setIsDark(e.target.checked)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
        <button className="btn btn-circle btn-ghost">
          <Bell className="w-5 h-5" />
        </button>

        <button className="btn btn-circle btn-primary text-base-300">
          <Plus className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2">
          <span className="font-medium text-sm hidden md:inline">John Doe</span>
        </div>
      </div>
    </header>
  );
}
