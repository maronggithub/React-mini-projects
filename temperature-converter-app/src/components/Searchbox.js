import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { setCityName } from "../store/modules/cityName";


function Searchbox() {
  const [active, setActive] = useState(false);
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const handleInputClick = () => {
    setActive(true);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  const handleResetClick = () => {
    setActive(false);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (inputRef.current) {
        dispatch(setCityName(inputRef.current.value));
        inputRef.current.value = "";
      }
    }
  };

  return (
    <div id="search" className={`search ${active ? "active" : ""}`}>
      <input
        type="text"
        className="input"
        placeholder="City name..."
        onClick={handleInputClick}
        ref={inputRef}
        onKeyDown={handleKeyDown}
      />
      <button className="reset" onClick={handleResetClick}>
        <div className="handle"></div>
      </button>
    </div>
  );
}

export default Searchbox;
