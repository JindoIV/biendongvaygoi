"use client";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import "./ModalQuestion.css";
import Question from "@/app/types/question";

interface ModalAction {
  open: boolean;
  onClose: () => void;
  question: Question;
}

const ModalQuestion = ({ open, onClose, question }: ModalAction) => {
  useEffect(() => {
    console.log(question);
  }, [question]);

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
