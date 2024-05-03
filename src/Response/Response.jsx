import styles from "./Response.module.css";
import { useState } from "react";

function Response() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.containment_boof}>
      <button
        type="button"
        className={styles.button}
        onClick={openModal}
      >
        <p>نظرسنجی غذا</p>
      </button>

      {isModalOpen && (
        <div
          className={`fixed left-0 top-0 z-[1055] h-full w-full flex items-center justify-center bg-opacity-50 bg-black`}
          onClick={closeModal}
        >
          <div
            className={`relative bg-white rounded-md p-8 max-w-[500px] w-full`}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-4">Modal Title</h2>
            <p className="mb-6">
              This is some placeholder content to show a vertically centered modal. We've added some extra copy here to show how vertically centering the modal works when combined with scrollable modals. We also use some repeated line breaks to quickly extend the height of the content, thereby triggering the scrolling. When content becomes longer than the predefined max-height of the modal, the content will be cropped and scrollable within the modal.
            </p>
            <p>Just like that.</p>
            <div className="flex justify-end mt-8">
              <button
                type="button"
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-100 border border-gray-300 rounded-md mr-2"
                onClick={closeModal}
              >
                Close
              </button>
              <button
                type="button"
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Response;