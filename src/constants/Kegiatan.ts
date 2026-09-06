export type Activity = {
  id: string
  title: string
  slug: string
  category: string

  shortDescription: string
  description: string

  date: string
  time: string
  location: string

  organizer: string
  participants: number

  target: string
  impact: string

  coverImage: string
  images: string[]
}

function img(photoId: string, w: number, h: number, crop: string): string {
  return `https://images.unsplash.com/photo-${photoId}?auto=format&fit=crop&w=${w}&h=${h}&q=80&crop=${crop}`
}


const PHOTO_LINGKUNGAN = "1758599669317-efd787d954ef"
const PHOTO_SOSIAL = "1593113646773-028c64a8f1b8"
const PHOTO_EDUKASI = "1540151812223-c30b3fab58e6"
const PHOTO_KEMANUSIAAN = "1651372381086-9861c9c81db5"
const PHOTO_KOMUNITAS = "1515187029135-18ee286d815b"

function galleryFor(photoId: string): string[] {
  return [
    img(photoId, 1200, 800, "entropy"),
    img(photoId, 1000, 750, "faces"),
    img(photoId, 900, 600, "top"),
    img(photoId, 1100, 700, "bottom"),
    img(photoId, 950, 650, "left"),
    img(photoId, 1050, 700, "right"),
  ]
}

const IMAGES_LINGKUNGAN = galleryFor(PHOTO_LINGKUNGAN)
const IMAGES_SOSIAL = galleryFor(PHOTO_SOSIAL)
const IMAGES_EDUKASI = galleryFor(PHOTO_EDUKASI)
const IMAGES_KEMANUSIAAN = galleryFor(PHOTO_KEMANUSIAAN)
const IMAGES_KOMUNITAS = galleryFor(PHOTO_KOMUNITAS)

const COVER_LINGKUNGAN = img(PHOTO_LINGKUNGAN, 1200, 800, "entropy")
const COVER_SOSIAL = img(PHOTO_SOSIAL, 1200, 800, "entropy")
const COVER_EDUKASI = img(PHOTO_EDUKASI, 1200, 800, "entropy")
const COVER_KEMANUSIAAN = img(PHOTO_KEMANUSIAAN, 1200, 800, "entropy")
const COVER_KOMUNITAS = img(PHOTO_KOMUNITAS, 1200, 800, "entropy")

export const activities: Activity[] = [
  {
    id: "activity-001",
    title: "Aksi Bersih Sungai Ciliwung",
    slug: "aksi-bersih-sungai-ciliwung",
    category: "Lingkungan",
    shortDescription:
      "Membersihkan aliran Sungai Ciliwung dari sampah plastik bersama warga dan relawan.",
    description:
      "Kegiatan ini mengajak warga bantaran Sungai Ciliwung, relawan Komunitas Karsa, dan siswa sekolah setempat untuk membersihkan sampah yang menumpuk di aliran sungai. Aksi ini dilatarbelakangi tingginya pencemaran plastik yang menyebabkan pendangkalan dan banjir di musim hujan. Peserta dibagi menjadi beberapa kelompok untuk menyisir titik-titik rawan sampah menggunakan perahu karet dan alat pungut sampah, lalu hasilnya dipilah untuk didaur ulang oleh bank sampah setempat.",
    date: "12 Oktober 2026",
    time: "07.00 - 11.00 WIB",
    location: "Bantaran Sungai Ciliwung, Kelurahan Bantarjati, Bogor",
    organizer: "Komunitas Karsa bersama Karang Taruna Bantarjati",
    participants: 85,
    target: "Mengangkat minimal 500 kg sampah plastik dari sepanjang 2 km aliran sungai",
    impact:
      "Berhasil mengumpulkan 620 kg sampah, melibatkan 85 relawan, dan memicu pembentukan kelompok peduli sungai di 3 RW",
    coverImage: COVER_LINGKUNGAN,
    images: IMAGES_LINGKUNGAN,
  },
  {
    id: "activity-002",
    title: "Gerakan 100 Pohon untuk Sukamaju",
    slug: "gerakan-100-pohon-untuk-sukamaju",
    category: "Lingkungan",
    shortDescription:
      "Menanam 100 pohon produktif di lahan kritis Desa Sukamaju untuk mencegah longsor.",
    description:
      "Lahan kritis di lereng Desa Sukamaju rawan longsor saat musim hujan, sehingga Komunitas Karsa bersama pemerintah desa menginisiasi penanaman bibit pohon durian, alpukat, dan trembesi. Warga, kelompok tani, dan pelajar SMA setempat dilibatkan langsung dalam proses penggalian lubang tanam hingga penyiraman. Selain menahan erosi, pohon produktif ini diharapkan menjadi sumber penghasilan tambahan bagi warga dalam beberapa tahun ke depan.",
    date: "5 November 2026",
    time: "06.30 - 10.00 WIB",
    location: "Lereng Bukit Sukamaju, Kecamatan Tamansari, Bogor",
    organizer: "Komunitas Karsa bersama Kelompok Tani Sukamaju",
    participants: 120,
    target: "Menanam 100 bibit pohon produktif di lahan seluas 1,5 hektare",
    impact:
      "Sebanyak 108 bibit pohon berhasil ditanam dengan tingkat hidup awal 95%, melibatkan 120 relawan dan warga desa",
    coverImage: COVER_LINGKUNGAN,
    images: IMAGES_LINGKUNGAN,
  },
  {
    id: "activity-003",
    title: "Workshop Pengelolaan Sampah Rumah Tangga",
    slug: "workshop-pengelolaan-sampah-rumah-tangga",
    category: "Lingkungan",
    shortDescription:
      "Melatih ibu rumah tangga memilah dan mengolah sampah organik menjadi kompos.",
    description:
      "Workshop ini digelar untuk menjawab keluhan warga RW 05 Depok yang kerap kesulitan mengelola sampah rumah tangga sebelum diangkut petugas kebersihan. Fasilitator dari bank sampah binaan Komunitas Karsa mengajarkan teknik memilah sampah organik dan anorganik, serta cara membuat kompos sederhana menggunakan ember berlubang. Peserta yang sebagian besar ibu rumah tangga dan pengurus PKK juga praktik langsung membuat eco-enzyme dari sisa buah dan sayur.",
    date: "18 Januari 2026",
    time: "09.00 - 12.00 WIB",
    location: "Balai Warga RW 05, Kelurahan Sukmajaya, Depok",
    organizer: "Komunitas Karsa bersama PKK RW 05 Sukmajaya",
    participants: 47,
    target: "Melatih 40 ibu rumah tangga mempraktikkan pemilahan sampah dan pembuatan kompos",
    impact:
      "47 peserta hadir dan berhasil membuat 30 liter eco-enzyme serta 15 komposter rumah tangga dalam sehari",
    coverImage: COVER_LINGKUNGAN,
    images: IMAGES_LINGKUNGAN,
  },
  {
    id: "activity-004",
    title: "Konservasi Mangrove Pesisir Kamal",
    slug: "konservasi-mangrove-pesisir-kamal",
    category: "Lingkungan",
    shortDescription:
      "Menanam bibit mangrove untuk melindungi garis pantai Kamal dari abrasi.",
    description:
      "Abrasi yang terus menggerus garis pantai di kawasan Kamal, Jakarta Utara, mendorong Komunitas Karsa berkolaborasi dengan kelompok nelayan setempat untuk menanam bibit mangrove jenis Rhizophora. Peserta yang terdiri dari relawan, mahasiswa, dan nelayan menyusuri tambak untuk menanam bibit di titik-titik yang telah dipetakan sebelumnya, dilengkapi edukasi singkat tentang fungsi ekosistem mangrove bagi habitat ikan dan udang.",
    date: "22 Februari 2026",
    time: "07.00 - 10.30 WIB",
    location: "Kawasan Pesisir Kamal Muara, Jakarta Utara",
    organizer: "Komunitas Karsa bersama Kelompok Nelayan Kamal Muara",
    participants: 60,
    target: "Menanam 1.000 bibit mangrove di sepanjang 300 meter garis pantai",
    impact: "1.050 bibit mangrove tertanam dengan dukungan 60 relawan dan 12 nelayan lokal",
    coverImage: COVER_LINGKUNGAN,
    images: IMAGES_LINGKUNGAN,
  },

  // ===================== SOSIAL =====================
  {
    id: "activity-005",
    title: "Pembagian Sembako untuk Warga Terdampak Banjir",
    slug: "pembagian-sembako-untuk-warga-terdampak-banjir",
    category: "Sosial",
    shortDescription:
      "Menyalurkan paket sembako bagi warga yang rumahnya terendam banjir.",
    description:
      "Banjir yang merendam permukiman padat penduduk di bantaran Kali Sunter membuat puluhan keluarga kehilangan akses ke kebutuhan pokok. Komunitas Karsa menggalang donasi dari warga sekitar dan mitra usaha lokal untuk dikemas menjadi paket sembako berisi beras, minyak goreng, dan mi instan. Relawan turun langsung mendata keluarga terdampak dan mendistribusikan bantuan dari pintu ke pintu agar tepat sasaran.",
    date: "3 Maret 2026",
    time: "08.00 - 12.00 WIB",
    location: "RW 03 Kelurahan Cipinang Melayu, Jakarta Timur",
    organizer: "Komunitas Karsa bersama RT/RW setempat",
    participants: 38,
    target: "Menyalurkan 150 paket sembako kepada keluarga terdampak banjir",
    impact: "150 paket sembako tersalurkan kepada 150 keluarga, dibantu oleh 38 relawan lapangan",
    coverImage: COVER_SOSIAL,
    images: IMAGES_SOSIAL,
  },
  {
    id: "activity-006",
    title: "Donor Darah Peduli Sesama",
    slug: "donor-darah-peduli-sesama",
    category: "Sosial",
    shortDescription:
      "Menggalang stok darah untuk PMI melalui kegiatan donor darah massal.",
    description:
      "Menyusul menipisnya stok darah di PMI Kota Bogor, Komunitas Karsa berinisiatif menggelar kegiatan donor darah terbuka untuk umum, berkolaborasi dengan PMI dan sebuah rumah sakit swasta yang menyediakan tenaga medis serta unit mobil donor darah. Selain donor darah, panitia juga menyediakan sesi konsultasi kesehatan singkat serta pemeriksaan tekanan darah gratis bagi seluruh peserta yang hadir.",
    date: "14 April 2026",
    time: "08.30 - 13.00 WIB",
    location: "Aula Kelurahan Baranangsiang, Bogor",
    organizer: "Komunitas Karsa bersama PMI Kota Bogor",
    participants: 96,
    target: "Mengumpulkan minimal 80 kantong darah dari peserta yang memenuhi syarat",
    impact:
      "96 pendaftar hadir dan 74 kantong darah berhasil dikumpulkan untuk stok PMI Kota Bogor",
    coverImage: COVER_SOSIAL,
    images: IMAGES_SOSIAL,
  },
  {
    id: "activity-007",
    title: "Pasar Karya Warga",
    slug: "pasar-karya-warga",
    category: "Sosial",
    shortDescription:
      "Menghadirkan pasar murah kebutuhan pokok sekaligus panggung produk UMKM warga.",
    description:
      "Pasar Karya Warga digelar sebagai respons atas kenaikan harga kebutuhan pokok menjelang hari besar keagamaan yang memberatkan warga berpenghasilan rendah di sekitar Depok. Selain menjual sembako dengan harga di bawah pasaran, acara ini juga menjadi ruang promosi bagi pelaku UMKM lokal untuk memamerkan produk olahan makanan dan kerajinan tangan mereka, diiringi pertunjukan musik dari pelajar setempat.",
    date: "9 Mei 2026",
    time: "07.00 - 13.00 WIB",
    location: "Lapangan Kelurahan Beji, Depok",
    organizer: "Komunitas Karsa bersama Paguyuban UMKM Beji",
    participants: 210,
    target: "Menjual 500 paket sembako subsidi dan memfasilitasi 20 pelaku UMKM",
    impact:
      "480 paket sembako terjual habis dan 22 UMKM berhasil memamerkan produknya kepada lebih dari 200 pengunjung",
    coverImage: COVER_SOSIAL,
    images: IMAGES_SOSIAL,
  },
  {
    id: "activity-008",
    title: "Bakti Sosial untuk Lansia Mandiri",
    slug: "bakti-sosial-untuk-lansia-mandiri",
    category: "Sosial",
    shortDescription:
      "Memberi perhatian dan bantuan kebutuhan sehari-hari bagi lansia yang tinggal sendiri.",
    description:
      "Banyak lansia di kawasan padat penduduk Jakarta Selatan tinggal sendiri tanpa pendamping keluarga, sehingga rentan mengalami kesepian dan kesulitan memenuhi kebutuhan sehari-hari. Komunitas Karsa bersama karang taruna setempat mendatangi rumah-rumah lansia untuk memberikan paket kebutuhan pokok, memeriksa kondisi kesehatan dasar, serta sekadar menemani mengobrol sebagai bentuk kepedulian terhadap kelompok rentan di lingkungan perkotaan.",
    date: "27 Mei 2026",
    time: "09.00 - 12.00 WIB",
    location: "Kelurahan Pela Mampang, Jakarta Selatan",
    organizer: "Komunitas Karsa bersama Karang Taruna Pela Mampang",
    participants: 30,
    target: "Mengunjungi dan membantu 25 lansia yang tinggal sendiri di wilayah tersebut",
    impact:
      "28 lansia berhasil dikunjungi dan menerima paket kebutuhan pokok serta pemeriksaan kesehatan dasar",
    coverImage: COVER_SOSIAL,
    images: IMAGES_SOSIAL,
  },

  // ===================== EDUKASI =====================
  {
    id: "activity-009",
    title: "Ruang Belajar Akhir Pekan",
    slug: "ruang-belajar-akhir-pekan",
    category: "Edukasi",
    shortDescription:
      "Membuka kelas belajar gratis bagi anak-anak di permukiman padat setiap akhir pekan.",
    description:
      "Ruang Belajar Akhir Pekan hadir untuk anak-anak di kawasan padat penduduk yang minim akses bimbingan belajar tambahan di luar sekolah. Relawan mahasiswa dan guru muda bergiliran mengajarkan calistung, matematika dasar, hingga bahasa Inggris dengan metode belajar sambil bermain, dilengkapi sesi mendongeng untuk menumbuhkan minat baca sejak dini.",
    date: "14 Juni 2026",
    time: "09.00 - 11.30 WIB",
    location: "Balai RW 02, Kelurahan Kalibaru, Depok",
    organizer: "Komunitas Karsa bersama relawan mahasiswa",
    participants: 42,
    target: "Memberikan pendampingan belajar rutin bagi 35 anak usia sekolah dasar",
    impact:
      "42 anak mengikuti kegiatan secara konsisten setiap pekan, dengan 10 relawan pengajar terlibat",
    coverImage: COVER_EDUKASI,
    images: IMAGES_EDUKASI,
  },
  {
    id: "activity-010",
    title: "Pelatihan Literasi Digital untuk Guru",
    slug: "pelatihan-literasi-digital-untuk-guru",
    category: "Edukasi",
    shortDescription:
      "Membekali guru sekolah dasar dengan keterampilan mengajar menggunakan media digital.",
    description:
      "Banyak guru sekolah dasar di daerah pinggiran kota masih kesulitan mengadaptasi metode pembelajaran berbasis digital pasca perubahan kurikulum. Komunitas Karsa menggandeng praktisi pendidikan untuk memberikan pelatihan penggunaan aplikasi presentasi interaktif, kuis daring, dan pembuatan materi ajar berbasis video sederhana, ditutup dengan simulasi mengajar menggunakan perangkat yang telah dipelajari.",
    date: "20 Juli 2026",
    time: "08.00 - 15.00 WIB",
    location: "SDN 02 Cibinong, Kabupaten Bogor",
    organizer: "Komunitas Karsa bersama Dinas Pendidikan setempat",
    participants: 55,
    target: "Melatih 50 guru sekolah dasar dalam pemanfaatan media ajar digital",
    impact: "55 guru dari 12 sekolah mengikuti pelatihan dan menghasilkan 20 modul ajar digital baru",
    coverImage: COVER_EDUKASI,
    images: IMAGES_EDUKASI,
  },
  {
    id: "activity-011",
    title: "Kelas Kreatif Anak: Seni dari Barang Bekas",
    slug: "kelas-kreatif-anak-seni-dari-barang-bekas",
    category: "Edukasi",
    shortDescription:
      "Mengajak anak-anak berkreasi membuat karya seni dari sampah anorganik.",
    description:
      "Kelas kreatif ini dirancang untuk menumbuhkan kepekaan lingkungan sekaligus kreativitas anak melalui kegiatan mendaur ulang barang bekas seperti botol plastik dan kardus menjadi mainan dan hiasan. Relawan dari komunitas seni lokal memandu anak-anak membuat karya secara berkelompok, kemudian karya terbaik dipamerkan di akhir acara untuk menanamkan nilai kreativitas dan kepedulian lingkungan sejak dini.",
    date: "8 Agustus 2026",
    time: "13.00 - 16.00 WIB",
    location: "Taman Baca RW 07, Kelurahan Cimanggis, Depok",
    organizer: "Komunitas Karsa bersama Komunitas Seni Cimanggis",
    participants: 65,
    target: "Melibatkan 60 anak dalam pembuatan karya daur ulang secara berkelompok",
    impact:
      "65 anak berpartisipasi dan menghasilkan lebih dari 40 karya daur ulang yang dipamerkan kepada warga",
    coverImage: COVER_EDUKASI,
    images: IMAGES_EDUKASI,
  },
  {
    id: "activity-012",
    title: "Gerakan Membaca untuk Semua",
    slug: "gerakan-membaca-untuk-semua",
    category: "Edukasi",
    shortDescription:
      "Mendirikan pojok baca keliling untuk menumbuhkan minat baca anak di ruang publik.",
    description:
      "Rendahnya minat baca anak-anak di taman kota mendorong Komunitas Karsa menghadirkan pojok baca keliling berupa rak buku portabel yang dibawa menggunakan sepeda. Relawan literasi membacakan cerita bergambar dan mengajak anak-anak berdiskusi tentang isi buku setelah selesai membaca. Buku-buku yang digunakan merupakan hasil donasi warga dan penerbit yang peduli literasi anak.",
    date: "21 September 2026",
    time: "15.00 - 17.30 WIB",
    location: "Taman Kota 1, Kota Wisata, Cibubur, Jawa Barat",
    organizer: "Komunitas Karsa bersama relawan literasi",
    participants: 58,
    target: "Menjangkau 50 anak untuk membaca dan berdiskusi buku dalam satu sesi",
    impact:
      "58 anak hadir membaca buku, dengan 120 judul buku donasi berhasil dihimpun untuk pojok baca keliling",
    coverImage: COVER_EDUKASI,
    images: IMAGES_EDUKASI,
  },

  // ===================== KEMANUSIAAN =====================
  {
    id: "activity-013",
    title: "Bantuan Tanggap Darurat Longsor Cisarua",
    slug: "bantuan-tanggap-darurat-longsor-cisarua",
    category: "Kemanusiaan",
    shortDescription:
      "Menyalurkan bantuan darurat bagi korban longsor di kawasan Cisarua.",
    description:
      "Longsor yang menerjang permukiman di lereng Cisarua memaksa puluhan keluarga mengungsi ke tempat yang lebih aman. Komunitas Karsa bergerak cepat mendirikan posko bantuan darurat berisi tenda, selimut, obat-obatan, dan makanan siap saji. Relawan juga membantu proses evakuasi barang milik warga serta memberikan dukungan psikososial awal bagi anak-anak yang mengalami trauma akibat kejadian tersebut.",
    date: "15 Oktober 2026",
    time: "06.00 - 18.00 WIB",
    location: "Kampung Ciburial, Kecamatan Cisarua, Kabupaten Bogor",
    organizer: "Komunitas Karsa bersama BPBD Kabupaten Bogor",
    participants: 70,
    target: "Mendirikan posko darurat dan melayani kebutuhan dasar 40 keluarga terdampak",
    impact:
      "45 keluarga menerima bantuan darurat, dengan 70 relawan turun langsung dalam proses evakuasi dan distribusi logistik",
    coverImage: COVER_KEMANUSIAAN,
    images: IMAGES_KEMANUSIAAN,
  },
  {
    id: "activity-014",
    title: "Peduli Anak Yatim Nusantara",
    slug: "peduli-anak-yatim-nusantara",
    category: "Kemanusiaan",
    shortDescription:
      "Memberikan santunan dan pendampingan pendidikan bagi anak yatim di panti asuhan binaan.",
    description:
      "Program ini digagas untuk memberikan perhatian berkelanjutan kepada anak-anak yatim yang tinggal di panti asuhan mitra Komunitas Karsa. Selain memberikan santunan berupa dana pendidikan dan perlengkapan sekolah, relawan juga mengadakan sesi motivasi dan permainan edukatif untuk menjaga semangat belajar anak-anak, dengan harapan dapat berlanjut menjadi program pendampingan jangka panjang.",
    date: "8 November 2026",
    time: "09.00 - 13.00 WIB",
    location: "Panti Asuhan Nurul Iman, Parung, Kabupaten Bogor",
    organizer: "Komunitas Karsa bersama donatur individu",
    participants: 40,
    target: "Memberikan santunan pendidikan kepada 35 anak yatim di panti asuhan",
    impact:
      "38 anak menerima santunan dana pendidikan dan perlengkapan sekolah senilai total Rp45 juta",
    coverImage: COVER_KEMANUSIAAN,
    images: IMAGES_KEMANUSIAAN,
  },
  {
    id: "activity-015",
    title: "Layanan Kesehatan Gratis Keliling",
    slug: "layanan-kesehatan-gratis-keliling",
    category: "Kemanusiaan",
    shortDescription:
      "Menghadirkan pemeriksaan kesehatan gratis bagi warga yang sulit mengakses puskesmas.",
    description:
      "Keterbatasan akses layanan kesehatan di permukiman padat mendorong Komunitas Karsa menggandeng tenaga medis sukarela untuk menggelar layanan kesehatan keliling. Warga dapat memeriksakan tekanan darah, gula darah, dan kolesterol secara gratis, serta berkonsultasi langsung dengan dokter umum. Obat-obatan ringan turut dibagikan kepada peserta yang membutuhkan sesuai anjuran dokter.",
    date: "29 November 2026",
    time: "08.00 - 12.00 WIB",
    location: "Posyandu RW 04, Kelurahan Mekarjaya, Depok",
    organizer: "Komunitas Karsa bersama relawan tenaga medis",
    participants: 130,
    target: "Melayani pemeriksaan kesehatan gratis bagi 100 warga lanjut usia dan prasejahtera",
    impact:
      "130 warga terlayani pemeriksaan kesehatan, dengan 40 di antaranya dirujuk untuk pemeriksaan lanjutan",
    coverImage: COVER_KEMANUSIAAN,
    images: IMAGES_KEMANUSIAAN,
  },
  {
    id: "activity-016",
    title: "Donasi Pakaian Layak Pakai",
    slug: "donasi-pakaian-layak-pakai",
    category: "Kemanusiaan",
    shortDescription:
      "Mengumpulkan dan menyalurkan pakaian layak pakai bagi warga prasejahtera.",
    description:
      "Menumpuknya pakaian layak pakai yang tidak terpakai di rumah warga mendorong Komunitas Karsa membuka program donasi pakaian yang kemudian disortir dan dibersihkan sebelum disalurkan. Kegiatan ini menyasar warga prasejahtera di daerah pinggiran Jakarta yang membutuhkan pakaian untuk kebutuhan sehari-hari maupun menghadapi musim hujan, dilengkapi bazar pakaian gratis agar warga dapat memilih sendiri pakaian yang sesuai kebutuhan.",
    date: "13 Desember 2026",
    time: "08.00 - 11.00 WIB",
    location: "Lapangan Kelurahan Marunda, Jakarta Utara",
    organizer: "Komunitas Karsa bersama relawan lingkungan RW",
    participants: 45,
    target: "Mengumpulkan dan menyalurkan 1.000 potong pakaian layak pakai",
    impact: "1.150 potong pakaian berhasil dikumpulkan dan disalurkan kepada lebih dari 300 warga",
    coverImage: COVER_KEMANUSIAAN,
    images: IMAGES_KEMANUSIAAN,
  },

  // ===================== KOMUNITAS =====================
  {
    id: "activity-017",
    title: "Pemberdayaan UMKM Warung Kampung",
    slug: "pemberdayaan-umkm-warung-kampung",
    category: "Komunitas",
    shortDescription:
      "Mendampingi pelaku UMKM warung kecil dalam pengelolaan keuangan dan pemasaran digital.",
    description:
      "Banyak pelaku UMKM warung kecil di lingkungan padat penduduk belum memisahkan keuangan usaha dan pribadi, sehingga sulit berkembang. Komunitas Karsa mengadakan pendampingan berupa pelatihan pencatatan keuangan sederhana serta cara memasarkan produk melalui media sosial dan aplikasi pesan antar, dilengkapi konsultasi langsung dengan mentor bisnis dari relawan profesional.",
    date: "17 Januari 2026",
    time: "13.00 - 16.00 WIB",
    location: "Balai RW 06, Kelurahan Pancoran Mas, Depok",
    organizer: "Komunitas Karsa bersama mentor UMKM",
    participants: 33,
    target: "Mendampingi 30 pelaku UMKM warung kecil dalam pengelolaan keuangan dan pemasaran",
    impact:
      "33 pelaku UMKM mengikuti pendampingan dan 18 di antaranya berhasil membuka akun toko daring dalam sebulan",
    coverImage: COVER_KOMUNITAS,
    images: IMAGES_KOMUNITAS,
  },
  {
    id: "activity-018",
    title: "Gotong Royong Bersih Lingkungan Warga",
    slug: "gotong-royong-bersih-lingkungan-warga",
    category: "Komunitas",
    shortDescription:
      "Mengajak warga bergotong royong membersihkan saluran air dan area publik lingkungan.",
    description:
      "Menjelang musim hujan, saluran air di lingkungan RW 09 kerap tersumbat sampah sehingga menyebabkan genangan di beberapa titik jalan. Komunitas Karsa mengajak warga bergotong royong membersihkan saluran air, memangkas tanaman liar, dan menata ulang area publik seperti pos ronda dan taman kecil, sekaligus menjadi ajang mempererat kebersamaan antarwarga yang jarang bertemu karena kesibukan masing-masing.",
    date: "24 Februari 2026",
    time: "07.00 - 10.00 WIB",
    location: "Lingkungan RW 09, Kelurahan Harjamukti, Kota Bogor",
    organizer: "Komunitas Karsa bersama pengurus RW 09",
    participants: 75,
    target: "Membersihkan 1 km saluran air dan menata 3 titik fasilitas umum lingkungan",
    impact: "75 warga berpartisipasi, saluran air sepanjang 1,2 km berhasil dibersihkan dari sumbatan sampah",
    coverImage: COVER_KOMUNITAS,
    images: IMAGES_KOMUNITAS,
  },
  {
    id: "activity-019",
    title: "Festival Karya Warga",
    slug: "festival-karya-warga",
    category: "Komunitas",
    shortDescription:
      "Menampilkan hasil kerajinan dan kuliner warga dalam festival komunitas tahunan.",
    description:
      "Festival Karya Warga digelar sebagai wadah bagi warga untuk menampilkan hasil kerajinan tangan, kuliner rumahan, hingga pertunjukan seni budaya lokal. Kegiatan ini bertujuan memperkuat rasa memiliki warga terhadap lingkungan tempat tinggal sekaligus membuka peluang usaha baru bagi pelaku ekonomi kreatif rumahan. Berbagai lomba seperti lomba masak dan lomba menghias sepeda hias turut memeriahkan suasana festival.",
    date: "15 Maret 2026",
    time: "08.00 - 17.00 WIB",
    location: "Lapangan Kelurahan Sukatani, Kota Depok",
    organizer: "Komunitas Karsa bersama karang taruna dan PKK setempat",
    participants: 300,
    target: "Menghadirkan 40 lapak warga dan menjangkau minimal 250 pengunjung",
    impact:
      "45 lapak warga berpartisipasi dan festival dihadiri lebih dari 300 pengunjung dari berbagai wilayah",
    coverImage: COVER_KOMUNITAS,
    images: IMAGES_KOMUNITAS,
  },
  {
    id: "activity-020",
    title: "Pelatihan Kewirausahaan Pemuda",
    slug: "pelatihan-kewirausahaan-pemuda",
    category: "Komunitas",
    shortDescription:
      "Membekali pemuda dengan keterampilan merintis usaha mandiri sejak dini.",
    description:
      "Tingginya angka pemuda usia produktif yang belum memiliki pekerjaan tetap di wilayah pinggiran kota mendorong Komunitas Karsa menyelenggarakan pelatihan kewirausahaan dasar. Materi yang diberikan meliputi cara menemukan ide usaha, menyusun rencana bisnis sederhana, hingga strategi pemasaran melalui media sosial. Di akhir pelatihan, peserta diberi kesempatan mempresentasikan rencana usaha mereka di hadapan mentor bisnis lokal.",
    date: "26 April 2026",
    time: "09.00 - 15.00 WIB",
    location: "Gedung Serbaguna Kecamatan Ciputat, Tangerang Selatan",
    organizer: "Komunitas Karsa bersama mentor bisnis muda",
    participants: 52,
    target: "Melatih 50 pemuda dalam menyusun rencana usaha mandiri",
    impact:
      "52 pemuda mengikuti pelatihan hingga tuntas dan 15 di antaranya berhasil merintis usaha rintisan dalam tiga bulan berikutnya",
    coverImage: COVER_KOMUNITAS,
    images: IMAGES_KOMUNITAS,
  },
]