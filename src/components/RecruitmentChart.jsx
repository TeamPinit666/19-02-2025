import {
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
    Area,
    Bar,
    Line,
    ComposedChart,
  } from "recharts";
  
  const data = [
    { stage: "Seleksi Berkas", candidates: 100 },
    { stage: "Tes Tertulis", candidates: 60 },
    { stage: "Wawancara", candidates: 30 },
    { stage: "Penawaran Kerja", candidates: 10 },
  ];
  
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 rounded-lg shadow-md border">
          <p className="text-sm font-semibold text-gray-700">{payload[0].payload.stage}</p>
          <p className="text-blue-500 text-lg font-bold">{payload[0].value} Kandidat</p>
        </div>
      );
    }
    return null;
  };
  
  const RecruitmentChart = ({ small, large }) => {
    return (
      <div className={`bg-white p-6 rounded-2xl shadow-lg transition-all duration-300 
        ${large ? "w-full h-96" : small ? "w-56 h-56" : "w-full h-80"}`}>
        <h2 className="text-xl font-bold mb-4 text-center text-gray-800">Proses Rekrutmen</h2>
        <ResponsiveContainer width="100%" height={large ? 320 : small ? 150 : 220}>
          <ComposedChart data={data}>
            <defs>
              <linearGradient id="colorCandidates" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#4F46E5" stopOpacity={0} />
              </linearGradient>
            </defs>
            
            <XAxis dataKey="stage" tick={{ fontSize: small ? 10 : 12 }} />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <CartesianGrid strokeDasharray="3 3" />
  
            {/* Bar Chart untuk efek modern */}
            <Bar dataKey="candidates" barSize={40} fill="url(#colorCandidates)" radius={[10, 10, 0, 0]} />
  
            {/* Area Chart untuk efek smooth */}
            <Area type="monotone" dataKey="candidates" stroke="#4F46E5" strokeWidth={3} fill="url(#colorCandidates)" />
  
            {/* Line Chart untuk tambahan detail */}
            <Line type="monotone" dataKey="candidates" stroke="#312E81" strokeWidth={3} dot={{ r: 6, fill: "#312E81" }} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    );
  };
  
  export default RecruitmentChart;
  