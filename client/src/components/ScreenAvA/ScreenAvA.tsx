"use client";
import { useEffect, useState } from "react";
import "./ScreenAvA.css";
import ModalQuestion from "@/components/ModalQuestion/ModalQuestion";
import { http } from "@/utils/config";
import Question from "@/types/question";
export default function ScreenAvA() {
  const [numberOfQuestion, setNumberOfQuestion] = useState<number>(0);

  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await http.get(`/api/get-questionLySon`);
        // console.log(response.data.questions.rows);
        console.log(response.data.questions.rows.correctanswer);
        setQuestions({
          ...response.data.questions.rows,
          correctAnswer: response.data.questions.rows.correctanswer,
        });
        // setQuestionSelected(
        //   {
        //     ...response.data.questions.rows,
        //     correctAnswer: response.data.questions.rows.correctanswer,
        //   }[1]
        // );
        // setJsonData(data);
      } catch (error) {
        console.error("Lỗi khi đọc file JSON:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="background">
        <div className="matBien">
          <div className="ship"></div>
          <div className="question"></div>
          <div className="question"></div>
          <div className="question"></div>
        </div>
        <div style={{ position: "relative" }}>
          <ModalQuestion
            open={true}
            onClose={function (): void {
              throw new Error("Function not implemented.");
            }}
            question={questions[0]}
          ></ModalQuestion>
        </div>
      </div>
    </>
  );
}
