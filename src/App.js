import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";
import ScrollToHashElement from "../src/utils/ScrollToHashElement";

import Nav from "./components/Nav";
import Homepage from "./pages/Homepage";
import Project from "./pages/Project"

export default function App() {
  return (
  <div>
    <HashRouter>
    <ScrollToHashElement />
    <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/project" element={<Project />}/>
      </Routes>
    </HashRouter>
  </div>
  );
}
