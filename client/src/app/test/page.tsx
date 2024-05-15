"use client";

import ModalQuestion from "@/app/(homepage)/_components/Modal/ModalQuestion";
import Question from "@/app/types/question";
import Loading from "@/components/Loading/Loading";
import { useEffect, useRef, useState } from "react";

export default function Test() {
  // const audioElement = useRef<HTMLAudioElement>(null);
  const [canPlay, setCanPlay] = useState(false);

  // useEffect(() => {
  //   if (canPlay && audioElement.current) {
  //     audioElement.current.play();
  //   }
  // }, [canPlay]);

  // const handlePlayAudio = () => {
  //   setCanPlay(true);
  // };

  const [modalState, setModalState] = useState<boolean>(false);

  const [questions, setQuestions] = useState<Question[]>([
    {
      question: "",
      options: [""],
      correctAnswer: 0,
      explanation: "",
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API}/5494af1f14a8c19939968c3e9e2d4f79.json`
        );
        if (!response.ok) {
          throw new Error("Lỗi khi tải dữ liệu.");
        }
        const data = await response.json();
        setQuestions(data);
        // setJsonData(data);
      } catch (error) {
        console.error("Lỗi khi đọc file JSON:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log(questions);
  }, [questions]);

  const handleOpenModal = () => {
    setModalState(true);
  };

  return (
    <>
      {/* <audio ref={audioElement}>
        <source src="./Duong_mot_chieu_a.mp3" type="audio/mpeg"></source>
      </audio> */}
      <button onClick={handleOpenModal}>Play Audio</button>
      <ModalQuestion
        open={modalState}
        onClose={() => setModalState(false)}
        question={questions[0]}
      />
      {/* <Loading></Loading> */}
    </>
  );
}
