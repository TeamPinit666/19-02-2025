import { useState } from "react";
import { Home, BarChart, Settings, Menu, X } from "lucide-react";
import "../app.css"; // Pastikan file CSS di-import

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "HR", icon: <Home size={20} />, link: "#" },
    { name: "Reports", icon: <BarChart size={20} />, link: "#" },
    { name: "Settings", icon: <Settings size={20} />, link: "#" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white p-4 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Links (Desktop View) */}
        <ul className="hidden md:flex space-x-6 mx-auto">
          {menuItems.map(({ name, icon, link }) => (
            <li key={name} className="flex items-center space-x-2">
              <a href={link} className="shimmer-text text-lg font-semibold flex items-center space-x-2">
                {icon}
                <span>{name}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Menu Button (Mobile) */}
        <button
          className="shimmer-text text-xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Links (Mobile View) */}
      {isOpen && (
        <ul className="md:hidden bg-blue-400 p-4 space-y-2 text-center shadow-md">
          {menuItems.map(({ name, icon, link }) => (
            <li key={name} className="flex justify-center">
              <a href={link} className="shimmer-text text-lg font-semibold flex items-center space-x-2">
                {icon}
                <span>{name}</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
