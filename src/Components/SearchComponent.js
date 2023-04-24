import { AppContext } from "../App";
import { useContext } from "react";

const SearchComponent = () => {
  const value = useContext(AppContext);

  if (value.isClicked === true) {
    return (
      <div className="searchDiv">
          <div>
            <input
              className="searchDiv-input"
              type="text"
              placeholder="Search location"
              onChange={(e) => value.setInput(e.target.value)}
            ></input>
            <button className="searchDiv-btn" onClick={value.getData}>
              Search
            </button>
          </div>
          <p
            className="searchDiv-exit-btn"
            onClick={() => value.setIsClicked(false)}
          >
            x
          </p>
      </div>
    );
  } else return null;
};

export default SearchComponent;
