/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Arsip from "./pages/Arsip";
import DetailPage from "./pages/DetailPage";
import NewNote from "./pages/NewNote";
import NotFound from "./pages/NotFound";
import { data } from "./utils/data";
import { useState } from "react";

const App = () => {
  const [notes, setNotes] = useState(data);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home notes={notes} />} />
        <Route path="/arsip" element={<Arsip />} />
        <Route path="/note/:noteId" element={<DetailPage />} />
        <Route path="/note/newnote" element={<NewNote />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
