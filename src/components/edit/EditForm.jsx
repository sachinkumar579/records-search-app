import React from "react";
import Input from "../UI/Input";
import Submit from "../UI/Submit";
import Cancel from "../UI/Cancel";

const EditForm = (props) => {
  return (
    <div className="edit-form border border-gray-400 shadow">
      <div className="container mx-auto ">
        <div className="max-w-xl p-2 mx-auto my-10 bg-white rounded-md shadow-sm">
          <div>
            <form
              autoComplete="off"
              onSubmit={event => {
                event.preventDefault();
                props.updateClientData(event.target);
              }}
            >
              {props.headers.map((header, index) => {
                const key =
                  header.charAt(0).toLowerCase() +
                  header.replaceAll(" ", "").slice(1);

                return (
                  <div className="mb-2" key={index}>
                    <Input
                      defaultValue={props.editData[key]}
                      disabled={key == "registeredId"}
                      header={header}
                    ></Input>
                  </div>
                );
              })}
              <div className="mb-2">
                <Submit value="Save"></Submit>
              </div>
              <div className="mb-2">
                <Cancel
                  value="Cancel"
                  onCancelHandler={() => {
                    props.setMaskRow({});
                    props.setShowEditData(false);
                  }}
                ></Cancel>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditForm;
