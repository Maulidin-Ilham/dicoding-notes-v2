/* eslint-disable react/prop-types */
const Container = ({ children }) => {
  return (
    <>
      {" "}
      <div className="flex flex-row justify-between items-center bg-black text-white py-5 px-4 shadow-sm">
        <h1 className="font-semibold text-lg">Aplikasi catatan</h1>
        <h1 className="font-semibold text-lg">Arsip</h1>
      </div>
      <div className="px-4 py-6 flex flex-col justify-center items-center w-full">
        <div className=" w-full lg:max-w-5xl md:max-w-3xl">{children}</div>
      </div>
    </>
  );
};

export default Container;
