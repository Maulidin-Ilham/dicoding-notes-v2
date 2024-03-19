import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center bg-black text-white py-5 px-4 shadow-sm">
      <Link to={"/"}>
        <h1 className="font-semibold text-lg cursor-pointer hover:opacity-80 transition ease-in-out duration-200">
          Aplikasi catatan
        </h1>
      </Link>
      <div className="flex flex-row space-x-5 items-center justify-center">
        <Link to={"/notes/newnotes"}>
          <h1 className="font-semibold text-lg hover:opacity-80 transition ease-in-out duration-200">
            Add note
          </h1>
        </Link>
        <Link to={"/arsip"}>
          <h1 className="font-semibold text-lg hover:opacity-80 transition ease-in-out duration-200">
            Arsip
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
