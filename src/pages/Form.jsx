import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    reportDetails: "",
    complaintType: "",
    subject: "",
    location: "",
    date: "",
    description: "",
    evidence: [],
    reportedName: "",
    reportedID: "",
    reportedPosition: "",
    integrity: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (type === "file") {
      setFormData({ ...formData, [name]: files });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data Formulir:", formData);
    alert("Laporan telah dikirim.");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Formulir Pengaduan KPPN Palu</h2>
      <p className="text-sm text-gray-500 text-center mb-6">Kami akan merahasiakan identitas pelapor.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Identitas Pelapor */}
        <h3 className="font-semibold">Identitas Pelapor</h3>
        <input type="text" name="name" placeholder="Nama/Inisial" className="w-full p-2 border rounded" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email Aktif" className="w-full p-2 border rounded" onChange={handleChange} required />
        <input type="text" name="address" placeholder="Alamat" className="w-full p-2 border rounded" onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Nomor Telepon Aktif" className="w-full p-2 border rounded" onChange={handleChange} required />

        {/* Detail Pengaduan */}
        <h3 className="font-semibold">Detail Informasi Pengaduan</h3>
        <label className="flex items-center">
          <input type="checkbox" name="reportDetails" onChange={handleChange} required className="mr-2" />
          Saya memahami bahwa pengaduan harus memenuhi unsur 5W + 1H.
        </label>
        <textarea name="description" placeholder="Isi Aduan (Detail Informasi Pengaduan)" className="w-full p-2 border rounded h-24" onChange={handleChange} required></textarea>

        {/* Jenis Aduan */}
        <label className="block font-semibold">Jenis Aduan:</label>
        <div className="flex flex-col space-y-2">
          {["Pelayanan", "Kode Etik", "Lain-Lain"].map((type) => (
            <label key={type} className="flex items-center">
              <input type="radio" name="complaintType" value={type} onChange={handleChange} required className="mr-2" />
              {type}
            </label>
          ))}
        </div>

        {/* Perihal */}
        <input type="text" name="subject" placeholder="Perihal" className="w-full p-2 border rounded" onChange={handleChange} required />
        
        {/* Lokasi Kejadian */}
        <input type="text" name="location" placeholder="Lokasi Kejadian" className="w-full p-2 border rounded" onChange={handleChange} required />
        
        {/* Tanggal Kejadian */}
        <input type="date" name="date" className="w-full p-2 border rounded" onChange={handleChange} required />

        {/* Bukti Pendukung */}
        <label className="block font-semibold">Unggah Bukti Pendukung:</label>
        <input type="file" name="evidence" multiple accept="image/*, application/pdf" className="w-full p-2 border rounded" onChange={handleChange} />

        {/* Data Terlapor */}
        <h3 className="font-semibold">Data Terlapor</h3>
        <input type="text" name="reportedName" placeholder="Nama Terlapor" className="w-full p-2 border rounded" onChange={handleChange} required />
        <input type="text" name="reportedID" placeholder="NIP/NIK" className="w-full p-2 border rounded" onChange={handleChange} />
        <input type="text" name="reportedPosition" placeholder="Jabatan" className="w-full p-2 border rounded" onChange={handleChange} required />

        {/* Pernyataan Integritas */}
        <label className="flex items-center">
          <input type="checkbox" name="integrity" onChange={handleChange} required className="mr-2" />
          Saya telah memberikan informasi dengan yakin dan penuh integritas.
        </label>

        {/* Tombol Kirim */}
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Kirim Laporan</button>
      </form>
    </div>
  );
};

export default Form;
