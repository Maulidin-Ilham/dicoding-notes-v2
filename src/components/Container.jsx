import Navbar from "./Navbar";
import PropTypes from "prop-types";

const Container = ({ children }) => {
  return (
    <>
      {" "}
      <Navbar />
      <div className="px-4 py-6 flex flex-col justify-center items-center w-full mb-4">
        <div className=" w-full lg:max-w-5xl md:max-w-3xl">{children}</div>
      </div>
    </>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
