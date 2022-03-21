import React from "react";

function NoRecords() {
  return (
    <div className="flex justify-center mt-2 mt-20">
      <div className="flex flex-col justify-between w-1/1 px-10 py-2 text-red-700 bg-red-100 rounded">
        <h5 className="font-bold">No records found </h5>
        <p className="text-sm">
          Sorry , we could not find any records for the search
        </p>
      </div>
    </div>
  );
}

export default NoRecords;
