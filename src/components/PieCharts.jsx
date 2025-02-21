import { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const EmployeeLifecycleChart = ({ stats }) => {
  const [selectedChart, setSelectedChart] = useState("Siklus Karyawan");
  const [tableData, setTableData] = useState([]);

  // Ambil total users dari stats
  const totalUsers = stats.find((stat) => stat.title === "Total Users")?.value || "0";
  const totalUsersNumber = parseInt(totalUsers.replace(/,/g, ""), 10); // Hapus koma, konversi ke angka

  const CHARTS = [
    {
      title: "Siklus Karyawan",
      dataRaw: [
        { name: "Onboarding", value: 50 },
        { name: "Pelatihan", value: 80 },
        { name: "Evaluasi Kinerja", value: 70 },
        { name: "Retensi", value: 60 },
        { name: "Offboarding", value: 30 },
      ],
      colors: ["#645CBB", "#A084DC", "#BFACE2", "#EBC7E6", "#BA68C8"],
    },
    {
      title: "Total Karyawan",
      dataRaw: [
        { name: "Pria", value: Math.floor(totalUsersNumber * 0.7) },
        { name: "Wanita", value: Math.floor(totalUsersNumber * 0.3) },
      ],
      colors: ["#645CBB", "#A084DC"],
    },
    {
      title: "Turnover Karyawan",
      dataRaw: [
        { name: "Bertahan", value: Math.floor(totalUsersNumber * 0.8) },
        { name: "Keluar", value: Math.floor(totalUsersNumber * 0.2) },
      ],
      colors: ["#645CBB", "#A084DC"],
    },
    {
      title: "Efektivitas Pelatihan",
      dataRaw: [
        { name: "Sangat Efektif", value: 40 },
        { name: "Efektif", value: 35 },
        { name: "Cukup", value: 20 },
        { name: "Kurang", value: 5 },
      ],
      colors: ["#645CBB", "#A084DC", "#BFACE2", "#EBC7E6"],
    },
  ];

  // Set default tabel ke "Siklus Karyawan"
  useState(() => {
    const defaultChart = CHARTS.find((chart) => chart.title === selectedChart);
    if (defaultChart) setTableData(defaultChart.dataRaw);
  }, []);

  const handleChartClick = (chart) => {
    setSelectedChart(chart.title);
    setTableData(chart.dataRaw);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-4 gap-3 p-1">
        {CHARTS.map((chart, index) => {
          const total = chart.dataRaw.reduce((sum, item) => sum + item.value, 0);

          const data =
            chart.title === "Total Karyawan"
              ? chart.dataRaw
              : chart.dataRaw.map((item) => ({
                  name: item.name,
                  value: parseInt(((item.value / total) * 100).toFixed(0)), 
                }));

          return (
            <div
              key={index}
              className="bg-white p-2 rounded-lg shadow-md flex flex-col items-center cursor-pointer hover:scale-105 transition-all"
              onClick={() => handleChartClick(chart)}
            >
              <h2 className="text-sm font-bold text-center">{chart.title}</h2>
              <ResponsiveContainer width={200} height={150}>
                <PieChart>
                  <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={70}>
                    {data.map((_, i) => (
                      <Cell key={`cell-${i}`} fill={chart.colors[i % chart.colors.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          );
        })}
      </div>

      {/* TABEL DATA TETAP TERLIHAT SEJAK AWAL */}
      <div className="mt-3 w-full bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-bold text-center">{selectedChart} Data</h3>
        <table className="w-full border-collapse border border-gray-300 mt-2">
          <thead>
            <tr className="bg-purple-300">
              <th className="border border-gray-300 px-4 py-2">Kategori</th>
              <th className="border border-gray-300 px-4 py-2">Jumlah</th>
            </tr>
          </thead>
          <tbody>
            {tableData.length > 0 ? (
              tableData.map((item, index) => (
                <tr key={index} className="text-center">
                  <td className="border border-gray-300 px-4 py-2">{item.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.value}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" className="border border-gray-300 px-4 py-2 text-center text-gray-500">
                  Klik chart untuk menampilkan data
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeLifecycleChart;
