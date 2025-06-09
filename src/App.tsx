import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GeoLocation from "./pages/GeoLocation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GeoLocation />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
