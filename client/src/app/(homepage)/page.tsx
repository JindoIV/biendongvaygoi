"use client";
import Image from "next/image";
import style from "./_components/homepage.module.scss";
import { SetStateAction, Suspense, useEffect, useState } from "react";
import img_txt from "../../assets/Images/biendongvaygoichu.png";
import img_bg from "../../assets/Images/biendongvaygoinen.png";
import boat from "../../assets/Images/Con_thuyen.png";
import boat_st4 from "../../assets/Images/Con_thuyen_nguoc.png";
import tick from "../../assets/Images/nut_danh_dau.png";
import Loading from "@/components/Loading/Loading";
import Question from "@/types/question";
import Stage1 from "@/app/(homepage)/_components/stage1";
import Stage2 from "@/app/(homepage)/_components/stage2";
import Stage3 from "@/app/(homepage)/_components/stage3";

export default function HomePage() {
  const [loadingState, setLoadingState] = useState<boolean>(true);
  // const [abc, setAbc] = useState<number>(0);
  const [isZoom, setIsZoom] = useState<boolean>(false);
  const [showTick, setShowTick] = useState(false);
  const [modalState, setModalState] = useState<boolean>(false);
  const [stage, setStage] = useState<number>(0);
  const [questions, setQuestions] = useState<Question[]>([]);

  const handleButtonClick = () => {
    setIsZoom(true);
    setStage(2);

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

  useEffect(() => {
    setTimeout(() => {
      setLoadingState(false);
    });
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

  const getZoomClass = () => {
    switch (stage) {
      case 1:
        return style.zoom_st1;
      case 2:
        return style.zoom_st2;
      case 3:
        return style.zoom_st3;
      case 4:
        return style.zoom_st4;
      case 5:
        return style.zoom_st5;
      default:
        return "";
    }
  };

  const st2 = () => {
    let a = stage;
    a++;
    setStage(a);
    console.log(stage);
  };

  const changeNewStage = () =>{
    setStage(stage + 1);
    console.log(stage);
  }

  return (
    <>
      {loadingState ? (
        <Loading />
      ) : (
        <>
          {/* <VisualNovel></VisualNovel> */}
          <div
            className={`${getZoomClass()} ${stage == 2 ? style.aniGoLySon : ""} ${stage == 3 ? style.aniGoTrSa : ""} ${style.background_Login} ${
              isZoom ? style.zoom : ""
            }`}
          >
            {/* <button onClick={st2}>aaa</button> */}

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
                Bắt Đầu
              </button>
            </div>
            {stage == 1 && showTick && (
              <>
                <Stage1 open={modalState} onClose={setModalState}></Stage1>
              </>
            )}
            {stage == 2 && (
              <>
                <Stage2 onSt2Close={changeNewStage}></Stage2>
              </>
            )}
            {stage == 3 && (
              <>
                <Stage3 onSt3Close={changeNewStage}></Stage3>
              </>
            )}

            {stage == 4 && (
              <>
              </>
            )}
            {stage == 5 && (
              <>
              </>
            )}
          </div>
          {/* <VisualNovel
            open={modalState}
            onClose={() => setModalState(false)}
          ></VisualNovel> */}
          {/* <ModalQuestion
            open={modalState}
            onClose={() => setModalState(false)}
          question={questions}
          />  */}
        </>
      )}
    </>
  );
}
