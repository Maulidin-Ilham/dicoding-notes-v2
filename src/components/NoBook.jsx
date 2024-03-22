import empty from "../../public/empty.png";

const NoBook = ({ children }) => {
  return (
    <div className="flex flex-col space-y-5">
      <img src={empty} alt="Empty" />
      <h1 className="text-center text-lg font-semibold tracking-wide lg:text-xl">
        {children}
      </h1>
    </div>
  );
};

export default NoBook;
