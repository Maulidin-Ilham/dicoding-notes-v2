/* eslint-disable no-unused-vars */
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Arsip from "./pages/Arsip";
import DetailPage from "./pages/DetailPage";
import NewNote from "./pages/NewNote";
import NotFound from "./pages/NotFound";
import { data } from "./utils/data";
import { useEffect, useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import useLogged from "./hooks/useLogged";

const App = () => {
  const [notes, setNotes] = useState(data);
  const { getLoggedIn } = useLogged();
  const [isLogin, setIslogin] = useState(false);

  useEffect(() => {
    const { error } = getLoggedIn();
    if (error) {
      console.log("error");
    } else {
      setIslogin(true);
    }
  }, []);

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

  const getArchivedId = (noteId) => {
    const updatedNotes = notes.map((note) =>
      note.id === noteId ? { ...note, archived: true } : note
    );
    setNotes(updatedNotes);
  };

  const getUnarchivedId = (noteId) => {
    const updatedNotes = notes.map((note) =>
      note.id === noteId ? { ...note, archived: false } : note
    );
    setNotes(updatedNotes);
  };

  if (isLogin) {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home notes={activeNotes} />} />
          <Route path="/arsip" element={<Arsip notes={archivedNotes} />} />
          <Route
            path="/notes/:noteId"
            element={
              <DetailPage
                notes={notes}
                getDeleteId={getDeleteId}
                getArchivedId={getArchivedId}
                getUnarchivedId={getUnarchivedId}
              />
            }
          />
          <Route
            path="/notes/newnotes"
            element={<NewNote getValueForm={getValueForm} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    );
  } else {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    );
  }
};

export default App;
