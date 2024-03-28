import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ThemeBtn from "./ThemeBtn";
import LanguageBtn from "./LanguageBtn";
import UserContext from "../contexts/UserContext";
import LanguageContext from "../contexts/LanguageContext";

const Navbar = () => {
  const location = useLocation();
  const [isDark, setIsDark] = useState(false);

  const { user, logOut } = useContext(UserContext);
  const { isEnglish, setIsEnglish } = useContext(LanguageContext);
  const navigate = useNavigate();

  const toggleTheme = () => {
    if (isDark) {
      setIsDark(false);
    } else {
      setIsDark(true);
    }
  };

  const toggleLanguage = () => {
    if (isEnglish) {
      setIsEnglish(false);
    } else {
      setIsEnglish(true);
    }
  };

  const handlerLogout = () => {
    logOut();
    navigate("/");
  };

  const isLoginNavbar = () => {
    if (
      location.pathname === "/" ||
      location.pathname === "/arsip" ||
      location.pathname === "/notes/newnotes" ||
      location.pathname === "*" ||
      location.pathname.includes("/notes/")
    ) {
      return (
        <>
          <div className="cursor-pointer" onClick={() => toggleLanguage()}>
            <h1 className="font-semibold text-lg hover:opacity-60 transition ease-in-out duration-200">
              <LanguageBtn isEnglish={isEnglish} />
            </h1>
          </div>

          <div className="cursor-pointer" onClick={() => toggleTheme()}>
            <h1 className="font-semibold text-lg hover:opacity-60 transition ease-in-out duration-200">
              <ThemeBtn isDark={isDark} />
            </h1>
          </div>
          {user !== null && (
            <Link
              to={"/notes/newnotes"}
              title={isEnglish ? "Add Notes" : "Tambah Note"}
            >
              <h1 className="font-semibold text-2xl hover:opacity-60 transition ease-in-out duration-200 ">
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                >
                  <path d="M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494zM544 472c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v108H372c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h108v108c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V644h108c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V472z" />
                </svg>
              </h1>
            </Link>
          )}
          {user !== null && (
            <Link to={"/arsip"} title={isEnglish ? "Archive" : "Arsip"}>
              <h1 className="font-semibold text-2xl hover:opacity-60 transition ease-in-out duration-200">
                <svg
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                >
                  <path d="M0 2a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1v7.5a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 011 12.5V5a1 1 0 01-1-1V2zm2 3v7.5A1.5 1.5 0 003.5 14h9a1.5 1.5 0 001.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z" />
                </svg>
              </h1>
            </Link>
          )}
          {user !== null ? (
            <>
              <Link onClick={() => handlerLogout()}>
                <h1 className="font-semibold text-2xl hover:opacity-60 transition ease-in-out duration-200">
                  {user}
                </h1>
              </Link>
            </>
          ) : null}
        </>
      );
    } else if (
      location.pathname === "/login" ||
      location.pathname === "/register"
    ) {
      return (
        <>
          <div className="cursor-pointer" onClick={() => toggleLanguage()}>
            <h1 className="font-semibold text-lg hover:opacity-60 transition ease-in-out duration-200">
              <LanguageBtn isEnglish={isEnglish} />
            </h1>
          </div>

          <div className="cursor-pointer" onClick={() => toggleTheme()}>
            <h1 className="font-semibold text-lg hover:opacity-60 transition ease-in-out duration-200">
              <ThemeBtn isDark={isDark} />
            </h1>
          </div>
        </>
      );
    }
  };

  return (
    <div className="flex flex-row justify-between items-center bg-white text-black py-5 px-4 shadow-md">
      <Link to={"/"}>
        <h1 className="font-semibold text-lg cursor-pointer hover:opacity-60 transition ease-in-out duration-200">
          {isEnglish ? "Note's App" : "Aplikasi Catatan"}
        </h1>
      </Link>
      <div className="flex flex-row space-x-5 items-center justify-center">
        {isLoginNavbar()}
      </div>
    </div>
  );
};

export default Navbar;
