import React from "react";
import classes from "./SearchDropDown.module.css";

const isNumeric = (str) => {
  if (typeof str !== "string") return false;
  return !isNaN(str) && !isNaN(parseFloat(str));
};

const SearchDropDown = (props) => {
  let headers;
  if (isNumeric(props.val.replaceAll(" ", "").replaceAll("-", ""))) {
    headers = ["Registered Id", "Group Number", "Frame Number"];
  } else {
    headers = ["Client Name", "Roll Number"];
  }

  return (
    <div className={classes["display-search"]}>
      {headers.map((header, index) => {
        const data = `${header} : ${props.val}`;
        return (
          <div
            key={index}
            onClick={() => props.fetchClientData(header, props.val)}
            className={classes["row"]}
            tabIndex={0}
            onKeyUp={(e) => {
              if (e.key == "Enter") props.fetchClientData(header, props.val);
            }}
          >
            {data}
          </div>
        );
      })}
    </div>
  );
};

export default SearchDropDown;
