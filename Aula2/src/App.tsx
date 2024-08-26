import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Afton, Morning, Nightcrawler } from "./pages";
import Menu from "./components/Menu";
function App() {
  return (
    <BrowserRouter>
    <Menu/>
      <Routes>
        <Route path="/morning" element={<Morning />} />
        <Route path="/afternoon" element={<Afton />} />
        <Route path="/night" element={<Nightcrawler />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
