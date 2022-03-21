import { useState } from "react";
import SearchDropDown from "./components/search/SearchDropDown";
import SearchBox from "./components/search/SearchBox";
import SearchResults from "./components/search/SearchResults";
import UploadForm from "./components/add/UploadForm";
import EditForm from "./components/edit/EditForm";
import clientJSONData from "../src/assets/data.json";
import { useEffect } from "react";
import NoRecords from "./components/search/NoRecords";
import "./App.css";

const App = () => {
  const [clientData, setClientData] = useState(clientJSONData);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [editData, setShowEditData] = useState({});

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
  };

  const addClientData = (clientFormData) => {
    const addClientVal = {};
    const date = new Date();

    for (let index = 0; index < clientFormData.elements.length; index++) {
      if (clientFormData.elements[index].type == "text") {
        const key =
          clientFormData.elements[index].name.charAt(0).toLowerCase() +
          clientFormData.elements[index].name.replaceAll(" ", "").slice(1);
        addClientVal[key] = clientFormData.elements[index].value;
      }
    }

    addClientVal.registeredId = Math.round(100000000 * Math.random());
    addClientVal.uploadDate =
      date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();

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
  };

  const updateClientData = (clientFormData) => {
    const updateClientVal = {};

    for (let index = 0; index < clientFormData.elements.length; index++) {
      if (clientFormData.elements[index].type == "text") {
        const key =
          clientFormData.elements[index].name.charAt(0).toLowerCase() +
          clientFormData.elements[index].name.replaceAll(" ", "").slice(1);
        updateClientVal[key] = clientFormData.elements[index].value;
      }
    }

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
  };

  useEffect(() => {
    fetchClientData("clientName", "admin");
  }, []);

  return (
    <div className="container">
      <div className="inner-container">
        <div className="flex flex-row">
          <div>
            <SearchBox setSearchText={setSearchText}></SearchBox>
            {searchText != "" && (
              <SearchDropDown
                val={searchText}
                fetchClientData={fetchClientData}
              ></SearchDropDown>
            )}
          </div>
          <div>
            <button
              className="px-4 py-2 text-white bg-indigo-600 mx-10"
              type="button"
              onClick={onAddHandler}
            >
              Add
            </button>
          </div>
        </div>
        {!searchResults.length == 0 ? (
          <SearchResults
            searchResults={searchResults}
            setShowEditData={setShowEditData}
            deleteClientData={deleteClientData}
            setShowUploadForm={setShowUploadForm}
          ></SearchResults>
        ) : (
          <NoRecords></NoRecords>
        )}
        {!Object.keys(editData).length == 0 && (
          <EditForm
            headers={editHeaders}
            setShowEditData={setShowEditData}
            editData={editData}
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
      </div>
    </div>
  );
};

export default App;
