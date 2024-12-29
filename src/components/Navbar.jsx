import React from "react";
import { FaMobileAlt, FaDesktop, FaDownload } from "react-icons/fa"; // Import the download icon

const Navbar = ({ toggleModal, downloadProject }) => {
  return (
    <div className="bg-gray-700 p-4 flex justify-between items-center shadow-lg border-b-2 border-gray-600">
      <h2 className="text-lg font-semibold">VS Code-like Editor</h2>
      <div className="flex space-x-4">
        {/* Preview buttons */}
        <button
          className="text-xl text-gray-300 hover:text-white"
          onClick={() => toggleModal("mobile")}
        >
          <FaMobileAlt />
        </button>
        <button
          className="text-xl text-gray-300 hover:text-white"
          onClick={() => toggleModal("desktop")}
        >
          <FaDesktop />
        </button>
        {/* Download button */}
        <button
          className="text-xl text-gray-300 hover:text-white"
          onClick={downloadProject}
        >
          <FaDownload />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
