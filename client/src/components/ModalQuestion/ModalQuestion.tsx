"use client";
import { useEffect, useRef, useState } from "react";
import Modal from "react-modal";
import "./ModalQuestion.css";
import Question from "@/types/question";
import { Image } from "antd";

interface ModalAction {
  open: boolean;
  onClose: () => void;
  questions: Question[];
}

const linkAssets = process.env.NEXT_PUBLIC_API + "/ImageCH/";

const ModalQuestion = ({ open, onClose, questions }: ModalAction) => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log(question);
  //   }, 1000);
  // }, [question]);
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [questionSelected, setQuestionSelected] = useState<Question>();

  useEffect(() => {
    if (open) {
      const temp = Math.floor(Math.random() * questions.length);
      setQuestionIndex(temp);
      setQuestionSelected(questions[temp]);
    }
  }, [open]);

  const handleCheckDN = (key: number) => {
    if (key === questions[questionIndex]?.correctAnswer) {
      refAns.current[key].classList.add("answerBox_Correct");
      setTimeout(() => {
        onClose();
      }, 2000);
      // alert("dung roi");
    } else {
      refAns.current[key].classList.add("answerBox_Incorrect");
      // alert("sai roi");
    }
  };

  const refAns = useRef<HTMLDivElement[]>([]);

  return (
    <>
      <Modal
        isOpen={open}
        className="ModalQuestion"
        // onAfterOpen={afterOpenModal}
        // onRequestClose={onClose}
        // style={customStyles}
        contentLabel="Example Modal"
        overlayClassName="OverlayQuestion"
      >
        <div className="modalContainer">
          <div className="questionBackground">
            <div className="questionContainer">
              <div className="questionText">
                <span>{questionSelected?.question}</span>
              </div>
              <div className="questionImage">
                {questionSelected?.images &&
                  questionSelected?.images
                    .split("|")
                    .map((image: any, index: number) => {
                      return (
                        <>
                          <div
                            key={"CH" + index}
                            // className="answerBox"
                            // onClick={() => handleCheckDN(index)}
                            // ref={(element) => {
                            //   if (element) {
                            //     refAns.current[index] = element;
                            //   }
                            // }}
                          >
                            <Image
                              src={linkAssets + image.trim()}
                              alt={"hinh anh"}
                              width={100}
                              height={100}
                            />
                          </div>
                        </>
                      );
                    })}
              </div>
            </div>
          </div>

          <div className="answerContainer">
            {questionSelected?.options &&
              questionSelected?.options
                .split("|")
                .map((option: any, index: number) => {
                  return (
                    <>
                      <div
                        key={index}
                        className="answerBox"
                        onClick={() => handleCheckDN(index)}
                        ref={(element) => {
                          if (element) {
                            refAns.current[index] = element;
                          }
                        }}
                      >
                        <span key={"AS" + index}>{option}</span>
                      </div>
                    </>
                  );
                })}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalQuestion;
