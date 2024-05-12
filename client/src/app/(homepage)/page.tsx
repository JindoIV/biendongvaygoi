"use client";
import Image from "next/image";
import style from "./homepage.module.scss";
import { Suspense, useEffect, useState } from "react";
import img_txt from "../../assets/Images/biendongvaygoichu.png";
import img_bg from "../../assets/Images/biendongvaygoinen.png";
import boat from "../../assets/Images/Con_thuyen.png";
import tick from "../../assets/Images/nut_danh_dau.png";
import Menu from "@/app/(homepage)/_components/Menu/Menu";
import Loading from "@/components/Loading/Loading";
import ModalQuestion from "@/app/(homepage)/_components/Modal/ModalQuestion";
import Question from "@/app/types/question";

export default function HomePage() {
  // const [abc, setAbc] = useState<number>(0);
  const [isZoom, setIsZoom] = useState<boolean>(false);
  const [showBoat, setShowBoat] = useState(false);
  const [showTick, setShowTick] = useState(false);
  const [modalState, setModalState] = useState<boolean>(false);
  const [questions, setQuestions] = useState<Question[]>([]);

  const handleButtonClick = () => {
    setIsZoom(true);
    setTimeout(() => {
      setShowBoat(true);
    }, 4500);

    setTimeout(() => {
      setShowTick(true);
    }, 4500);

    setTimeout(() => {
      setModalState(true);
    }, 12000);
  };

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
        console.log(data);
        // setJsonData(data);
      } catch (error) {
        console.error("Lỗi khi đọc file JSON:", error);
      }
    };

    fetchData();
  }, []);

  const [loadingState, setLoadingState] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadingState(false);
    }, 3000);
  }, []);

  // const handleButtonClick = () => {
  //   setIsZoom(true);
  //   setTimeout(() => {
  //     setShowBoat(true);
  //   }, 0);

  //   setTimeout(() => {
  //     setModalState(true);
  //   }, 0);
  // };

  // useEffect(() => {
  //   let a = 1;
  //   console.log(abc);
  // }, [abc]);

  // const add = () => {
  //   return 2;
  // };

  return (
    <>
      {loadingState ? (
        <Loading />
      ) : (
        <>
          <Menu />
          <div
            className={`${style.background_Login} ${isZoom ? style.zoom : ""}`}
          >
            <div
              className={`${style.logo} ${isZoom ? style.display_none : ""}`}
            >
              <div className={`${style.logo_img}`}>
                <Image
                  className={`${style.logo_txt}`}
                  src={img_txt}
                  alt={""}
                ></Image>
                <Image
                  className={`${style.logo_bg}`}
                  src={img_bg}
                  alt={""}
                ></Image>
              </div>
              <button
                className={`${style.button_start}`}
                onClick={handleButtonClick}
              >
                Start
              </button>
            </div>
            {showBoat && (
              <div className={`${style.boat_img}`}>
                <Image src={boat} alt={""} />
              </div>
            )}
            {showTick && (
              <div className={`${style.tick_img}`}>
                <Image src={tick} alt={""} />
              </div>
            )}
          </div>
          {/* <ModalQuestion
            open={modalState}
            onClose={() => setModalState(false)}
            question={questions}
          /> */}
        </>
      )}
    </>
  );
}
