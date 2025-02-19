import { useState } from "react";
import "../app.css"; // Pastikan file CSS di-import

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white p-4 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Links (Desktop View) */}
        <ul className="hidden md:flex space-x-6 mx-auto">
          {["Home", "Reports", "Settings"].map((item) => (
            <li key={item}>
              <a href="#" className="shimmer-text text-lg font-semibold">
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Menu Button (Mobile) */}
        <button
          className="shimmer-text text-xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Links (Mobile View) */}
      {isOpen && (
        <ul className="md:hidden bg-blue-400 p-4 space-y-2 text-center shadow-md">
          {["Home", "Reports", "Settings"].map((item) => (
            <li key={item}>
              <a href="#" className="shimmer-text text-lg font-semibold">
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;