import React from "react";

const Cancel = (props) => {
  return (
    <button
      type="submit"
      className="w-full px-2 py-4 text-white bg-red-600 rounded-md  focus:bg-red-500 focus:outline-none"
      onClick={props.onCancelHandler}
    >
      {props.value}
    </button>
  );
};

export default Cancel;
