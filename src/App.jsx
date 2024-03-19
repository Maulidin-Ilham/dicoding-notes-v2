import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Arsip from "./pages/Arsip";
import DetailPage from "./pages/DetailPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/arsip" element={<Arsip />} />
        <Route path="/note/:noteId" element={<DetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
