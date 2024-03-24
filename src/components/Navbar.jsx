import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeBtn from "./ThemeBtn";
import LanguageBtn from "./LanguageBtn";

const Navbar = () => {
  const location = useLocation();
  const [isDark, setIsDark] = useState(false);
  const [isBahasa, setIsBahasa] = useState(true);

  const toggleTheme = () => {
    if (isDark) {
      setIsDark(false);
    } else {
      setIsDark(true);
    }
  };

  const toggleLanguage = () => {
    if (isBahasa) {
      setIsBahasa(false);
    } else {
      setIsBahasa(true);
    }
  };

  const isLoginNavbar = () => {
    if (
      location.pathname === "/" ||
      location.pathname === "/arsip" ||
      location.pathname === "/notes/newnotes" ||
      location.pathname === "*"
    ) {
      return (
        <>
          {" "}
          <Link to={"/notes/newnotes"}>
            <h1 className="font-semibold text-lg hover:opacity-80 transition ease-in-out duration-200">
              Tambah Note
            </h1>
          </Link>
          <Link to={"/arsip"}>
            <h1 className="font-semibold text-lg hover:opacity-80 transition ease-in-out duration-200">
              Arsip
            </h1>
          </Link>
        </>
      );
    } else if (
      location.pathname === "/login" ||
      location.pathname === "/register"
    ) {
      return (
        <>
          <div className="cursor-pointer" onClick={() => toggleLanguage()}>
            <h1 className="font-semibold text-lg hover:opacity-80 transition ease-in-out duration-200">
              <LanguageBtn isBahasa={isBahasa} />
            </h1>
          </div>

          <div className="cursor-pointer" onClick={() => toggleTheme()}>
            <h1 className="font-semibold text-lg hover:opacity-80 transition ease-in-out duration-200">
              <ThemeBtn isDark={isDark} />
            </h1>
          </div>
        </>
      );
    }
  };

  return (
    <div className="flex flex-row justify-between items-center bg-black text-white py-5 px-4 shadow-sm">
      <Link to={"/"}>
        <h1 className="font-semibold text-lg cursor-pointer hover:opacity-80 transition ease-in-out duration-200">
          Aplikasi catatan
        </h1>
      </Link>
      <div className="flex flex-row space-x-5 items-center justify-center">
        {isLoginNavbar()}
      </div>
    </div>
  );
};

export default Navbar;
