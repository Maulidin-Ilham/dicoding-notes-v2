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
import UserContext from "./contexts/UserContext";
import { fetchWithToken } from "./utils/fetchWithToken";
import LanguageContext from "./contexts/LanguageContext";

const App = () => {
  const [user, setUser] = useState(null);
  const [loginStatusChanged, setLoginStatusChanged] = useState(false);
  const [logoutChanged, setLogoutChanged] = useState(false);
  const BASE_URL = "https://notes-api.dicoding.dev/v1";
  const [isEnglish, setIsEnglish] = useState(false);

  const getValueForm = (data) => {
    if (data !== null) {
      setLoginStatusChanged(!loginStatusChanged);
    } else {
      return null;
    }
  };

  const logOut = () => {
    setLogoutChanged(!logoutChanged);
    localStorage.removeItem("accessToken");
  };

  useEffect(() => {
    const getLoggedIn = async () => {
      try {
        const response = await fetchWithToken(`${BASE_URL}/users/me`);
        const responseJson = await response.json();

        if (responseJson.status !== "success") {
          setUser(null);
          return { error: true, data: null };
        } else {
          setUser(responseJson.data.name);
          return { error: false, data: responseJson.data };
        }
      } catch (error) {
        setUser(null);
        return { error: true, data: null };
      }
    };

    getLoggedIn();
  }, [loginStatusChanged, logoutChanged]);

  if (user === null) {
    return (
      <LanguageContext.Provider value={{ isEnglish, setIsEnglish }}>
        <UserContext.Provider value={{ user, logOut }}>
          <Router>
            <Routes>
              <Route path="/" element={<Login getValueForm={getValueForm} />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Router>
        </UserContext.Provider>
      </LanguageContext.Provider>
    );
  }

  if (user !== null) {
    return (
      <LanguageContext.Provider value={{ isEnglish, setIsEnglish }}>
        <UserContext.Provider value={{ user, logOut }}>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/arsip" element={<Arsip />} />
              <Route path="/notes/:noteId" element={<DetailPage />} />
              <Route path="/notes/newnotes" element={<NewNote />} />
              <Route
                path="/login"
                element={<Login getValueForm={getValueForm} />}
              />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </UserContext.Provider>
      </LanguageContext.Provider>
    );
  }
};

export default App;
