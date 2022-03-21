import React, { useState } from "react";
import SearchDropDown from "./components/search/SearchDropDown";
import SearchBox from "./components/search/SearchBox";
import SearchResults from "./components/search/SearchResults";
import UploadForm from "./components/add/UploadForm";
import EditForm from "./components/edit/EditForm";
import clientJSONData from "../src/assets/data.json";
import { useEffect } from "react";
import NoRecords from "./components/search/NoRecords";
import { Fragment } from "react";
import "./App.css";

const App = () => {
  const [clientData, setClientData] = useState(clientJSONData);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [editData, setShowEditData] = useState({});
  const [maskRow, setMaskRow] = useState("");

  const addHeaders = [
    "Client Name",
    "Group Number",
    "Frame Number",
    "Roll Number",
  ];

  const editHeaders = [
    "Registered Id",
    "Client Name",
    "Group Number",
    "Frame Number",
    "Roll Number",
  ];

  const tableHeader = [
    "Registered Id",
    "Client Name",
    "Group Number",
    "Frame Number",
    "Roll Number",
    "Upload Date",
    "Last Modified",
  ];

  const fetchClientData = (header, searchText) => {
    let results = [];
    clientData.forEach((client) => {
      for (const [key, value] of Object.entries(client)) {
        if (
          header.replaceAll(" ", "").toLowerCase() === key.toLowerCase() &&
          value === searchText
        )
          results.push(client);
      }
    });

    setSearchText("");
    setSearchResults(results);
    setShowEditData({});
    setShowUploadForm(false);
    setMaskRow("");
  };

  const addClientData = (clientFormData) => {
    const addClientVal = {};
    const date = new Date();

    for (let index = 0; index < clientFormData.elements.length; index++) {
      if (
        clientFormData.elements[index].type == "text" ||
        clientFormData.elements[index].type == "number"
      ) {
        const key =
          clientFormData.elements[index].name.charAt(0).toLowerCase() +
          clientFormData.elements[index].name.replaceAll(" ", "").slice(1);
        addClientVal[key] = clientFormData.elements[index].value;
      }
    }

    addClientVal.uploadDate =
      date.toLocaleDateString() + " " + date.toLocaleTimeString();
    addClientVal.lastModified =
      date.toLocaleDateString() + " " + date.toLocaleTimeString();

    setClientData((prev) => {
      return [...prev, addClientVal];
    });
    setSearchText("");
    setShowEditData({});
    setShowUploadForm(false);
  };

  const deleteClientData = (clientFormData) => {
    let filteredClientData = clientData.filter(
      (client) => clientFormData.registeredId != client.registeredId
    );
    let filteredResults = searchResults.filter(
      (client) => clientFormData.registeredId != client.registeredId
    );
    setClientData(filteredClientData);
    setSearchResults(filteredResults);
    setShowEditData({});
  };

  const onAddHandler = () => {
    setShowEditData({});
    setShowUploadForm(true);
    setMaskRow("");
  };

  const updateClientData = (clientFormData) => {
    const updateClientVal = {};
    const date = new Date();
    for (let index = 0; index < clientFormData.elements.length; index++) {
      if (
        clientFormData.elements[index].type == "text" ||
        clientFormData.elements[index].type == "number"
      ) {
        const key =
          clientFormData.elements[index].name.charAt(0).toLowerCase() +
          clientFormData.elements[index].name.replaceAll(" ", "").slice(1);
        updateClientVal[key] = clientFormData.elements[index].value;
      }
    }

    updateClientVal.lastModified =
      date.toLocaleDateString() + " " + date.toLocaleTimeString();

    let filteredClientData = clientData.map((item) => {
      if (updateClientVal.registeredId == item.registeredId) {
        return { ...updateClientVal, uploadDate: item.uploadDate };
      } else {
        return item;
      }
    });
    let filteredResults = searchResults.map((item) => {
      if (updateClientVal.registeredId == item.registeredId) {
        return { ...updateClientVal, uploadDate: item.uploadDate };
      } else {
        return item;
      }
    });
    setClientData(filteredClientData);
    setSearchResults(filteredResults);
    setShowEditData({});
    setMaskRow("");
  };

  useEffect(() => {
    fetchClientData("clientName", "admin");
  }, []);

  return (
    <Fragment>
      <div className="container">
        <div className="inner-container">
          <div className="flex flex-row">
            <div>
              <SearchBox setSearchText={setSearchText}></SearchBox>
              {searchText.trim().length > 0 && (
                <SearchDropDown
                  val={searchText.trim()}
                  fetchClientData={fetchClientData}
                ></SearchDropDown>
              )}
            </div>

            <button
              className="px-10 py-2 text-white bg-indigo-600 mx-10 rounded-md"
              type="button"
              onClick={onAddHandler}
            >
              Add
            </button>
          </div>
          {!searchResults.length == 0 ? (
            <SearchResults
              tableHeader={tableHeader}
              searchResults={searchResults}
              setShowEditData={setShowEditData}
              deleteClientData={deleteClientData}
              setShowUploadForm={setShowUploadForm}
              setMaskRow={setMaskRow}
              maskRow={maskRow}
            ></SearchResults>
          ) : (
            <NoRecords></NoRecords>
          )}
        </div>
      </div>
      {!Object.keys(editData).length == 0 && (
        <EditForm
          headers={editHeaders}
          setShowEditData={setShowEditData}
          editData={editData}
          setMaskRow={setMaskRow}
          updateClientData={updateClientData}
        ></EditForm>
      )}
      {showUploadForm && (
        <UploadForm
          headers={addHeaders}
          setShowUploadForm={setShowUploadForm}
          addClientData={addClientData}
        ></UploadForm>
      )}
    </Fragment>
  );
};

export default App;
