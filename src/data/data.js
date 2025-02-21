// data.js

export const divisions = [
    { id: 1, name: "Rekrutmen" },
    { id: 2, name: "Pelatihan" },
    { id: 3, name: "Hubungan Karyawan" },
    { id: 4, name: "Manajemen Kinerja" },
    { id: 5, name: "Payroll" },
  ];
  
  export const employees = [
    { id: 1, name: "Ahmad", divisionId: 1, salary: 5000000 },
    { id: 2, name: "Budi", divisionId: 1, salary: 5200000 },
    { id: 3, name: "Citra", divisionId: 2, salary: 4800000 },
    { id: 4, name: "Dewi", divisionId: 2, salary: 4900000 },
    { id: 5, name: "Eko", divisionId: 3, salary: 5500000 },
    { id: 6, name: "Farah", divisionId: 3, salary: 5300000 },
    { id: 7, name: "Gilang", divisionId: 4, salary: 6000000 },
    { id: 8, name: "Hani", divisionId: 4, salary: 6200000 },
    { id: 9, name: "Indra", divisionId: 5, salary: 5700000 },
    { id: 10, name: "Joko", divisionId: 5, salary: 5800000 },
  ];
  
  export const employeeStats = [
    { name: "Pria", value: 7 },
    { name: "Wanita", value: 3 },
  ];
  
  export const employeeTurnover = [
    { name: "Bertahan", value: 8 },
    { name: "Keluar", value: 2 },
  ];
  
  export const trainingEffectiveness = [
    { name: "Sangat Efektif", value: 40 },
    { name: "Efektif", value: 35 },
    { name: "Cukup", value: 20 },
    { name: "Kurang", value: 5 },
  ];
  export const CHARTS = [
    {
      title: "Siklus Karyawan",
      dataRaw: [
        { name: "Onboarding", value: 10, details: [
          { subName: "Pengenalan Perusahaan", subValue: 4 },
          { subName: "Training Awal", subValue: 3 },
          { subName: "Penyesuaian Budaya", subValue: 3 },
        ]},
        { name: "Pelatihan", value: 15, details: [
          { subName: "Skill Teknis", subValue: 7 },
          { subName: "Soft Skills", subValue: 5 },
          { subName: "Manajemen Waktu", subValue: 3 },
        ]},
        { name: "Evaluasi Kinerja", value: 12, details: [
          { subName: "Review Bulanan", subValue: 5 },
          { subName: "Feedback Tim", subValue: 4 },
          { subName: "Assessment Tahunan", subValue: 3 },
        ]},
        { name: "Retensi", value: 8, details: [
          { subName: "Kompensasi", subValue: 4 },
          { subName: "Work-Life Balance", subValue: 3 },
          { subName: "Peluang Karir", subValue: 1 },
        ]},
        { name: "Offboarding", value: 5, details: [
          { subName: "Exit Interview", subValue: 3 },
          { subName: "Dokumen Keluar", subValue: 2 },
        ]},
      ],
      colors: ["#645CBB", "#A084DC", "#BFACE2", "#EBC7E6", "#BA68C8"],
    },
    {
      title: "Total Karyawan",
      dataRaw: [
        { name: "Pria", value: 1000 },
        { name: "Wanita", value: 1000 },
      ],
      colors: ["#645CBB", "#A084DC"],
    },
    {
      title: "Turnover Karyawan",
      dataRaw: [
        { name: "Bertahan", value: 35000 },
        { name: "Keluar", value: 9000, details: [
          { subName: "Resign Sukarela", subValue: 5000 },
          { subName: "PHK", subValue: 3000 },
          { subName: "Pensiun", subValue: 1000 },
        ]},
      ],
      colors: ["#645CBB", "#A084DC"],
    },
    {
      title: "Efektivitas Pelatihan",
      dataRaw: [
        { name: "Sangat Efektif", value: 40, details: [
          { subName: "Meningkatkan Produktivitas", subValue: 20 },
          { subName: "Karyawan Lebih Mandiri", subValue: 10 },
          { subName: "Peningkatan Kepuasan Kerja", subValue: 10 },
        ]},
        { name: "Efektif", value: 35, details: [
          { subName: "Meningkatkan Pemahaman", subValue: 15 },
          { subName: "Skill Bertambah", subValue: 10 },
          { subName: "Lebih Mudah Beradaptasi", subValue: 10 },
        ]},
        { name: "Cukup", value: 20, details: [
          { subName: "Masih Membutuhkan Pendampingan", subValue: 10 },
          { subName: "Kurang Fokus", subValue: 5 },
          { subName: "Materi Terlalu Umum", subValue: 5 },
        ]},
        { name: "Kurang", value: 5, details: [
          { subName: "Tidak Relevan", subValue: 3 },
          { subName: "Kurang Menarik", subValue: 2 },
        ]},
      ],
      colors: ["#645CBB", "#A084DC", "#BFACE2", "#EBC7E6"],
    },
  ];
  
  
  