"use client";
import { useState } from "react";
import Modal from "react-modal";
import "./ModalQuestion.css";

interface ModalAction {
  open: boolean;
  onClose: () => void;
}

const ModalQuestion = ({ open, onClose }: ModalAction) => {
  return (
    <>
      <Modal
        isOpen={open}
        className="Modal"
        // onAfterOpen={afterOpenModal}
        onRequestClose={onClose}
        // style={customStyles}
        contentLabel="Example Modal"
        overlayClassName="Overlay"
      ></Modal>
    </>
  );
};

export default ModalQuestion;
