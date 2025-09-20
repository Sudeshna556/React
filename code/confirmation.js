import React, { useState } from 'react';
import "./styles.css";

function ConfirmationModal() {
  const [openConfirmation, setOpenConfirmation] = useState(false) 
  const [actionStatus, setActionStatus] = useState("")

  // on confirm set the action status to confirmed and close the modal
  const handleConfirm = () => {
  setActionStatus('Confirmed')
    setOpenConfirmation(false)
  }
  //on cancel set the action status to cancelled and close the modal
  const handleCancel = () => {
    setActionStatus("Cancelled");
    setOpenConfirmation(false)
  }
  return (
    <div className="modal-container">
      <button
        className="open-modal-btn"
        data-testid = "open-modal-button"
        // value={}
        onClick={() => setOpenConfirmation(true)}

      >
        Open Confirmation Modal
      </button>
      
      {openConfirmation && (
        <div className="modal-backdrop" >
          <div className="modal-box" data-testid="confirmation-modal">
            <h2 className="modal-title" data-testid="modal-title">Confirm Action</h2>
            <p className="modal-message" data-testid="modal-message">Are you sure you want to proceed?</p>

            <div className="modal-buttons">
              <button className="confirm-btn"
              data-testid="confirm-button"
                onClick={handleConfirm}>
                Confirm
              </button>
              <button className="cancel-btn"
                data-testid="cancel-button"
                onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {actionStatus && (
        <div className="action-status" data-testid="action-status">
          {actionStatus}
        </div>
      )}

    </div>
  );
}

export default ConfirmationModal;
