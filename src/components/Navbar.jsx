import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const [show, setShow] = useState(false);
    const [scroll, setScroll] = useState(false);
    const location = useLocation();

    const handleClick = () => {
        setShow(!show);
    };

    let menuActive = show ? "left-0" : "-left-full";

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 5) {
                setScroll(true);
                setShow(false);
            } else {
                setScroll(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Hide navbar on login/register page
    // if (location.pathname === "/login" || location.pathname === "/register") {
    //     return null;
    // }

    let scrollActive = scroll
        ? "py-3 bg-gradient-to-r from-pink-300 via-pink-200 to-sky-200 shadow-lg border-b border-pink-200"
        : "py-6 bg-gradient-to-r from-pink-200 via-pink-100 to-sky-100";

    return (
        <>
            {/* Navbar Fixed */}
            <div className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${scrollActive}`}>
                <div className="container mx-auto px-4">
                    <div className="navbar-box flex items-center justify-between">
                        <div className="logo flex items-center gap-2">
                        <Link to="/" className="text-3xl animate-bounce" aria-label="Beranda">
                            🌸
                        </Link>
                        <h1 className="text-2xl font-extrabold tracking-widest text-sky-800 drop-shadow">SAPA</h1>
                        </div>
                        <ul
                            className={`fixed ${menuActive} top-1/2 -translate-y-1/2 flex flex-col gap-4 px-8 py-6 rounded-xl shadow-2xl shadow-pink-200 bg-white/90 font-bold text-sky-800 transition-all duration-300
                            md:static md:flex-row md:shadow-none md:bg-transparent md:w-auto md:h-full md:translate-y-0 md:text-sky-800 md:p-0 md:m-0 md:transition-none lg:gap-12`}
                        >
                        {/* <li>
                            <Link
                                to="/"
                                className="font-semibold transition-all duration-200 hover:bg-pink-200 hover:text-sky-900 rounded-full px-5 py-2 shadow hover:shadow-lg"
                            >
                                Beranda
                            </Link>
                        </li> */}
                                                <li>
                            <Link
                                to="/"
                                className="font-semibold transition-all duration-200 hover:bg-pink-200 hover:text-sky-900 rounded-full px-5 py-2 shadow hover:shadow-lg"
                            >
                                Panel Pengaduan
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/panduan"
                                className="font-semibold transition-all duration-200 hover:bg-pink-200 hover:text-sky-900 rounded-full px-5 py-2 shadow hover:shadow-lg"
                            >
                                Panduan
                            </Link>
                        </li>
                            {/* <li className="md:hidden">
                                <Link
                                    to="/login"
                                    className="bg-sky-800 px-5 py-2 rounded-full text-white font-bold hover:bg-sky-700 transition-all duration-200 shadow"
                                >
                                    Login
                                </Link>
                            </li> */}
                            <li className="md:hidden">
                                <Link
                                    to="/register"
                                    className="bg-pink-500 px-5 py-2 rounded-full text-white font-bold hover:bg-pink-600 transition-all duration-200 shadow"
                                >
                                    Register
                                </Link>
                            </li>
                        </ul>
                        {/* <div className="hidden md:flex items-center gap-2">
                            <Link
                                to="/login"
                                className="bg-sky-800 px-5 py-2 rounded-full text-white font-bold hover:bg-sky-700 transition-all duration-200 shadow"
                            >
                                Login
                            </Link>
                            <Link
                                to="/register"
                                className="bg-pink-500 px-5 py-2 rounded-full text-white font-bold hover:bg-pink-600 transition-all duration-200 shadow"
                            >
                                Register
                            </Link>
                        </div> */}
                        <button
                            className="md:hidden ml-4 text-3xl text-sky-800 focus:outline-none transition-all"
                            onClick={handleClick}
                            aria-label="Toggle menu"
                        >
                            {show ? (
                                <span>&#10005;</span> // X icon
                            ) : (
                                <span>&#9776;</span> // Hamburger icon
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {/* Tambahkan Padding agar tidak tertutup Navbar */}
            <div className="pt-20"></div>
        </>
    );
};

export default Navbar;