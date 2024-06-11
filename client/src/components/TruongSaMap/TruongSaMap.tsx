"use client";
import "./TruongSaMap.css";
import * as image from "@/assets/Images/TruongSaMap";
import Image from "next/image";
import { useState } from "react";
import BoxInfoTruongSa from "../BoxInfoTruongSa/BoxInfoTruongSa";
import { http } from "@/utils/config";
import Question from "@/types/question";
import ModalQuestion from "@/components/ModalQuestion/ModalQuestion";
interface TruongSaMapProps {
  closeMap: () => void;
}

const TruongSaMap = ({ closeMap }: TruongSaMapProps) => {
  type QuestionKeys = "AnBang" | "GacMa" | "SongTu" | "TruongSa";
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [questions, setQuestions] = useState({
    TruongSa: true,
    SongTu: true,
    GacMa: true,
    AnBang: true,
  });
  const [modalQuestion, setModalQuestion] = useState<boolean>(false);
  const [currentPlace, setCurrentPlace] = useState<string>("");
  const [question, setQuestion] = useState<any>();

  const fetchData = async (tenDao: string = "") => {
    try {
      const res = await http.get(`/api/get-question${tenDao}`);
      console.log(res);
      const newQuestions = res.data.questions.rows.map((quesion: any) => {
        return { ...quesion, correctAnswer: quesion.correctanswer };
      });

      const temp = Math.floor(Math.random() * newQuestions.length);
      setQuestion(newQuestions[temp]);
    } catch (error) {
      console.error("Lỗi khi đọc file JSON:", error);
    }
  };

  const handleQuestionClick = async (question: QuestionKeys) => {
    await fetchData(question);

    setModalQuestion(true);

    setQuestions((prev) => ({
      ...prev,
      [question]: false,
    }));
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
    {
      className: "diaDiem1",
      label: "Đảo Trường Sa Lớn",
      img: image.diaDiem,
      place: "diaDiem1",
    },
    {
      className: "diaDiem2",
      label: "Đảo Song Tử Tây",
      img: image.diaDiem,
      place: "diaDiem2",
    },
    {
      className: "diaDiem3",
      label: "Đảo Gạc Ma",
      img: image.diaDiem,
      place: "diaDiem3",
    },
    {
      className: "diaDiem4",
      label: "Đảo An Bang",
      img: image.diaDiem,
      place: "diaDiem4",
    },
  ];

  return (
    <>
      <div className={`backgroundTS ${isOpen || modalQuestion  ? "blur" : ""}`}>
        {questions.TruongSa && (
          <div
            className="question1 question"
            onClick={() => handleQuestionClick("TruongSa")}
          >
            <Image src={image.question} alt="" />
          </div>
        )}
        {questions.SongTu && (
          <div
            className="question2 question"
            onClick={() => handleQuestionClick("SongTu")}
          >
            <Image src={image.question} alt="" />
          </div>
        )}
        {questions.GacMa && (
          <div
            className="question3 question"
            onClick={() => handleQuestionClick("GacMa")}
          >
            <Image src={image.question} alt="" />
          </div>
        )}
        {questions.AnBang && (
          <div
            className="question4 question"
            onClick={() => handleQuestionClick("AnBang")}
          >
            <Image src={image.question} alt="" />
          </div>
        )}
        {allQuestionsHidden && (
          <>
            {places.map(({ className, label, img, place }) => (
              <div
                key={place}
                className={`${className} diaDiem`}
                onClick={() => displayBoxInfo(place)}
              >
                <Image src={img} alt="" />
                <p>{label}</p>
              </div>
            ))}
              <p className="VM extra">bãi Vũng Mây</p>
              <p className="KN extra">bãi Kiêu Ngựa</p>
              <p className="DB extra">bãi Đinh Ba</p>
              <p className="TN extra">bãi Tây Nam</p>

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
      <div style={{ position: "relative" }}>
        <ModalQuestion
          open={modalQuestion}
          onClose={() => {
            setModalQuestion(false);
          }}
          question={question}
        ></ModalQuestion>
      </div>
      <BoxInfoTruongSa
        open={isOpen}
        place={currentPlace}
        closeModal={closeModal}
      />
    </>
  );
};
export default TruongSaMap;
