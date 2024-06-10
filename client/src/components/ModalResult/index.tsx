"use client";
import "./ModelResult.css";
import Modal from "react-modal";

interface IModalResult {
  open: boolean;
  onClose: () => void;
}

const ModalResult = ({ open, onClose }: IModalResult) => {
  return (
    <>
      <Modal
        isOpen={open}
        className="ModalResult"
        // onAfterOpen={afterOpenModal}
        // onRequestClose={onClose}
        // style={customStyles}
        contentLabel="Example Modal"
        overlayClassName="OverlayModalResult"
      >
        <div className={"ccd"}>abc</div>
      </Modal>
    </>
  );
};

export default ModalResult;
