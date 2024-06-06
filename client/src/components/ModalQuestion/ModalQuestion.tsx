"use client";
import { useEffect, useRef, useState } from "react";
import Modal from "react-modal";
import "./ModalQuestion.css";
import Question from "@/types/question";
import { Image } from "antd";

interface ModalAction {
  open: boolean;
  onClose: () => void;
  question: Question;
}

const linkAssets = process.env.NEXT_PUBLIC_API + "/ImageCH/";

const ModalQuestion = ({ open, onClose, question }: ModalAction) => {
  const [questionIndex, setQuestionIndex] = useState<number>(0);

  const [isClose, setIsClose] = useState<boolean>(false);
  const [isExplain, setIsExplain] = useState<boolean>(false);
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const refAns = useRef<HTMLDivElement[]>([]);

  const handleCheckDN = (key: number) => {
    if (!isSelected) {
      setIsSelected(true);
      refAns.current.map((element) => {
        element.classList.remove("answerBox");
        element.classList.add("answer_Box");
      });

      if (key !== question?.correctAnswer) {
        refAns.current[key].classList.add("answerBox_Incorrect");
        refAns.current[question?.correctAnswer].classList.add(
          "answerBox_Correct"
        );
      } else {
        refAns.current[key].classList.add("answerBox_Correct");
      }

      setTimeout(() => {
        setIsClose(true);
      }, 2000);

      setIsExplain(true);
    }
  };

  useEffect(() => {
    if (open) {
      setQuestionIndex(questionIndex + 1);
      setIsSelected(false);
      setIsClose(false);
      setIsExplain(false);
    }
  }, [open]);


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
        <div className="buttonXContainer">
          {isClose && <div className="buttonX" onClick={() => onClose()}></div>}
          <div className="modalContainer">
            <div className="questionBackground">
              <div className="questionContainer">
                {!isExplain ? (
                  <>
                    <div className="questionText">
                      <h1>Question {questionIndex}</h1>
                      <span>{question?.question}</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="giaiThich">
                    <h1>Giải thích:</h1>
                      <span>{question?.explanation}</span>
                    </div>
                  </>
                )}
                <div className="questionImage">
                  {question?.image &&
                    question?.image
                      .split("|")
                      .map((img: any, index: number) => {
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
                                src={linkAssets + img.trim()}
                                alt={"hinh anh"}
                                width={250}
                                height={250}
                              />
                            </div>
                          </>
                        );
                      })}
                </div>
              </div>
            </div>

            <div className="answerContainer">
              {question?.options &&
                question?.options
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
        </div>
      </Modal>
    </>
  );
};

export default ModalQuestion;
