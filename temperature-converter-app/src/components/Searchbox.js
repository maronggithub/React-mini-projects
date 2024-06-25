import React, { useState, useRef } from "react";

function Searchbox() {
  const [active, setActive] = useState(false);
  const inputRef = useRef(null);

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

  return (
    <div id="search" className={`search ${active ? "active" : ""}`}>
      <input
        type="text"
        className="input"
        placeholder="Search..."
        onClick={handleInputClick}
        ref={inputRef}
      ></input>
      <button className="reset" onClick={handleResetClick}>
        <div className="handle"></div>
      </button>
    </div>
  );
}

export default Searchbox;
