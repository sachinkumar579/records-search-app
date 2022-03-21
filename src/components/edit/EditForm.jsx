import React from "react";
import "./EditForm.css";

function EditForm(props) {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.updateClientData(e.target);
  };

  return (
    <div className="edit-form border border-gray-400 shadow">
      <div className="container mx-auto ">
        <div className="max-w-xl p-2 mx-auto my-10 bg-white rounded-md shadow-sm">
          <div>
            <form autoComplete="off" onSubmit={onSubmitHandler}>
              {props.headers.map((header, index) => {
                let title;
                let type;
                let pattern;

                if (header == "Client Name") {
                  title = "Must contain 2 to 20 characters";
                  type = "text";
                  pattern = "[a-zA-Z ]{2,15}";
                } else if (
                  header == "Group Number" ||
                  header == "Frame Number"
                ) {
                  title = "Must contain 2 to 20 digits";
                  type = "number";
                  pattern = "[0-9 ]{2,15}";
                } else if (header == "Roll Number") {
                  title = "Must contain 2 to 20 characters";
                  type = "text";
                  pattern = "[a-zA-Z0-9 ]{2,15}";
                }

                const key =
                  header.charAt(0).toLowerCase() +
                  header.replaceAll(" ", "").slice(1);

                return (
                  <div className="mb-2" key={index}>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm text-gray-600"
                    >
                      {header}
                    </label>
                    <input
                      title={title}
                      pattern={pattern}
                      defaultValue={props.editData[key]}
                      name={header}
                      type={type}
                      required
                      disabled={key == "registeredId"}
                      className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                    />
                  </div>
                );
              })}
              <div className="mb-2">
                <button
                  type="submit"
                  className="w-full px-2 py-4 text-white bg-indigo-600 rounded-md  focus:bg-indigo-500 focus:outline-none"
                >
                  Save
                </button>
              </div>
              <div className="mb-2">
                <button
                  type="submit"
                  className="w-full px-2 py-4 text-white bg-red-600 rounded-md  focus:bg-red-500 focus:outline-none"
                  onClick={(e) => {
                    props.setShowEditData(false);
                  }}
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

export default EditForm;
