// Alamat backend API. Bisa diganti tanpa mengubah kode dengan membuat file
// .env berisi: VITE_API_URL=https://alamat-backend/api
export const API_URL =
  import.meta.env.VITE_API_URL ??
  "https://backendsapa-production.up.railway.app/api";
