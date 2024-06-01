"use client";
import "./TruongSaMap.css";
import * as image from "@/assets/Images/TruongSaMap";
import Image from "next/image";
import { useState } from "react";
import BoxInfoTruongSa from "../BoxInfoTruongSa/BoxInfoTruongSa";
interface TruongSaMapProps {
  closeMap: () => void;
}

const TruongSaMap = ({ closeMap }: TruongSaMapProps) => {
  type QuestionKeys = "question1" | "question2" | "question3" | "question4";
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [questions, setQuestions] = useState({
    question1: true,
    question2: true,
    question3: true,
    question4: true,
  });
  const [currentPlace, setCurrentPlace] = useState<string>("");

  const handleQuestionClick = (question: QuestionKeys) => {
    setTimeout(() => {
      setQuestions((prev) => ({
        ...prev,
        [question]: false,
      }));
    }, 1000);
  };

  const allQuestionsHidden = Object.values(questions).every(
    (isVisible) => !isVisible
  );

  const displayBoxInfo = (place: string) => {
    
    setCurrentPlace(place);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const places = [
    { className: "diaDiem1", label: "Đảo Trường Sa Lớn", img: image.diaDiem, place: "diaDiem1"},
    { className: "diaDiem2", label: "Đảo Song Tử Tây", img: image.diaDiem, place: "diaDiem2"},
    { className: "diaDiem3", label: "Đảo Gạc Ma", img: image.diaDiem, place: "diaDiem3"},
    { className: "diaDiem4", label: "Đảo An Bang", img: image.diaDiem, place: "diaDiem4"},
  ];

  return (
    <>
      <div className={`backgroundTS ${isOpen ? "blur" : ""}`}>
        {questions.question1 && (
          <div
            className="question1 question"
            onClick={() => handleQuestionClick("question1")}
          >
            <Image src={image.question} alt="" />
          </div>
        )}
        {questions.question2 && (
          <div
            className="question2 question"
            onClick={() => handleQuestionClick("question2")}
          >
            <Image src={image.question} alt="" />
          </div>
        )}
        {questions.question3 && (
          <div
            className="question3 question"
            onClick={() => handleQuestionClick("question3")}
          >
            <Image src={image.question} alt="" />
          </div>
        )}
        {questions.question4 && (
          <div
            className="question4 question"
            onClick={() => handleQuestionClick("question4")}
          >
            <Image src={image.question} alt="" />
          </div>
        )}
        {allQuestionsHidden && (
          <>
            {places.map(({ className, label, img, place}) => (
          <div key={place} className={`${className} diaDiem`} onClick={() => displayBoxInfo(place)}>
            <Image src={img} alt="" />
            <p>{label}</p>
          </div>
        ))}
            <div className="btnX" onClick={closeMap}>
              <Image src={image.btn_thoat} alt=""></Image>
            </div>
          </>
        )}
      </div>
        {allQuestionsHidden && (
          <>
            <div className="btnX" onClick={closeMap}>
              <Image src={image.btn_thoat} alt=""></Image>
            </div>
          </>
        )}
      <BoxInfoTruongSa open={isOpen} place={currentPlace} closeModal={closeModal}/>

    </>
  );
};
export default TruongSaMap;
