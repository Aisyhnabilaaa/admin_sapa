import React from "react";

const Panduan = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-blue-100 to-blue-200 flex items-center justify-center py-10">
      <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl w-full max-w-3xl border border-pink-100 animate-fade-in-up">
        <div className="flex flex-col items-center mb-8">
          <span className="text-4xl animate-bounce mb-2">📖</span>
          <h2 className="text-3xl font-extrabold text-sky-800 mb-2">Panduan Penggunaan SAPA</h2>
          <p className="text-gray-600 text-center text-base">
            Ikuti langkah-langkah berikut untuk melaporkan kekerasan secara mudah dan aman melalui SAPA.
          </p>
        </div>
        <ol className="space-y-6 text-gray-700">
          <li className="flex items-start gap-4">
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-sky-800 to-pink-400 text-white font-bold text-lg shadow">
              1
            </span>
            <div>
              <h3 className="font-semibold text-sky-800">Isi Form Pengaduan</h3>
              <p>Masukkan informasi dengan lengkap, termasuk kronologi kejadian serta nomor telepon atau email yang bisa dihubungi.</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-sky-800 to-pink-400 text-white font-bold text-lg shadow">
              2
            </span>
            <div>
              <h3 className="font-semibold text-sky-800">Kirim Laporan</h3>
              <p>Setelah memastikan semua data benar, klik kirim. Laporan Anda akan langsung diterima oleh admin SAPA.</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-sky-800 to-pink-400 text-white font-bold text-lg shadow">
              3
            </span>
            <div>
              <h3 className="font-semibold text-sky-800">Tunggu Dihubungi</h3>
              <p>Admin SAPA akan menghubungi Anda melalui kontak yang telah Anda cantumkan untuk menindaklanjuti laporan tersebut.</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-sky-800 to-pink-400 text-white font-bold text-lg shadow">
              4
            </span>
            <div>
              <h3 className="font-semibold text-sky-800">Jaga Kerahasiaan</h3>
              <p>Pastikan data pribadi dan isi laporan tidak dibagikan ke pihak lain untuk menjaga privasi dan keamanan Anda.</p>
            </div>
          </li>
        </ol>
      </div>
      <style>
        {`
          .animate-fade-in-up {
            animation: fadeInUp 1s;
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

export default Panduan;
