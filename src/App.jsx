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

import { useEffect, useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: "notes-1",
      title: "Babel",
      body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
      createdAt: "2022-04-14T04:27:34.572Z",
      archived: false,
    },
    {
      id: "notes-2",
      title: "Babel",
      body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
      createdAt: "2022-04-14T04:27:34.572Z",
      archived: false,
    },
  ]);

  const initialNotes = [
    {
      id: "notes-1",
      title: "Babel",
      body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
      createdAt: "2022-04-14T04:27:34.572Z",
      archived: false,
    },
    {
      id: "notes-2",
      title: "Babel2",
      body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
      createdAt: "2022-04-14T04:27:34.572Z",
      archived: false,
    },
  ];

  const [isLogin, setIsLogin] = useState(true);

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
    console.log("masuk cek login");
    return (
      <Router>
        <Routes>
          {" "}
          <Route path="/" element={<Home />} />
          <Route path="/arsip" element={<Arsip />} />
          <Route
            path="/notes/:noteId"
            element={
              <DetailPage
                getDeleteId={getDeleteId}
                getArchivedId={getArchivedId}
                getUnarchivedId={getUnarchivedId}
              />
            }
          />
          <Route path="/notes/newnotes" element={<NewNote />} />
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
