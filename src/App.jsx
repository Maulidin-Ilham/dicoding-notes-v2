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
  const archivedNotes = notes.filter((note) => note.archived === true);
  const activeNotes = notes.filter((note) => note.archived === false);

  const addNotes = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const getValueForm = (value) => {
    addNotes(value);
  };

  const getDeleteId = (noteId) => {
    const filteredNotes = notes.filter((note) => note.id !== noteId);
    setNotes(filteredNotes);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home notes={activeNotes} />} />
        <Route path="/arsip" element={<Arsip notes={archivedNotes} />} />
        <Route
          path="/notes/:noteId"
          element={<DetailPage notes={notes} getDeleteId={getDeleteId} />}
        />
        <Route
          path="/notes/newnotes"
          element={<NewNote getValueForm={getValueForm} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
