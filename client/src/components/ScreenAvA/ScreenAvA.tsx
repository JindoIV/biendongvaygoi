"use client";
import { useEffect, useRef, useState } from "react";
import Modal from "react-modal";
import "./ScreenAvA.css";
import ModalQuestion from "@/components/ModalQuestion/ModalQuestion";
import { http } from "@/utils/config";
import Question from "@/types/question";
import { Button } from "antd";

interface IScreenAvA {
  open: boolean;
  onClose: () => void;
}

const ScreenAvA = ({ open, onClose }: IScreenAvA) => {
  const [numberOfQuestion, setNumberOfQuestion] = useState<number>(0);

  const maxQuestion = 5;
  const [modalQuestion, setModalQuestion] = useState<boolean>(false);
  const [questions, setQuestions] = useState<Question[]>([]);

  const questionContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await http.get(`/api/get-questionLySon`);
        console.log(response.data.questions.rows);
        const newQuestions = response.data.questions.rows.map(
          (quesion: any) => {
            return { ...quesion, correctAnswer: quesion.correctanswer };
          }
        );
        setQuestions(newQuestions);
      } catch (error) {
        console.error("Lỗi khi đọc file JSON:", error);
      }
    };

    fetchData();

    initQuestion();
  }, [open]);

  useEffect(() => {
    if (!modalQuestion && numberOfQuestion === maxQuestion) {
      onClose();
    }
    if (!modalQuestion && numberOfQuestion < maxQuestion) {
      initQuestion();
      setNumberOfQuestion(numberOfQuestion + 1);
    }
  }, [modalQuestion]);

  const initQuestion = () => {
    if (questionContainer.current) {
      questionContainer.current.innerHTML = `
      <div class="shipStage1"></div>
      <div class="questionStage1"></div>
      `;
    }
    setTimeout(() => {
      setModalQuestion(true);
    }, 6000);
  };

  return (
    <>
      <Modal
        isOpen={open}
        className="ModalScreenAvA"
        // onAfterOpen={afterOpenModal}
        // onRequestClose={onClose}
        // style={customStyles}
        contentLabel="Confirm music"
        overlayClassName="OverlayScreenAvA"
      >
        <div className="backgroundMatBien">
          <div className="matBien" ref={questionContainer}>
            <div className="shipStage1"></div>
            {/* {} */}
            <div className="questionStage1"></div>
            {/* <div className="question"></div> */}
          </div>
          <div style={{ position: "relative" }}>
            <ModalQuestion
              open={modalQuestion}
              onClose={() => {
                setModalQuestion(false);
              }}
              questions={questions}
            ></ModalQuestion>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ScreenAvA;
