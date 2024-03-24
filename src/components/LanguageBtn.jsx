import PropTypes from "prop-types";

const LanguageBtn = ({ isBahasa }) => {
  return (
    <>
      {isBahasa ? (
        <>
          <h1>EN</h1>
        </>
      ) : (
        <>
          <h1>ID</h1>
        </>
      )}
    </>
  );
};

LanguageBtn.propTypes = {
  isBahasa: PropTypes.bool.isRequired,
};

export default LanguageBtn;
