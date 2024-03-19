/* eslint-disable react/prop-types */
const Container = ({ children }) => {
  return (
    <>
      {" "}
      <div className="flex flex-row justify-between items-center bg-black text-white py-5 px-4">
        <h1 className="font-semibold text-lg">Aplikasi catatan</h1>
        <h1 className="font-semibold text-lg">Arsip</h1>
      </div>
      <div className="px-4 py-6">{children}</div>
    </>
  );
};

export default Container;
