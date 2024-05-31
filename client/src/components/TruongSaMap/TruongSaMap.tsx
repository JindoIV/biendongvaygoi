"use client";
import "./TruongSaMap.css";
import * as image from "@/assets/Images/TruongSaMap";
import Image from "next/image";
import { useState } from "react";

const TruongSaMap = () => {
  type QuestionKeys = 'question1' | 'question2' | 'question3' | 'question4';
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [questions, setQuestions] = useState({
    question1: true,
    question2: true,
    question3: true,
    question4: true,
  });

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
  return (
    <>
      <div className={`background ${isOpen ? "blur" : ""}`}>
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
          <div className="diaDiem1">
            <Image src={image.diaDiem} alt="" />
          </div>
        )}
      </div>
    </>
  );
};
export default TruongSaMap;
