const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-300 via-pink-200 to-sky-200 shadow-inner mt-20 text-sky-900 py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Copyright */}
        <div className="text-center md:text-left">
          <p>
            &copy; 2025 <span className="font-bold text-sky-800">KKN112_Balaroa</span>
          </p>
        </div>

        {/* Garis Putih Vertikal */}
        <div className="hidden md:block w-px h-16 bg-sky-400 opacity-50"></div>

        {/* Info Kontak */}
        <div className="contact-info flex flex-col gap-3 text-sm">
          <div className="flex items-center gap-3">
            <span className="bg-white/80 text-pink-600 rounded-full p-2 shadow-md">
              <i className="ri-mail-fill text-lg"></i>
            </span>
            <span className="hover:underline transition-all">pelindungkita123@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="bg-white/80 text-sky-700 rounded-full p-2 shadow-md">
              <i className="ri-map-pin-2-fill text-lg"></i>
            </span>
            <span>Jl. Yambaare</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 group"
            >
              <span className="bg-white/80 text-pink-500 rounded-full p-2 shadow-md group-hover:bg-pink-200 transition-all">
                <i className="ri-instagram-fill text-lg"></i>
              </span>
              <span className="hover:underline transition-all">@KKN112_Balaroa</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 group"
            >
              <span className="bg-white/80 text-sky-600 rounded-full p-2 shadow-md group-hover:bg-sky-200 transition-all">
                <i className="ri-global-line text-lg"></i>
              </span>
              <span className="hover:underline transition-all">www.sapa.com</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;