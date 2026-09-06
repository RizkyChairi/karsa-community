export type contribution = {
  date: string
  month: string
  year: string
  location: string
  category: string
  title: string
  description: string
  participants: string
  partner: string
  impact: string
  image: string
  accent: string
  border: string
}

export const contributions: contribution[] = [
  {
    date: "12 Januari 2026",
    month: "Januari",
    year: "2026",
    location: "Depok",
    category: "Lingkungan",
    title: "Aksi Bersih Lingkungan",
    description:
      "Kegiatan bersama untuk menjaga kebersihan lingkungan dan membangun kepedulian terhadap ruang sekitar.",
    participants: "40+",
    partner: "Komunitas Lokal",
    impact:
      "Membersihkan area lingkungan dan mengajak masyarakat untuk lebih peduli terhadap kebersihan.",
    image: "/dampak_dan_kontribusi/depokkomunitas.png",
    accent: "text-karsa-green",
    border: "border-karsa-green",
  },

  {
    date: "16 Februari 2025",
    month: "Februari",
    year: "2025",
    location: "Bogor",
    category: "Sosial",
    title: "Berbagi Bersama",
    description:
      "Kegiatan sosial bersama masyarakat sebagai bentuk kepedulian dan kontribusi nyata Karsa.",
    participants: "50+",
    partner: "Komunitas Sosial",
    impact:
      "Menyalurkan bantuan dan membangun interaksi langsung bersama masyarakat.",
    image: "/dampak_dan_kontribusi/bogorkomunitas.png",
    accent: "text-karsa-blue",
    border: "border-karsa-blue",
  },

  {
    date: "23 Maret 2025",
    month: "Maret",
    year: "2025",
    location: "Jakarta",
    category: "Komunitas",
    title: "Kolaborasi Komunitas",
    description:
      "Mempertemukan berbagai komunitas untuk membangun gerakan bersama yang lebih luas.",
    participants: "60+",
    partner: "Komunitas & Organisasi",
    impact:
      "Membuka ruang kolaborasi dan memperluas jaringan gerakan Karsa.",
    image: "/dampak_dan_kontribusi/allkomunitas.png",
    accent: "text-karsa-purple",
    border: "border-karsa-purple",
  },

  {
    date: "20 April 2025",
    month: "April",
    year: "2025",
    location: "Depok",
    category: "Generasi Muda",
    title: "Gerakan Anak Muda",
    description:
      "Mengajak generasi muda untuk terlibat langsung dalam kegiatan sosial dan lingkungan.",
    participants: "35+",
    partner: "Komunitas Pemuda",
    impact:
      "Mendorong lebih banyak anak muda untuk aktif menjadi bagian dari gerakan sosial.",
    image: "/dampak_dan_kontribusi/gerakananakmuda.png",
    accent: "text-karsa-yellow",
    border: "border-karsa-yellow",
  },

  {
    date: "18 Mei 2025",
    month: "Mei",
    year: "2025",
    location: "Bogor",
    category: "Lingkungan",
    title: "Aksi Peduli Alam",
    description:
      "Kegiatan bersama untuk menjaga lingkungan sekaligus meningkatkan kesadaran masyarakat.",
    participants: "45+",
    partner: "Komunitas Lingkungan",
    impact:
      "Mengajak masyarakat terlibat langsung dalam aksi menjaga lingkungan.",
    image: "/dampak_dan_kontribusi/menanampohon.png",
    accent: "text-orange-500",
    border: "border-orange-500",
  },

  {
    date: "15 Juni 2025",
    month: "Juni",
    year: "2025",
    location: "Jakarta",
    category: "Sosial",
    title: "Berbagi dan Membantu",
    description:
      "Menghadirkan aksi sosial yang berfokus pada kepedulian dan kebersamaan.",
    participants: "55+",
    partner: "Mitra Karsa",
    impact:
      "Memberikan manfaat secara langsung sekaligus memperkuat solidaritas.",
    image: "/dampak_dan_kontribusi/aksisosial.png",
    accent: "text-cyan-500",
    border: "border-cyan-500",
  },
]