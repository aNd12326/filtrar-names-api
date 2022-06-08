import "./styles.css";

const SearchBox = ({ handleChange }) => {
  const handleOnChange = (e) => {
    handleChange(e.target.value);
  };
  return (
    <div className="searchBox">
      <input type="text" onChange={(e) => handleOnChange(e)} />
    </div>
  );
};

module.exports = SearchBox;
