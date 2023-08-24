import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";
import Nav from "./layouts/Nav";
import Footer from "./layouts/Footer";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project"

export default function App() {
  return (
  <div>
    <HashRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      <Footer />
    </HashRouter>
  </div>
  );
}
