import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";
import ScrollToHashElement from "../src/utils/ScrollToHashElement";

import Nav from "./components/Nav";
import Homepage from "./pages/Homepage";

export default function App() {
  return (
  <div>
    <HashRouter>
    <ScrollToHashElement />
    <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </HashRouter>
  </div>
  );
}
