import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // ...proses login (validasi, dsb) di sini jika ada...
    navigate("/"); // redirect ke beranda
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-blue-200 to-blue-400 flex items-center justify-center">
      <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-80 border border-blue-100">
        <div className="flex flex-col items-center mb-6">
          <span className="text-4xl animate-bounce mb-2">🔒</span>
          <h2 className="text-2xl font-extrabold text-sky-800">Login</h2>
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="relative">
            <span className="absolute left-3 top-2.5 text-blue-400">
              <i className="ri-mail-line"></i>
            </span>
            <input
              type="email"
              placeholder="Email"
              className="pl-10 pr-3 py-2 border rounded-full w-full focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
            />
          </div>
          <div className="relative">
            <span className="absolute left-3 top-2.5 text-blue-400">
              <i className="ri-lock-2-line"></i>
            </span>
            <input
              type="password"
              placeholder="Password"
              className="pl-10 pr-3 py-2 border rounded-full w-full focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
            />
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-sky-700 to-pink-400 text-white py-2 rounded-full font-bold shadow hover:scale-105 hover:shadow-lg transition-all"
          >
            Login
          </button>
        </form>
        <p className="text-center mt-4 text-sm">
          Belum punya akun?{" "}
          <a
            href="/register"
            className="text-pink-600 font-semibold underline hover:text-sky-700 transition"
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;