import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";
import { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';
import Nav from "./layouts/Nav";
import Footer from "./layouts/Footer";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project"

export default function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
  <div>
    <HashRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/project" element={<Project />}/>
      </Routes>
      <Footer />
    </HashRouter>
  </div>
  );
}
