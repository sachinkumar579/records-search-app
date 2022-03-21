import React from "react";

const Submit = (props) => {
  return (
    <button
      type="submit"
      className="w-full px-2 py-4 text-white bg-indigo-600 rounded-md  focus:bg-indigo-500 focus:outline-none"
    >
      {props.value}
    </button>
  );
};

export default Submit;
