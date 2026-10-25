import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Ajukan from "./pages/Ajukan";
import Panduan from "./pages/Panduan";
import Tentang from "./pages/Tentang";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Ajukan />} />
        <Route path="/panduan" element={<Panduan />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;