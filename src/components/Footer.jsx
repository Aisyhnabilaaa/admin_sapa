const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-300 via-pink-200 to-sky-200 shadow-inner text-sky-900 py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Copyright */}
        <div className="text-center md:text-left md:w-1/3">
          <p>
            &copy; 2025 <span className="font-bold text-sky-800">KKN112_Balaroa</span>
          </p>
        </div>

        {/* Garis Vertikal */}
        <div className="hidden md:block w-px h-12 bg-sky-500 opacity-50"></div>

        {/* Info Kontak - Dijajar Horizontal */}
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-6 md:w-2/3 text-sm">
          <div className="flex items-center gap-2">
            <span className="bg-white/80 text-pink-600 rounded-full p-2 shadow-md">
              <i className="ri-mail-fill text-lg"></i>
            </span>
            <span className="hover:underline transition-all">sapabalaroa@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-white/80 text-sky-700 rounded-full p-2 shadow-md">
              <i className="ri-map-pin-2-fill text-lg"></i>
            </span>
            <span>Kelurahan Balaroa</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-white/80 text-pink-500 rounded-full p-2 shadow-md">
              <i className="ri-instagram-fill text-lg"></i>
            </span>
            <span className="hover:underline transition-all">sapabalaroa_21</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
