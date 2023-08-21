import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";
import Nav from "./layouts/Nav";
import Footer from "./layouts/Footer";
import Homepage from "./pages/Homepage";
import Project from "./pages/Project"

export default function App() {
  return (
  <div>
    <HashRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/project" element={<Project />}/>
      </Routes>
      <Footer />
    </HashRouter>
  </div>
  );
}
