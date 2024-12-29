import React from "react";
import MonacoEditor from "@monaco-editor/react";

const Editor = ({ activeFile, code, updateCode }) => {
  return (
    <div
      className="bg-[#1e1e1e] flex-grow pt-5 overflow-hidden shadow-md rounded-lg" // Dark background to match Monaco theme
      style={{
        backgroundColor: "#1e1e1e", // Manually setting the background color to match Monaco editor
      }}
    >
      <MonacoEditor
        height="100%"
        language={activeFile}
        theme="vs-dark"
        value={code[activeFile]}
        onChange={(value) => updateCode(activeFile, value)}
        options={{
          lineNumbers: "on",
          minimap: { enabled: true },
          wordWrap: "on",
          fontFamily: "'Courier New', monospace",
          fontSize: 18,
        }}
      />
    </div>
  );
};

export default Editor;
