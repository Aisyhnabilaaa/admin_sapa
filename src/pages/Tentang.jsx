import React from "react";

const creators = [
  {
    name: "Syafa'at Ramadhan",
    role: "Frontend Developer",
    kontak: "@Yuchan_002",
    // img: "url/foto1.jpg"
  },
  {
    name: "Nama Pembuat 2",
    role: "Backend Developer",
    kontak: "email2@email.com",
    // img: "url/foto2.jpg"
  },
  {
    name: "Nama Pembuat 3",
    role: "UI/UX Designer",
    kontak: "email3@email.com",
    // img: "url/foto3.jpg"
  },
  // Tambahkan data pembuat lain di sini
];

const Tentang = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-blue-100 to-blue-200 flex items-center justify-center py-10">
      <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl w-full max-w-3xl border border-pink-100 animate-fade-in-up">
        <div className="flex flex-col items-center mb-8">
          <span className="text-4xl animate-bounce mb-2">🌸</span>
          <h2 className="text-3xl font-extrabold text-sky-800 mb-2">Tentang Kami</h2>
          <p className="text-gray-600 text-center text-base">
            Website ini dibuat oleh tim berikut untuk mendukung perlindungan perempuan dan anak di Kota Palu.
          </p>
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 pt-4">
          {creators.map((creator, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-gradient-to-br from-pink-100 via-blue-50 to-white rounded-2xl shadow p-6 border border-pink-100 max-w-xs w-full mx-auto min-w-0"
            >
              {/* Placeholder gambar */}
              <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center text-gray-400 text-4xl">
                <span>
                  <i className="ri-user-3-line"></i>
                </span>
              </div>
              <h3 className="font-bold text-sky-800 text-lg break-words text-center w-full">{creator.name}</h3>
              <p className="text-pink-600">{creator.role}</p>
              <p className="text-gray-500 text-sm mt-1 break-all">{creator.kontak}</p>
            </div>
          ))}
        </div>
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

export default Tentang;