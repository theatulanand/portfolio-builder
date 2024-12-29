import React from "react";
import { FaRedoAlt, FaWindowClose } from "react-icons/fa";
import Modal from 'react-modal';

const ModalPreview = ({ isModalOpen, closeModal, previewContent, screenSize, previewSizes }) => {
  const handleRefresh = () => {
    const iframe = document.getElementById("preview-iframe");
    iframe.contentWindow.location.reload();
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel="Preview Modal"
      className="w-full h-full flex justify-center items-center bg-black bg-opacity-50"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <div
        className={`relative w-full max-w-${previewSizes[screenSize].width} max-h-${previewSizes[screenSize].height} flex justify-center items-center`}
        style={previewSizes[screenSize]}
      >
        <div
          className={`bg-white rounded-lg shadow-lg border-2 border-gray-300 w-full h-full relative overflow-hidden`}
          style={screenSize === "mobile" ? previewSizes.mobile : previewSizes.desktop}
        >
          <div className="bg-gray-800 text-white p-2 flex items-center justify-between">
            <div className="flex space-x-2 items-center">
              <div className="bg-red-500 rounded-full w-3 h-3 cursor-pointer hover:bg-red-600" onClick={closeModal} />
              <div className="bg-yellow-500 rounded-full w-3 h-3" />
              <div className="bg-green-500 rounded-full w-3 h-3" />
            </div>
            <button className="text-white ml-12" onClick={handleRefresh}>
              <FaRedoAlt />
            </button>
            <input
              type="text"
              value="aboutatul.in"
              className="bg-gray-800 text-white border-none w-full mx-2"
              disabled
            />
            <button className="text-white ml-2" onClick={closeModal}>
              <FaWindowClose />
            </button>
          </div>
          <iframe
            id="preview-iframe"
            srcDoc={previewContent}
            className="w-full h-full border-t-2 border-gray-300"
            title="Preview"
            sandbox="allow-scripts allow-same-origin"
          />
        </div>
      </div>
    </Modal>
  );
};

export default ModalPreview;
