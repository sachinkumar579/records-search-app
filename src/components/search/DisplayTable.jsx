import React from "react";

const DisplayTable = (props) => {
  return (
    <div>
      <div className="container flex justify-center mx-auto">
        <div className="flex flex-col">
          <div className="w-full">
            <div className="border-b border-gray-200 shadow">
              <table className="divide-y divide-gray-300 ">
                <thead className="bg-gray-50">
                  <tr>
                    {props.cols.map((val, index) => (
                      <th
                        key={index}
                        className="px-6 py-2 text-xs text-gray-500"
                      >
                        {val}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-300">
                  {props.searchResults.map((data, index) => (
                    <tr key={index} className="whitespace-nowrap">
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {data.registeredId}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {data.clientName}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {data.groupNumber}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {data.frameNumber}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {data.rollNumber}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {data.uploadDate}
                      </td>
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
    </div>
  );
};

export default DisplayTable;
