"use client";

import ModalQuestion from "@/app/(homepage)/_components/Modal/ModalQuestion";
import Question from "@/types/question";
import Loading from "@/components/Loading/Loading";
import { useEffect, useRef, useState } from "react";
import { http } from "@/utils/config";

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

  const [questions, setQuestions] = useState<Question[]>([]);
  const [questionSelected, setQuestionSelected] = useState<Question>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await http.get(
          `5494af1f14a8c19939968c3e9e2d4f79.json`
        );
        setQuestions(response.data.questions);
        setQuestionSelected(response.data.questions[1]);
        // setJsonData(data);
      } catch (error) {
        console.error("Lỗi khi đọc file JSON:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // console.log(questions);
  }, [questions]);

  const handleOpenModal = () => {
    if (questionSelected) {
      setModalState(true);
    } else {
      console.error("No question selected yet.");
    }
  };

  return (
    <>
      {/* <audio ref={audioElement}>
        <source src="./Duong_mot_chieu_a.mp3" type="audio/mpeg"></source>
      </audio> */}
      <button onClick={handleOpenModal}>Open modal</button>
      <ModalQuestion
        open={modalState}
        onClose={() => setModalState(false)}
        question={questionSelected}
      />
      {/* <Loading></Loading> */}
    </>
  );
}
