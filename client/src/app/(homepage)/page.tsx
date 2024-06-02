"use client";
import Image from "next/image";
import style from "./_components/homepage.module.scss";
import { SetStateAction, Suspense, useEffect, useState } from "react";
import logo from "../../assets/Images/Bien Dong Vay Goi.png";
import ruongBT from "../../assets/Images/Ruong bac thang.png";
import nhaThoBD from "../../assets/Images/Nha tho duc ba.png";
import thapTH from "../../assets/Images/Thap tram huong-Khanh Hoa.png";
import boat from "../../assets/Images/Con_thuyen.png";
import boat_st4 from "../../assets/Images/Con_thuyen_nguoc.png";
import tick from "../../assets/Images/nut_danh_dau.png";
import Loading from "@/components/Loading/Loading";
import Question from "@/types/question";
import Stage1 from "@/app/(homepage)/_components/stage1";
import Stage2 from "@/app/(homepage)/_components/stage2";
import Stage3 from "@/app/(homepage)/_components/stage3";
import Stage4 from "@/app/(homepage)/_components/stage4";

export default function HomePage() {
  const [loadingState, setLoadingState] = useState<boolean>(true);
  // const [abc, setAbc] = useState<number>(0);
  const [isZoom, setIsZoom] = useState<boolean>(false);
  const [isLogo, setIsLogo] = useState<boolean>(false);
  const [showTick, setShowTick] = useState(false);
  const [showBoat, setShowBoat] = useState(false);
  const [modalState, setModalState] = useState<boolean>(false);
  const [stage, setStage] = useState<number>(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [stage2Class, setStage2Class] = useState(style.aniGoLySon);
  const [stage3Class, setStage3Class] = useState(style.startStage3);
  const [stage4Class, setStage4Class] = useState(style.startStage4);

  const handleBtnStart = () => {
    setIsLogo(true);
    setStage(1);

    setTimeout(() => {
      setIsZoom(true);
    }, 2000);

    setTimeout(() => {
      setShowTick(true);
    }, 4500);

    setTimeout(() => {
      setShowBoat(true);
    }, 8500);

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

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (stage === 2) {
      timer = setTimeout(() => {
        setStage2Class(style.zoom_1);
      }, 10000);
    }
    return () => clearTimeout(timer);
  }, [stage]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (stage === 3) {
      timer = setTimeout(() => {
        setStage3Class(style.aniGoTrSa);
      }, 100);
      timer = setTimeout(() => {
        setStage3Class(style.zoom_1);
      }, 10000);
    }
    return () => clearTimeout(timer);
  }, [stage]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (stage === 4) {
      timer = setTimeout(() => {
        setStage4Class(style.aniGoConDao);
      }, 100);
      timer = setTimeout(() => {
        setStage4Class(style.zoom_1);
      }, 7000);
    }
    return () => clearTimeout(timer);
  }, [stage]);

  
  // const getZoomClass = () => {
  //   switch (stage) {
  //     case 1:
  //       return style.zoom_st1;
  //     case 2:
  //       return style.zoom_st2;
  //     case 3:
  //       return style.zoom_st3;
  //     case 4:
  //       return style.zoom_st4;
  //     case 5:
  //       return style.zoom_st5;
  //     default:
  //       return "";
  //   }
  // };

  const changeNewStage = () => {
      setStage(stage + 1);
    // console.log(stage);
    if (stage == 1) {
      setIsZoom(false);
    }
    if (stage == 3){
      
    }
  };

  return (
    <>
      {loadingState ? (
        <Loading />
      ) : (
        <>
          {/* <VisualNovel></VisualNovel> */}
          <div
            className={`${stage == 1 ? style.zoom_st1 : ""} ${stage == 2 ? stage2Class : ""} ${
              stage == 3 ? stage3Class : ""
            } ${stage == 4 ? stage4Class : ""} ${style.background_Login} ${isZoom ? style.zoom : ""}`}
          >
            <button className={`${style.click}`} onClick={changeNewStage}>
              aaa
            </button>

            <div
              className={`${style.logo} ${isLogo ? style.display_none : ""}`}
            >
              <div className={`${style.logo_img}`}>
                <Image src={logo} alt={""}></Image>
              </div>
              <button
                className={`${style.button_start}`}
                onClick={handleBtnStart}
              >
                Bắt Đầu
              </button>
            </div>
            <div className={`${style.ruongBT} ${style.mainDiaDiem}`}>
              <Image src={ruongBT} alt=""></Image>
              {/* <p>Điện Biên</p> */}
            </div>
            <div className={`${style.thapTH} ${style.mainDiaDiem}`}>
              <Image src={thapTH} alt=""></Image>
              {/* <p>Khánh Hòa</p> */}
            </div>
            <div className={`${style.nhaThoDB} ${style.mainDiaDiem}`}>
              <Image src={nhaThoBD} alt=""></Image>
              {/* <p>TP. Hồ Chí Minh</p> */}
            </div>
            <div className={`${style.canTho} ${style.mainDiaDiem}`}>
              <p>Cần Thơ</p>
            </div>
            <div className={`${style.conDao} ${style.mainDiaDiem}`}>
              <p>Côn Đảo</p>
            </div>
            <div className={`${style.lySon} ${style.mainDiaDiem}`}>
              <p>Đảo Lý Sơn</p>
            </div>
            <div className={`${style.trSa} ${style.mainDiaDiem}`}>
              <p>Đảo Trường Sa</p>
            </div>
            <div className={`${style.hSa} ${style.mainDiaDiem}`}>
              <p>Đảo Hoàng Sa</p>
            </div>

            {stage == 1 && (
              <>
                {showTick && (
                  <>
                    <div className={`${style.tick_img}`}>
                      <Image src={tick} alt=""></Image>
                    </div>
                  </>
                )}
                {showBoat && (
                  <>
                    <Stage1 open={modalState} onClose={setModalState}></Stage1>
                  </>
                )}
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

            {stage == 4 && <>
                <Stage4 onSt3Close={changeNewStage}></Stage4>
            </>}
            {stage == 5 && <></>}
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
