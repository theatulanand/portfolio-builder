import React, { useState } from "react";
import Modal from "react-modal";
import Editor from "./components/Editor";
import FileExplorer from "./components/FileExplorer";
import ModalPreview from "./components/ModalPreview";
import Navbar from "./components/Navbar";
import { saveAs } from "file-saver"; // Import file-saver for download functionality
import JSZip from "jszip"; // Import JSZip for zipping files

// Import files from the root folder
import files from "./files.json"; 

// Set Modal App root to body
Modal.setAppElement("#root");

const App = () => {
  const [activeFile, setActiveFile] = useState("html");
  const [code, setCode] = useState(files.code);
  const [screenSize, setScreenSize] = useState("desktop");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const previewSizes = {
    desktop: { width: "100%", height: "100%" },
    mobile: { width: "375px", height: "667px" },
  };

  const updateCode = (language, value) => {
    setCode({ ...code, [language]: value });
  };

  const previewContent = `
    <html>
      <style>${code.css}</style>
      <body>
        ${code.html}
        <script>${code.js}</script>
      </body>
    </html>
  `;

  const toggleModal = (mode) => {
    setScreenSize(mode);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const downloadProject = () => {
    const zip = new JSZip();
    zip.file("index.html", code.html);
    zip.file("styles.css", code.css);
    zip.file("script.js", code.js);
    zip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, "project.zip");
    });
  };

  return (
    <div className="h-screen bg-gray-900 text-white flex flex-col">
      <Navbar toggleModal={toggleModal} downloadProject={downloadProject} />
      <div className="flex h-full">
        <FileExplorer activeFile={activeFile} setActiveFile={setActiveFile} />
        <Editor
          activeFile={activeFile}
          code={code}
          updateCode={updateCode}
        />
      </div>
      <ModalPreview
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        previewContent={previewContent}
        screenSize={screenSize}
        previewSizes={previewSizes}
      />
    </div>
  );
};

export default App;
