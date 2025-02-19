import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const EmployeeLifecycleChart = ({ stats }) => {
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
        { name: "Pria", value: Math.floor(totalUsersNumber * 0.7) }, // Contoh: 70% pria
        { name: "Wanita", value: Math.floor(totalUsersNumber * 0.3) }, // Contoh: 30% wanita
      ],
      colors: ["#645CBB", "#A084DC"],
    },
    {
      title: "Turnover Karyawan",
      dataRaw: [
        { name: "Bertahan", value: Math.floor(totalUsersNumber * 0.8) }, // 80% bertahan
        { name: "Keluar", value: Math.floor(totalUsersNumber * 0.2) }, // 20% keluar
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

  return (
    <div className="grid grid-cols-4 gap-1 p-1 ml-0">
      {CHARTS.map((chart, index) => {
        const total = chart.dataRaw.reduce((sum, item) => sum + item.value, 0);

        const data =
          chart.title === "Total Karyawan"
            ? chart.dataRaw
            : chart.dataRaw.map((item) => ({
                name: item.name,
                value: parseInt(((item.value / total) * 100).toFixed(0)), // Menghilangkan koma
              }));

        return (
          <div key={index} className="bg-white p-2 rounded-lg shadow-md flex flex-col items-center">
            <h2 className="text-sm font-bold text-center">{chart.title}</h2>
            <ResponsiveContainer width={200} height={100}>
              <PieChart>
                <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50}>
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
  );
};

export default EmployeeLifecycleChart;
