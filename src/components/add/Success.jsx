import React from "react";
import "./Success.css";

const Success = () => {
  return (
    <div className="success">
      <div className="flex justify-center mt-2">
        <div className="flex items-center w-1/1 px-16 py-5 text-green-700 bg-green-100 rounded">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </span>
          <p className="ml-2 text-medium">Registered Id added successfully</p>
        </div>
      </div>
    </div>
  );
};

export default Success;
