import empty from "../../public/empty.png";
import PropTypes from "prop-types";
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

NoBook.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NoBook;
