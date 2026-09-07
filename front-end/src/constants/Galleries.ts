export type Gallery = {
  id: string
  slug: string

  title: string
  shortDescription: string
  description: string

  category: string
  location: string
  date: string
  time: string

  image: string
  images: string[]

  participants: string
  organizer: string
  partners: string[]

  impact: string
  activities: string[]
  tags: string[]

  status: string
  featured: boolean
}

export const galleries: Gallery[] = [
  {
    id: "kelas-lingkungan",
    slug: "kelas-lingkungan",

    title: "Kelas Peduli Lingkungan",
    shortDescription:
      "Belajar memahami masalah lingkungan melalui diskusi dan aktivitas sederhana.",
    description:
      "Kelas Peduli Lingkungan menjadi ruang belajar bagi peserta untuk memahami berbagai persoalan lingkungan di sekitar mereka. Kegiatan dikemas melalui diskusi ringan, studi kasus, dan aktivitas kelompok yang mendorong peserta menemukan solusi sederhana yang dapat diterapkan sehari-hari.",

    category: "Lingkungan",
    location: "Depok",
    date: "15 Agustus 2026",
    time: "09.00 - 12.00 WIB",

    image:
      "https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg",

    images: [
      "https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg",
      "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg",
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    ],

    participants: "35+",
    organizer: "Karsa",

    partners: [
      "Komunitas Hijau",
      "Youth Community",
    ],

    impact:
      "Meningkatkan pemahaman peserta mengenai persoalan lingkungan dan mendorong kebiasaan sederhana yang lebih ramah lingkungan.",

    activities: [
      "Diskusi lingkungan",
      "Studi kasus",
      "Kerja kelompok",
      "Presentasi",
      "Refleksi",
    ],

    tags: [
      "Environment",
      "Education",
      "Youth",
      "Community",
    ],

    status: "Selesai",
    featured: false,
  },

  {
    id: "berbagi-sembako",
    slug: "berbagi-sembako",

    title: "Berbagi Bersama",
    shortDescription:
      "Aksi sosial untuk berbagi kebutuhan dan membangun kepedulian bersama.",
    description:
      "Berbagi Bersama merupakan kegiatan sosial yang mengajak relawan untuk terlibat langsung dalam membantu masyarakat. Kegiatan dilakukan dengan membagikan kebutuhan pokok sekaligus membangun interaksi dan kebersamaan dengan penerima manfaat.",

    category: "Sosial",
    location: "Depok",
    date: "30 Agustus 2026",
    time: "08.00 - 12.00 WIB",

    image:
      "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg",

    images: [
      "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg",
      "https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg",
      "https://images.pexels.com/photos/6646868/pexels-photo-6646868.jpeg",
    ],

    participants: "45+",
    organizer: "Karsa",

    partners: [
      "Relawan Karsa",
      "Komunitas Sosial",
    ],

    impact:
      "Membantu memenuhi kebutuhan masyarakat sekaligus menumbuhkan semangat berbagi dan kepedulian sosial.",

    activities: [
      "Persiapan bantuan",
      "Distribusi kebutuhan",
      "Interaksi bersama warga",
      "Aktivitas sosial",
      "Dokumentasi",
    ],

    tags: [
      "Social",
      "Sharing",
      "Volunteer",
      "Community",
    ],

    status: "Selesai",
    featured: false,
  },

  {
    id: "diskusi-komunitas",
    slug: "diskusi-komunitas",

    title: "Ruang Diskusi Komunitas",
    shortDescription:
      "Ruang bertukar gagasan untuk membangun gerakan komunitas yang lebih kuat.",
    description:
      "Ruang Diskusi Komunitas mempertemukan berbagai individu dan komunitas untuk bertukar pengalaman, membicarakan isu sosial dan lingkungan, serta menemukan peluang kolaborasi. Kegiatan berlangsung secara terbuka dengan suasana diskusi yang santai dan partisipatif.",

    category: "Komunitas",
    location: "Jakarta",
    date: "12 September 2026",
    time: "13.00 - 16.00 WIB",

    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",

    images: [
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      "https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg",
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
    ],

    participants: "40+",
    organizer: "Karsa",

    partners: [
      "Komunitas Lokal",
      "Organisasi Pemuda",
      "Komunitas Sosial",
    ],

    impact:
      "Membuka ruang pertukaran ide dan memperkuat hubungan antar komunitas untuk membangun kegiatan bersama.",

    activities: [
      "Community talk",
      "Diskusi kelompok",
      "Sharing pengalaman",
      "Ideation",
      "Networking",
    ],

    tags: [
      "Community",
      "Discussion",
      "Collaboration",
      "Networking",
    ],

    status: "Selesai",
    featured: false,
  },

  {
    id: "aksi-pantai",
    slug: "aksi-pantai",

    title: "Aksi Bersih Pantai",
    shortDescription:
      "Aksi bersama membersihkan kawasan pantai dan mengurangi sampah di lingkungan pesisir.",
    description:
      "Aksi Bersih Pantai mengajak relawan dan masyarakat untuk terlibat langsung dalam menjaga kawasan pesisir. Peserta melakukan pembersihan area pantai, memilah sampah yang terkumpul, serta mendapatkan edukasi mengenai dampak sampah terhadap ekosistem laut.",

    category: "Lingkungan",
    location: "Jakarta Utara",
    date: "20 September 2026",
    time: "07.00 - 11.00 WIB",

    image:
      "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg",

    images: [
      "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg",
      "https://images.pexels.com/photos/3850512/pexels-photo-3850512.jpeg",
      "https://images.pexels.com/photos/7656748/pexels-photo-7656748.jpeg",
    ],

    participants: "75+",
    organizer: "Karsa",

    partners: [
      "Komunitas Pesisir",
      "Relawan Lingkungan",
    ],

    impact:
      "Mengurangi sampah di kawasan pesisir dan meningkatkan kesadaran peserta mengenai pentingnya menjaga ekosistem laut.",

    activities: [
      "Pembersihan pantai",
      "Pengumpulan sampah",
      "Pemilahan sampah",
      "Edukasi ekosistem laut",
      "Dokumentasi",
    ],

    tags: [
      "Beach",
      "Cleanup",
      "Environment",
      "Volunteer",
    ],

    status: "Selesai",
    featured: true,
  },

  {
    id: "workshop-kepemudaan",
    slug: "workshop-kepemudaan",

    title: "Workshop Kepemudaan",
    shortDescription:
      "Membekali generasi muda dengan pengalaman, wawasan, dan ruang untuk berkembang.",
    description:
      "Workshop Kepemudaan menjadi ruang belajar bagi anak muda untuk mengembangkan kemampuan komunikasi, kepemimpinan, dan kerja sama. Peserta mengikuti beberapa sesi pembelajaran dan aktivitas kelompok yang dirancang untuk mendorong keberanian mengambil peran dalam komunitas.",

    category: "Generasi Muda",
    location: "Bogor",
    date: "4 Oktober 2026",
    time: "08.00 - 15.00 WIB",

    image:
      "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg",

    images: [
      "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg",
      "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg",
      "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg",
    ],

    participants: "55+",
    organizer: "Karsa",

    partners: [
      "Youth Community",
      "Volunteer Network",
    ],

    impact:
      "Mendorong generasi muda untuk lebih percaya diri, aktif berkolaborasi, dan mengambil peran dalam kegiatan komunitas.",

    activities: [
      "Leadership workshop",
      "Public speaking",
      "Team building",
      "Group discussion",
      "Reflection",
    ],

    tags: [
      "Youth",
      "Leadership",
      "Workshop",
      "Education",
    ],

    status: "Selesai",
    featured: true,
  },

  {
    id: "bank-sampah",
    slug: "bank-sampah",

    title: "Gerakan Bank Sampah",
    shortDescription:
      "Mengenalkan pengelolaan sampah melalui pemilahan dan pengumpulan sampah bernilai.",
    description:
      "Gerakan Bank Sampah mengajak masyarakat memahami bahwa sampah dapat dikelola dengan lebih baik. Peserta belajar memilah sampah berdasarkan jenisnya dan memahami proses sederhana pengumpulan serta pengelolaan sampah yang dapat digunakan kembali.",

    category: "Lingkungan",
    location: "Depok",
    date: "18 Oktober 2026",
    time: "08.00 - 11.30 WIB",

    image:
      "https://images.pexels.com/photos/3735219/pexels-photo-3735219.jpeg",

    images: [
      "https://images.pexels.com/photos/3735219/pexels-photo-3735219.jpeg",
      "https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg",
      "https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg",
    ],

    participants: "50+",
    organizer: "Karsa",

    partners: [
      "Komunitas Hijau",
      "Bank Sampah Lokal",
    ],

    impact:
      "Meningkatkan pemahaman masyarakat mengenai pemilahan sampah dan mendorong kebiasaan pengelolaan sampah yang lebih baik.",

    activities: [
      "Edukasi sampah",
      "Pemilahan sampah",
      "Pengumpulan sampah",
      "Praktik daur ulang",
      "Diskusi warga",
    ],

    tags: [
      "Waste",
      "Environment",
      "Recycling",
      "Community",
    ],

    status: "Selesai",
    featured: false,
  },

  {
    id: "hari-komunitas",
    slug: "hari-komunitas",

    title: "Hari Bersama Komunitas",
    shortDescription:
      "Mempertemukan komunitas dan relawan dalam satu ruang untuk berbagi dan berkolaborasi.",
    description:
      "Hari Bersama Komunitas menjadi momen untuk mempertemukan berbagai komunitas, relawan, dan individu yang memiliki semangat untuk bergerak bersama. Kegiatan diisi dengan sharing session, aktivitas kelompok, serta ruang terbuka untuk membangun koneksi baru.",

    category: "Komunitas",
    location: "Bogor",
    date: "1 November 2026",
    time: "09.00 - 15.00 WIB",

    image:
      "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg",

    images: [
      "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg",
      "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg",
      "https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg",
    ],

    participants: "90+",
    organizer: "Karsa",

    partners: [
      "Komunitas Pemuda",
      "Komunitas Lingkungan",
      "Komunitas Sosial",
    ],

    impact:
      "Memperluas jaringan komunitas dan menciptakan ruang baru untuk kolaborasi dalam kegiatan sosial dan lingkungan.",

    activities: [
      "Community gathering",
      "Sharing session",
      "Community showcase",
      "Networking",
      "Kolaborasi program",
    ],

    tags: [
      "Community",
      "Gathering",
      "Collaboration",
      "Youth",
    ],

    status: "Selesai",
    featured: true,
  },

  {
    id: "kelas-relawan",
    slug: "kelas-relawan",

    title: "Kelas Relawan Karsa",
    shortDescription:
      "Mempersiapkan relawan agar siap terlibat dalam berbagai kegiatan Karsa.",
    description:
      "Kelas Relawan Karsa menjadi ruang pengenalan bagi relawan baru untuk memahami nilai, cara kerja, dan berbagai kegiatan yang dilakukan Karsa. Peserta juga mendapatkan kesempatan untuk berdiskusi dan mengenal peran yang dapat mereka ambil dalam kegiatan berikutnya.",

    category: "Generasi Muda",
    location: "Depok",
    date: "15 November 2026",
    time: "09.00 - 12.00 WIB",

    image:
      "https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg",

    images: [
      "https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg",
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
    ],

    participants: "40+",
    organizer: "Karsa",

    partners: [
      "Volunteer Network",
      "Youth Community",
    ],

    impact:
      "Membantu relawan memahami peran mereka dan meningkatkan kesiapan untuk terlibat dalam berbagai aksi Karsa.",

    activities: [
      "Pengenalan Karsa",
      "Volunteer briefing",
      "Team activity",
      "Pembagian peran",
      "Sharing session",
    ],

    tags: [
      "Volunteer",
      "Youth",
      "Community",
      "Training",
    ],

    status: "Selesai",
    featured: false,
  },
]