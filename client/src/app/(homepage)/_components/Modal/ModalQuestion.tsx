"use client";
import { useState } from "react";
import Modal from "react-modal";
import "./ModalQuestion.css";
import Question from "@/app/types/question";

interface ModalAction {
  open: boolean;
  onClose: () => void;
  question: Question;
}

const ModalQuestion = ({ open, onClose, question }: ModalAction) => {
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
      >
        <div className="question">
         <h2>{question.question}</h2>
         
        </div>
      </Modal>
    </>
  );
};

export default ModalQuestion;
