import React from "react";
import "./EditModal.css";

function EditModal({ children }) {
  return (
    <div className="modal-container">
      <div className="modal-content">{children}</div>
    </div>
  );
}

export default EditModal;
