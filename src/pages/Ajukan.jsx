import React, { useState, useEffect } from "react";

const Ajukan = () => {
  const [pengaduan, setPengaduan] = useState([]);
  const [detail, setDetail] = useState(null);
  const [hapusId, setHapusId] = useState(null);


  const [dibacaIds, setDibacaIds] = useState(() => {
    const saved = localStorage.getItem("dibacaPengaduan");
    return saved ? JSON.parse(saved) : [];
  });
  


  // Ambil data dari backend saat halaman dimuat
  useEffect(() => {
    fetch("http://localhost:5000/api/pengaduan/semua")
      .then((res) => res.json())
      .then((data) => {
        const dataDenganTanggal = data.map((item) => ({
          ...item,
          tanggal: new Date(item.createdAt).toISOString().split("T")[0],
          telepon: item.noTelepon || "-", // sesuaikan key
        }));
        setPengaduan(dataDenganTanggal);
      })
      .catch((err) => console.error("Gagal mengambil data:", err));
  }, []);


  const handleHapus = (id) => {
    setHapusId(id);
  };

  const confirmHapus = async () => {
    try {
      await fetch(`http://localhost:5000/api/pengaduan/${hapusId}`, {
        method: "DELETE",
      });

      setPengaduan(pengaduan.filter((item) => item.id !== hapusId));
      if (detail && detail.id === hapusId) setDetail(null);
      setHapusId(null);
    } catch (err) {
      alert("Gagal menghapus pengaduan");
      console.error(err);
    }
  };

const handleDetail = (item) => {
  setDetail(item);
  if (!dibacaIds.includes(item.id)) {
    const updated = [...dibacaIds, item.id];
    setDibacaIds(updated);
    localStorage.setItem("dibacaPengaduan", JSON.stringify(updated));
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-teal-50 flex flex-col">
      <h2 className="text-3xl font-bold text-blue-700 text-center bg-white pt-10 pb-5 shadow border-b border-blue-100">
        Panel Pengaduan
      </h2>

      {/* Modal Detail */}
      {detail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md relative max-h-[90vh] overflow-auto">
            <button
              className="absolute top-2 right-3 text-gray-400 hover:text-red-500 text-2xl"
              onClick={() => setDetail(null)}
              title="Tutup"
            >
              &times;
            </button>
            <h3 className="text-lg font-bold text-blue-700 mb-4">Detail Pengaduan</h3>
            <div className="space-y-2 text-sm">
              <div>
                <span className="font-semibold">Nama:</span> {detail.nama}
              </div>
              <div>
                <span className="font-semibold">Email:</span> {detail.email}
              </div>
              <div>
                <span className="font-semibold">Jenis Kelamin:</span> {detail.jenisKelamin}
              </div>
              <div>
                <span className="font-semibold">Telepon:</span> {detail.noTelepon}
              </div>
              <div>
                <span className="font-semibold">Tanggal:</span> {detail.tanggal}
              </div>
              <div>
                <span className="font-semibold">Kronologi:</span>
                <div className="mt-1 bg-blue-50 rounded p-2 text-gray-700 break-words max-h-40 overflow-auto">
                  {detail.kronologi}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Konfirmasi Hapus */}
      {hapusId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-xs text-center relative">
            <h3 className="text-lg font-bold text-red-600 mb-2">Konfirmasi Hapus</h3>
            <p className="text-gray-700 mb-4">Yakin ingin menghapus pengaduan ini?</p>
            <div className="flex justify-center gap-3">
              <button
                className="bg-red-500 hover:bg-red-600 text-white rounded px-4 py-1 font-semibold"
                onClick={confirmHapus}
              >
                Hapus
              </button>
              <button
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 rounded px-4 py-1 font-semibold"
                onClick={() => setHapusId(null)}
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tabel */}
      <div className="flex-1 overflow-auto">
        <table className="w-full bg-white shadow text-sm">
          <thead>
            <tr className="bg-blue-100 text-blue-800">
              <th className="border border-blue-200 px-3 py-3 w-1 whitespace-nowrap">No</th>
              <th className="border border-blue-200 px-3 py-3">Nama</th>
              <th className="border border-blue-200 px-3 py-3">Email</th>
              <th className="border border-blue-200 px-3 py-3">Jenis Kelamin</th>
              <th className="border border-blue-200 px-3 py-3">Telepon</th>
              <th className="border border-blue-200 px-3 py-3 w-1 whitespace-nowrap">Tanggal</th>
              <th className="border border-blue-200 px-3 py-3">Kronologi</th>
              <th className="border border-blue-200 px-3 py-3 w-1 whitespace-nowrap">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {pengaduan.length === 0 ? (
              <tr>
                <td colSpan={8} className="text-center py-6 text-gray-400">
                  Tidak ada pengaduan.
                </td>
              </tr>
            ) : (
              pengaduan.map((item, idx) => (
                <tr
                  key={item.id}
                  className={`${!dibacaIds.includes(item.id)
                      ? "bg-yellow-50 animate-pulse"
                      : idx % 2 === 0
                        ? "bg-gray-50"
                        : ""
                    }`}
                >
                  <td className="border border-blue-100 px-2 py-3 text-center whitespace-nowrap">{idx + 1}</td>
                  <td className="border border-blue-100 px-2 py-3">{item.nama}</td>
                  <td className="border border-blue-100 px-2 py-3">{item.email}</td>
                  <td className="border border-blue-100 px-2 py-3">{item.jenisKelamin}</td>
                  <td className="border border-blue-100 px-2 py-3">{item.noTelepon}</td>
                  <td className="border border-blue-100 px-2 py-3 whitespace-nowrap">{item.tanggal}</td>
                  <td className="border border-blue-100 px-2 py-3">{item.kronologi}</td>
                  <td className="border border-blue-100 px-2 py-3 text-center whitespace-nowrap">
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white rounded px-3 py-0.5 text-xs font-semibold mr-1"
                      onClick={() => handleDetail(item)}
                    >
                      Detail
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white rounded px-3 py-0.5 text-xs font-semibold"
                      onClick={() => handleHapus(item.id)}
                    >
                      Hapus
                    </button>
                  </td>
                </tr>

              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Ajukan;