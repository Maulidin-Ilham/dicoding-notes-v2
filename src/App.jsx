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
import useLogged from "./hooks/useLogged";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const { getLoggedIn } = useLogged();

  useEffect(() => {
    const loginCheck = async () => {
      const { error, data } = await getLoggedIn();
      if (!error) {
        setIsLogin(true);
        console.log(data);
      } else {
        setIsLogin(false);
        console.log("error");
      }
    };

    loginCheck();
  }, []);

  if (isLogin) {
    console.log("masuk cek login");
    return (
      <Router>
        <Routes>
          {" "}
          <Route path="/" element={<Home />} />
          <Route path="/arsip" element={<Arsip />} />
          <Route path="/notes/:noteId" element={<DetailPage />} />
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
