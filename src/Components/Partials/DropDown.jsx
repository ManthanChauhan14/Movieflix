import React from "react";

function DropDown({ func, options,title }) {
  return (
    <div className="dropdown-container">
      <div className="custom-select">
        <select defaultValue="0" name="format" id="format"
         onChange={func}>
          <option value="0" disabled>
         {title}
          </option>
          {options.map((o, i) => (
            <option key={i} value={o}>{o.toUpperCase()}</option>

          ))}
        </select>
        <span className="custom-arrow"></span>
      </div>
    </div>
  );
}

export default DropDown;