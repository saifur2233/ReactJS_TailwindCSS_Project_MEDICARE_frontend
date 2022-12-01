import React from "react";

const ConfirmationModal = ({
  title,
  message,
  closeModal,
  modalData,
  successAction,
}) => {
  return (
    <div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="confirmationmodal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{message}</p>
          <div className="modal-action">
            <button className="btn btn-warning" onClick={closeModal}>
              Cancel
            </button>
            <label
              onClick={() => successAction(modalData)}
              htmlFor="my-modal"
              className="btn btn-success"
            >
              Ok
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
