import React from "react";
import "./UploadForm.css";

function UploadForm(props) {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.addClientData(e.target);
  };

  return (
    <div className="upload-form">
      <div className="container mx-auto">
        <div className="max-w-xl p-2 mx-auto my-10 bg-white rounded-md shadow-sm">
          <div>
            <form autoComplete="off" onSubmit={onSubmitHandler}>
              {props.headers.map((header, index) => (
                <div className="mb-2" key={index}>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm text-gray-600"
                  >
                    {header}
                  </label>
                  <input
                    title="Must contain 2 to 20 characters"
                    pattern="[a-zA-Z0-9]{2,15}"
                    name={header}
                    type="text"
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  />
                </div>
              ))}
              <div className="mb-2">
                <button
                  type="submit"
                  className="w-full px-2 py-4 text-white bg-indigo-600 rounded-md  focus:bg-indigo-500 focus:outline-none"
                >
                  Add
                </button>
              </div>
              <div className="mb-2">
                <button
                  type="submit"
                  className="w-full px-2 py-4 text-white bg-red-600 rounded-md  focus:bg-red-500 focus:outline-none"
                  onClick={(e) => props.setShowUploadForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadForm;
