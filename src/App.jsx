import { BrowserRouter, Routes, Route } from "react-router-dom";
import Master from "./components/Master";
import Temperature from "./components/Temperature";
import Population from "./components/population";

function App() {
  return (
    <BrowserRouter>
      <Master /> {/* Navbar always visible */}
      <Routes>
        <Route
          path="/"
          element={<h3>Welcome to API access via Axios - Main Page!</h3>}
        />
        <Route path="/temperature" element={<Temperature />} />
        <Route path="/population" element={<Population />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

