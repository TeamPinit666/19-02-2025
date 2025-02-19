// HRStructureChart.jsx
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import { employees, divisions } from "../data/data";

const divisionStats = divisions.map((division) => ({
  name: division.name,
  employees: employees.filter((e) => e.divisionId === division.id).length,
}));

const totalEmployees = employees.length;

const HRStructureChart = ({ small, large }) => {
  return (
    <div className={`bg-white p-4 rounded-xl shadow-md flex ${large ? "w-full h-96" : small ? "w-56 h-56" : "w-full h-72"}`}>
      <div className="flex-1">
        <h2 className="text-xl font-bold mb-4 text-center">Struktur HR</h2>
        <ResponsiveContainer width="100%" height={large ? 300 : small ? 150 : 200}>
          <BarChart data={divisionStats}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="employees" fill="#A294F9" barSize={large ? 60 : 30} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {large && (
        <div className="w-1/3 flex flex-col justify-center p-4">
          <h3 className="text-lg font-semibold text-center mb-2">Persentase Karyawan</h3>
          <ul className="space-y-2">
            {divisionStats.map((item) => {
              const percentage = ((item.employees / totalEmployees) * 100).toFixed(1);
              return (
                <li key={item.name} className="flex justify-between">
                  <span>{item.name}</span>
                  <span className="font-bold">{percentage}%</span>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HRStructureChart;
