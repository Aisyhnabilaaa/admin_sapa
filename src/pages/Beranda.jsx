import { Link } from "react-router-dom";

const Beranda = () => {
  return (
    <div className="beranda bg-gradient-to-b from-white via-pink-50 to-blue-100 min-h-screen">
      <div className="container mx-auto">

        {/* Hero Section */}
        <div className="w-full bg-red-50 py-20">
          <div className="hero flex flex-col justify-center items-center text-center min-h-[60vh] max-w-2xl mx-auto px-4">
            <h1 className="text-5xl lg:text-7xl font-extrabold text-sky-800 mb-8 whitespace-nowrap">
              Selamat Datang di SAPA
            </h1>
            <p className="text-center lg:text-lg text-gray-600 mb-5">
              Sistem Pengaduan dan Perlindungan Perempuan dan Anak di Kota Palu. Wujud nyata untuk menciptakan ruang aman dan bebas kekerasan.
            </p>
            <Link
              to="/tentang"
              className="inline-block bg-sky-800 hover:bg-sky-700 text-white py-3 px-5 rounded-full font-semibold text-base transition">
              Tentang Kami <i className="ri-eye-line ml-2"></i>
            </Link>
          </div>
        </div>


        {/* Informasi Penting */}
        <div className="service mt-10">
          <h1 className="text-center text-4xl lg:text-5xl font-extrabold mb-4 text-sky-800 drop-shadow">Informasi Penting</h1>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 pt-12">
            {[
              { no: "1", title: "Perlindungan Hukum", desc: "Panduan hak korban kekerasan & perlindungan hukum yang tersedia." },
              { no: "2", title: "Kontak Darurat", desc: "Daftar kontak penting untuk keadaan darurat kekerasan." },
              { no: "3", title: "Akses Psikolog", desc: "Layanan konseling online & tatap muka dengan psikolog berlisensi." },
              { no: "4", title: "Informasi Edukatif", desc: "Edukasi lengkap tentang hak korban & cara melapor." }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-sky-200 via-pink-100 to-yellow-100 rounded-2xl shadow-xl p-8 border border-sky-100">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/80 shadow mx-auto">
                  <i className={`ri-number-${item.no} text-3xl text-sky-600`}></i>
                </div>
                <h3 className="text-xl font-bold text-sky-800 mt-6 mb-2">{item.title}</h3>
                <p className="text-gray-700 text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Data Kekerasan */}
        <div className="service pt-32">
          <h1 className="text-center text-4xl lg:text-5xl font-extrabold mb-4 text-sky-800 drop-shadow">Data Kekerasan di Indonesia</h1>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 pt-12">
            {[
              "2681 kasus kekerasan seksual di perguruan tinggi per April 2024 (Kemen PPPA).",
              "2078 kasus kekerasan seksual (24,69%) di 2023 menurut Komnas Perempuan.",
              "Kekerasan seksual meliputi pelecehan, pemerkosaan, eksploitasi paksa.",
              "59% KDRT adalah kekerasan terhadap istri.",
              "Kekerasan seksual melibatkan eksploitasi & prostitusi paksa.",
              "UU Nomor 12 Tahun 2022 lindungi korban kekerasan seksual."
            ].map((desc, index) => (
              <div key={index} className="bg-gradient-to-br from-sky-200 via-pink-100 to-yellow-100 rounded-2xl shadow-xl p-8 border border-sky-100">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/80 shadow mx-auto">
                  <i className={`ri-number-${index + 1} text-2xl text-sky-600`}></i>
                </div>
                <p className="text-gray-700 text-base mt-6">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Alur Pengaduan */}
        <div className="pt-32 animate-fade-in-up">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 flex justify-center">
              <img src="src/assets/img/Online consulting-amico.svg" alt="Ilustrasi Layanan" className="w-full max-w-md h-auto" />
            </div>

            <div className="w-full lg:w-1/2">
              <h1 className="text-4xl font-extrabold text-sky-800 drop-shadow">
                Alur Pengelolaan <span className="text-pink-500">Pengaduan!</span>
              </h1>
              <p className="text-gray-600 mt-4">
                Kami memahami pentingnya proses yang jelas dalam menangani pengaduan kekerasan.
              </p>

              <div className="mt-8 space-y-6">
                {[
                  { num: "1", title: "Pengaduan", desc: "Penyampaian laporan melalui SAPA secara langsung atau daring." },
                  { num: "2", title: "Penyampaian", desc: "Pengaduan diteruskan ke pihak berwenang terkait." },
                  { num: "3", title: "Penelitian", desc: "Pemeriksaan bukti dan klarifikasi oleh petugas." },
                  { num: "4", title: "Tindak Lanjut", desc: "Tindakan hukum atau mediasi untuk penyelesaian kasus." }
                ].map((step, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-sky-800 to-pink-400 text-white font-bold text-lg shadow">
                      {step.num}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-sky-800">{step.title}</h3>
                      <p className="text-gray-600">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="my-8 flex gap-4">
                <a href="#" className="border-2 border-sky-800 text-sky-800 py-2 px-8 rounded-full font-bold bg-white hover:bg-sky-800 hover:text-white shadow transition-all duration-200">
                  Get Started
                </a>
                <a href="#" className="border-2 border-pink-500 text-pink-500 py-2 px-8 rounded-full font-bold bg-white hover:bg-pink-500 hover:text-white shadow transition-all duration-200">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
      {/* Animasi fade-in sederhana hanya untuk bagian lain */}
      <style>
        {`
          .animate-fade-in-down {
            animation: fadeInDown 1s;
          }
          .animate-fade-in-up {
            animation: fadeInUp 1s;
          }
          @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-40px);}
            to { opacity: 1; transform: translateY(0);}
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(40px);}
            to { opacity: 1; transform: translateY(0);}
          }
        `}
      </style>
    </div>
  );
};

export default Beranda;