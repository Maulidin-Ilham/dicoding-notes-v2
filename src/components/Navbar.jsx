import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center bg-black text-white py-5 px-4 shadow-sm">
      <Link to={"/"}>
        <h1 className="font-semibold text-lg">Aplikasi catatan</h1>
      </Link>
      <Link to={"/arsip"}>
        <h1 className="font-semibold text-lg">Arsip</h1>
      </Link>
    </div>
  );
};

export default Navbar;
