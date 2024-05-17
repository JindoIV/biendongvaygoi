"use client";
import { useEffect, useRef, useState } from "react";
import Modal from "react-modal";
import "./ModalQuestion.css";
import Question from "@/types/question";
import { Image } from "antd";

interface ModalAction {
  open: boolean;
  onClose: () => void;
  question: Question | undefined;
}

const linkAssets = process.env.NEXT_PUBLIC_API + "/ImageCH/";

const ModalQuestion = ({ open, onClose, question }: ModalAction) => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log(question);
  //   }, 1000);
  // }, [question]);

  const handleCheckDN = (key: number) => {
    if (key === question?.correctAnswer) {
      refAns.current[key].classList.add("answerBox_Correct");
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
        className="Modal"
        // onAfterOpen={afterOpenModal}
        // onRequestClose={onClose}
        // style={customStyles}
        contentLabel="Example Modal"
        overlayClassName="Overlay"
      >
        <div className="modalContainer">
          <div className="questionBackground">
            <div className="questionContainer">
              <div className="questionText">
                <span>{question?.question}</span>
              </div>
              <div className="questionImage">
                {question?.images &&
                  question?.images
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
            {question?.options &&
              question?.options.split("|").map((option: any, index: number) => {
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
                      <span>{option}</span>
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
