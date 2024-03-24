import PropTypes from "prop-types";
import uk from "/uk.png";
import indonesia from "/indonesia.png";

const LanguageBtn = ({ isBahasa }) => {
  return (
    <>
      {isBahasa ? (
        <button className="flex flex-col justify-center items-center">
          <img src={uk} alt="" className="w-6 h-6" />
        </button>
      ) : (
        <button className="flex flex-col justify-center items-center">
          <img src={indonesia} alt="" className="w-6 h-6" />
        </button>
      )}
    </>
  );
};

LanguageBtn.propTypes = {
  isBahasa: PropTypes.bool.isRequired,
};

export default LanguageBtn;
