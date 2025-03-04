import { FaChartBar, FaDollarSign, FaUsers, FaFileInvoiceDollar } from "react-icons/fa";
import HRStructureChart from "./components/HRStructureChart";
import RecruitmentChart from "./components/RecruitmentChart";
import EmployeeLifecycleChart from "./components/PieCharts";
import Navbar from "./components/Navbar";
import employeeData from "./data/employeeData"; // Import data karyawan

const DashboardCard = ({ title, value, percentage, duration, icon: Icon }) => {
  return (
    <div className="bg-white rounded-lg p-4 flex items-center gap-3 min-h-[80px] transition-all hover:scale-105 drop-shadow-md w-[216px]">
      <div className="p-2 rounded-md bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 opacity-90">
        <Icon className="text-white text-xl" />
      </div>
      <div className="flex flex-col flex-grow text-left">
        <h2 className="text-gray-500 text-sm">{title}</h2>
        <h3 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">{value}</h3>
        <p className={`text-xs ${percentage > 0 ? "text-green-500" : "text-red-500"}`}>
          {percentage}% {duration}
        </p>
      </div>
    </div>
  );
};

const App = () => {
  const totalKaryawan = employeeData.length; // Ambil total jumlah karyawan dari data

  const stats = [
    { title: "Total Profit", value: "67,987", percentage: -0.75, duration: "Last 6 days", icon: FaDollarSign },
    { title: "Total Cost", value: "$59,765", percentage: 0.6, duration: "Last year", icon: FaChartBar },
    { title: "Total Karyawan", value: totalKaryawan, percentage: 0.9, duration: "Last 9 days", icon: FaFileInvoiceDollar },
    { title: "Total Users", value: "44,278", percentage: 6, duration: "Last week", icon: FaUsers },


  ];

  return (
    <div className="min-h-screen bg-gray-100 p-10 flex">
      <div className="w-2/3">
        <Navbar />

        {/* Statistik Kartu */}
        <div className="flex flex-wrap gap-3 justify-start mt-9 absolute left-2">
          {stats.map((stat, index) => (
            <DashboardCard key={index} {...stat} />
          ))}
        </div>

        {/* PieChart di bawah kartu, diberikan data stats sebagai props */}
        <div className="mt-36 absolute left-1">
          <EmployeeLifecycleChart stats={stats} />
        </div>
      </div>

      {/* Bagian kanan dengan dua chart */}
      <div className="w-[43%] absolute -right-3 full flex flex-col items-end gap-4 p-9">
        <HRStructureChart className="w-full" />
        <RecruitmentChart className="w-full" />
      </div>
    </div>
  );
};

export default App;
