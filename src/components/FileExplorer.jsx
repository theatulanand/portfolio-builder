import React from "react";
import { FaFileCode, FaCss3Alt, FaJsSquare } from "react-icons/fa";

const FileExplorer = ({ activeFile, setActiveFile }) => {
  return (
    <div className="bg-gray-800 w-1/4 p-4 overflow-y-auto flex flex-col shadow-xl">
      <h2 className="text-lg font-semibold text-gray-300">File Explorer</h2>
      <div className="mt-4 space-y-2">
        <div className="space-y-1">
          {/* Tab for index.html */}
          <div
            className={`cursor-pointer p-2 text-sm flex items-center space-x-2 rounded-t-lg hover:bg-gray-700 ${activeFile === "html" ? "bg-gray-700" : ""}`}
            onClick={() => setActiveFile("html")}
          >
            <FaFileCode className="text-yellow-400" />
            <span>index.html</span>
          </div>

          {/* Tab for styles.css */}
          <div
            className={`cursor-pointer p-2 text-sm flex items-center space-x-2 rounded-t-lg hover:bg-gray-700 ${activeFile === "css" ? "bg-gray-700" : ""}`}
            onClick={() => setActiveFile("css")}
          >
            <FaCss3Alt className="text-blue-400" />
            <span>styles.css</span>
          </div>

          {/* Tab for script.js */}
          <div
            className={`cursor-pointer p-2 text-sm flex items-center space-x-2 rounded-t-lg hover:bg-gray-700 ${activeFile === "js" ? "bg-gray-700" : ""}`}
            onClick={() => setActiveFile("js")}
          >
            <FaJsSquare className="text-green-400" />
            <span>script.js</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileExplorer;
