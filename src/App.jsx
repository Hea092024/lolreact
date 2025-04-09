import { BrowserRouter, Routes, Route } from "react-router-dom";
import SonaPage from "./components/SonaPage";
import YuumiPage from "./components/YuumiPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SonaPage />} />
        <Route path="/yuumi" element={<YuumiPage />} />
        <Route path="/lux" element={<div>Lux Page Coming Soon</div>} />
        <Route
          path="/seraphine"
          element={<div>Seraphine Page Coming Soon</div>}
        />
      </Routes>
    </BrowserRouter>
  );
}
