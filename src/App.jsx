import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Arsip from "./pages/Arsip";
import DetailPage from "./pages/DetailPage";
import NewNote from "./pages/NewNote";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/arsip" element={<Arsip />} />
        <Route path="/note/:noteId" element={<DetailPage />} />
        <Route path="/note/newnote" element={<NewNote />} />
      </Routes>
    </Router>
  );
};

export default App;
