"use client";
import { useEffect, useRef, useState } from "react";
import Modal from "react-modal";
import "./ScreenAvA.css";
import ModalQuestion from "@/components/ModalQuestion/ModalQuestion";
import { http } from "@/utils/config";
import Question from "@/types/question";
import { Button } from "antd";
import { question } from "@/assets/Images/TruongSaMap";

interface IScreenAvA {
  open: boolean;
  onClose: () => void;
}

const ScreenAvA = ({ open, onClose }: IScreenAvA) => {
  const [numberOfQuestion, setNumberOfQuestion] = useState<number>(1);

  const maxQuestion = 5;
  const [modalQuestion, setModalQuestion] = useState<boolean>(false);
  const [fetchDataDone, setFetchDataDone] = useState<boolean>(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [questionSelected, setQuestionSelected] = useState<any>();

  const questionContainer = useRef<HTMLDivElement>(null);

  const fetchData = async () => {
    try {
      const res = await http.get(`/api/get-questionLySon`);
      const newQuestions = res.data.questions.rows.map((quesion: any) => {
        return { ...quesion, correctAnswer: quesion.correctanswer };
      });
      setQuestions(newQuestions);
      setFetchDataDone(true);
    } catch (error) {
      console.error("Lỗi khi đọc file JSON:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [open]);

  useEffect(() => {
    initQuestion();
  }, [fetchDataDone]);

  useEffect(() => {
    if (!modalQuestion && numberOfQuestion > maxQuestion) {
      setTimeout(() => {
        onClose();
      }, 1000);
      // return;
    }
    if (!modalQuestion && numberOfQuestion <= maxQuestion) {
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

    const temp = Math.floor(Math.random() * questions.length);
    let mainQuestions = questions;
    let supQuestions = mainQuestions.splice(temp, 1);

    console.log(mainQuestions);
    console.log(supQuestions);

    setQuestionSelected(supQuestions[0]);
    setQuestions(mainQuestions);

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
          <div className="matBien" ref={questionContainer}></div>
          <div style={{ position: "relative" }}>
            <ModalQuestion
              open={modalQuestion}
              onClose={() => {
                setModalQuestion(false);
              }}
              question={questionSelected}
            ></ModalQuestion>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ScreenAvA;
