import { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import employeeData from "../data/employeeData"; // Import data karyawan

const EmployeeLifecycleChart = ({ stats }) => {
  const [selectedChart, setSelectedChart] = useState("Siklus Karyawan");
  const [tableData, setTableData] = useState([]);
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  // Hitung total karyawan pria & wanita
  const totalPria = employeeData.filter((emp) => emp.jenis_kelamin === "Pria").length;
  const totalWanita = employeeData.filter((emp) => emp.jenis_kelamin === "Wanita").length;

  const CHARTS = [
    { title: "Siklus Karyawan",
      dataRaw: [
        { name: "Onboarding", value: 50 },
        { name: "Pelatihan", value: 80 },
        { name: "Evaluasi Kinerja", value: 70 },
        { name: "Retensi", value: 60 },
        { name: "Offboarding", value: 30 },
      ],
      colors: ["#645CBB", "#A084DC", "#BFACE2", "#EBC7E6", "#BA68C8"],
    },
    { title: "Total Karyawan", dataRaw: [{ name: "Pria", value: totalPria }, { name: "Wanita", value: totalWanita }], colors: ["#645CBB", "#A084DC"] },
    { title: "Turnover Karyawan",
      dataRaw: [
        { name: "Bertahan", value: Math.floor(employeeData.length * 0.8) },
        { name: "Keluar", value: Math.floor(employeeData.length * 0.2) },
      ],
      colors: ["#645CBB", "#A084DC"],
    },
    { title: "Efektivitas Pelatihan", 
      dataRaw: [
        { name: "Sangat Efektif", value: 40 },
        { name: "Efektif", value: 35 },
        { name: "Cukup", value: 20 },
        { name: "Kurang", value: 5 },
      ],
      colors: ["#645CBB", "#A084DC", "#BFACE2", "#EBC7E6"],
    },
  ];

  const handleChartClick = (chart, dataItem) => {
    setSelectedChart(chart.title);
    if (chart.title === "Total Karyawan") {
      const filteredEmployees = employeeData.filter(emp => emp.jenis_kelamin === dataItem.name);
      setTableData(filteredEmployees);
    } else {
      setTableData(chart.dataRaw);
    }
  };

  const handleSort = (column) => {
    const newOrder = sortBy === column && sortOrder === "asc" ? "desc" : "asc";
    setSortBy(column);
    setSortOrder(newOrder);

    const sortedData = [...tableData].sort((a, b) => {
      if (column === "gaji") return newOrder === "asc" ? a.gaji - b.gaji : b.gaji - a.gaji;
      if (column === "tanggal_masuk") return newOrder === "asc" ? new Date(a.tanggal_masuk) - new Date(b.tanggal_masuk) : new Date(b.tanggal_masuk) - new Date(a.tanggal_masuk);
      return 0;
    });

    setTableData(sortedData);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-4 gap-3 p-1">
        {CHARTS.map((chart, index) => (
          <div key={index} className="bg-white p-2 rounded-lg shadow-md flex flex-col items-center cursor-pointer hover:scale-105 transition-all">
            <h2 className="text-sm font-bold text-center">{chart.title}</h2>
            <ResponsiveContainer width={200} height={150}>
              <PieChart>
                <Pie
                  data={chart.dataRaw}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={70}
                  onClick={(event) => handleChartClick(chart, event)}
                >
                  {chart.dataRaw.map((_, i) => <Cell key={`cell-${i}`} fill={chart.colors[i % chart.colors.length]} />)}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        ))}
      </div>

      <div className="mt-3 w-full bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-bold text-center">{selectedChart} Data</h3>
        {selectedChart === "Total Karyawan" && tableData.length > 0 && (
          <div className="mb-3 flex justify-end">
            <button onClick={() => handleSort("gaji")} className="mr-2 px-3 py-1 bg-blue-500 text-white rounded-md">
              Sort by Gaji {sortBy === "gaji" ? (sortOrder === "asc" ? "▲" : "▼") : ""}
            </button>
            <button onClick={() => handleSort("tanggal_masuk")} className="px-3 py-1 bg-blue-500 text-white rounded-md">
              Sort by Tanggal Masuk {sortBy === "tanggal_masuk" ? (sortOrder === "asc" ? "▲" : "▼") : ""}
            </button>
          </div>
        )}
        <table className="w-full border-collapse border border-gray-300 mt-2">
          <thead>
            <tr className="bg-purple-300">
              {selectedChart === "Total Karyawan" ? (
                <>
                  <th className="border border-gray-300 px-4 py-2">NIK</th>
                  <th className="border border-gray-300 px-4 py-2">Nama</th>
                  <th className="border border-gray-300 px-4 py-2">Divisi</th>
                  <th className="border border-gray-300 px-4 py-2">Jabatan</th>
                  <th className="border border-gray-300 px-4 py-2">Status</th>
                  <th className="border border-gray-300 px-4 py-2">Tanggal Masuk</th>
                  <th className="border border-gray-300 px-4 py-2">Gaji</th>
                </>
              ) : (
                <>
                  <th className="border border-gray-300 px-4 py-2">Kategori</th>
                  <th className="border border-gray-300 px-4 py-2">Jumlah</th>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            {tableData.length > 0 ? (
              selectedChart === "Total Karyawan" ? (
                tableData.map((item, index) => (
                  <tr key={index} className="text-center">
                    <td className="border border-gray-300 px-4 py-2">{item.nik}</td>
                    <td className="border border-gray-300 px-4 py-2">{item.nama}</td>
                    <td className="border border-gray-300 px-4 py-2">{item.divisi}</td>
                    <td className="border border-gray-300 px-4 py-2">{item.jabatan}</td>
                    <td className="border border-gray-300 px-4 py-2">{item.status}</td>
                    <td className="border border-gray-300 px-4 py-2">{item.tanggal_masuk}</td>
                    <td className="border border-gray-300 px-4 py-2">Rp{item.gaji.toLocaleString()}</td>
                  </tr>
                ))
              ) : (
                tableData.map((item, index) => (
                  <tr key={index} className="text-center">
                    <td className="border border-gray-300 px-4 py-2">{item.name}</td>
                    <td className="border border-gray-300 px-4 py-2">{item.value}</td>
                  </tr>
                ))
              )
            ) : (
              <tr>
                <td colSpan={selectedChart === "Total Karyawan" ? 7 : 2} className="border border-gray-300 px-4 py-2 text-center text-gray-500">
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
