import React from "react";

const SearchBox = (props) => {
  return (
    <div className="container flex mx-auto">
      <div className="flex border-2 rounded">
        <input
          defaultValue="admin"
          type="text"
          className="px-4 py-2 w-80"
          placeholder="Search..."
          onChange={(e) => props.setSearchText(e.target.value)}
          onClick={(e) => props.setSearchText(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBox;
