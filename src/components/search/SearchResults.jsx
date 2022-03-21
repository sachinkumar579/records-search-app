import React from "react";

const SearchResults = (props) => {
  return (
    <div className="container flex justify-center mx-auto mt-10">
      <div className="flex flex-col">
        <div className="w-full">
          <div className="border border-gray-200 shadow">
            <table className="divide-y divide-gray-300 ">
              <thead className="bg-gray-50">
                <tr>
                  {props.tableHeader.map((val, index) => (
                    <th key={index} className="px-6 py-2 text-sm text-gray-700">
                      {val}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-300">
                {props.searchResults.map((data, index) => (
                  <tr key={index} className="whitespace - nowrap">
                    {props.tableHeader.map((val, index) => {
                      return (
                        <td
                          key={index}
                          className="px-6 py-4 text-sm text-gray-700 "
                        >
                          {
                            data[
                              val.charAt(0).toLowerCase() +
                                val.replaceAll(" ", "").slice(1)
                            ]
                          }
                        </td>
                      );
                    })}

                    <td className="px-6 py-4">
                      <a
                        href="#"
                        className="px-4 py-1 text-sm text-white bg-blue-400 rounded"
                        onClick={() => {
                          props.setShowUploadForm(false);
                          props.setShowEditData(data);
                        }}
                      >
                        Edit
                      </a>
                    </td>
                    <td className="px-6 py-4">
                      <a
                        href="#"
                        className="px-4 py-1 text-sm text-white bg-red-400 rounded"
                        onClick={() => {
                          props.setShowUploadForm(false);
                          props.deleteClientData(data);
                          props.setMaskRow({});
                        }}
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
