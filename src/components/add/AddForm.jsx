import React from "react";
import Input from "../UI/Input";
import Submit from "../UI/Submit";
import Cancel from "../UI/Cancel";

const AddForm = (props) => {
  return (
    <div className="add-form border border-gray-400 shadow">
      <div className="container mx-auto">
        <div className="max-w-xl p-2 mx-auto my-10 bg-white rounded-md shadow-sm">
          <div>
            <form
              autoComplete="off"
              onSubmit={(e) => {
                e.preventDefault();
                props.addClientData(e.target);
              }}
            >
              {props.headers.map((header, index) => {
                return (
                  <div className="mb-2" key={index}>
                    <Input header={header}></Input>
                  </div>
                );
              })}
              <div className="mb-2">
                <Submit value="Add"></Submit>
              </div>
              <div className="mb-2">
                <Cancel
                  value="Cancel"
                  onCancelHandler={() => props.setShowUploadForm(false)}
                ></Cancel>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddForm;
