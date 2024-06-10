"use client";
import { useSelector } from "react-redux";
import "./ModelResult.css";
import Modal from "react-modal";
import { RootState } from "@/libs/store";

interface IModalResult {
  open: boolean;
  onClose: () => void;
}

const ModalResult = ({ open, onClose }: IModalResult) => {
  const count = useSelector((state: RootState) => state.score.value);
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
        <div className="ContainerResult">
          <div className="BoxResult">
            <h2>Điểm của bạn là: </h2>
            <h2>{count}</h2>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalResult;
