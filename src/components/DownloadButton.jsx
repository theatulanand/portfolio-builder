import React from "react";
import { saveAs } from "file-saver";
import JSZip from "jszip";

const DownloadButton = ({ code }) => {
  const handleDownload = async () => {
    const zip = new JSZip();

    // Add HTML, CSS, JS files to the zip
    zip.file("index.html", code.html);
    zip.file("styles.css", code.css);
    zip.file("script.js", code.js);

    // Generate and save the zip file
    const content = await zip.generateAsync({ type: "blob" });
    saveAs(content, "project.zip");
  };

  return (
    <button
      className="p-2 mt-4 text-white bg-blue-500 rounded"
      onClick={handleDownload}
    >
      Download Project
    </button>
  );
};

export default DownloadButton;
