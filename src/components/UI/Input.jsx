import React from "react";
import { Fragment } from "react";

const Input = (props) => {
  return (
    <Fragment>
      <label
        htmlFor={props.header}
        className="block mb-2 text-sm text-gray-600"
      >
        {props.header}
      </label>
      <input
        title="Must contain 2 to 15 characters"
        pattern="[a-zA-Z0-9 ]{2,15}"
        defaultValue={props.defaultValue}
        name={props.header}
        type="text"
        required
        disabled={props.disabled}
        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
      />
    </Fragment>
  );
};

export default Input;
