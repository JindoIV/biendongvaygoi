"use client";
import "./MiniMap.css";
import Modal from "react-modal";

interface ModalAction {
  open: boolean;
  onClose: () => void;
}

const MiniMap = ({ open, onClose }: ModalAction) => {
  return (
    <>
      <Modal isOpen={open} onRequestClose={onClose}>
        <div className="background">

        </div>
      </Modal>
    </>
  );
};
export default MiniMap;
