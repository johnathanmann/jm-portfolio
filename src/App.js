import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";

import Nav from "./components/Nav";
import Homepage from "./pages/Homepage";

export default function App() {
  return (
  <div>
    <Nav />
    <HashRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </HashRouter>
  </div>
  );
}
