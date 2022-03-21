import React from "react";
import classes from "./SearchResults.module.css";
import DisplayTable from "./DisplayTable";

const SearchResults = (props) => {
  const colNames = [
    "Registered Id",
    "Client Name",
    "Group Number",
    "Frame Number",
    "Roll Number",
    "Upload Date",
  ];

  return (
    <div className={classes["search-results"]}>
      <DisplayTable
        cols={colNames}
        searchResults={props.searchResults}
        setShowEditData={props.setShowEditData}
        deleteClientData={props.deleteClientData}
        setShowUploadForm={props.setShowUploadForm}
      ></DisplayTable>
    </div>
  );
};

export default SearchResults;
