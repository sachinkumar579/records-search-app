import React from "react";
import classes from "./SearchResults.module.css";
import DisplayTable from "./DisplayTable";

const SearchResults = (props) => {
  return (
    <div className={classes["search-results"]}>
      <DisplayTable
        cols={props.tableHeader}
        searchResults={props.searchResults}
        setShowEditData={props.setShowEditData}
        deleteClientData={props.deleteClientData}
        setShowUploadForm={props.setShowUploadForm}
      ></DisplayTable>
    </div>
  );
};

export default SearchResults;
