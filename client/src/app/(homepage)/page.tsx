"use client";
import Image from "next/image";
import style from "./homepage.module.scss";
import { useEffect, useState } from "react";
import img_txt from "../../assets/Images/biendongvaygoichu.png";
import img_bg from "../../assets/Images/biendongvaygoinen.png";
import boat from "../../assets/Images/Con_thuyen.png";
import ModalQuestion from "@/app/(homepage)/_components/ModalQuestion";

export default function HomePage() {
  // const [abc, setAbc] = useState<number>(0);
  const [isZoom, setIsZoom] = useState<boolean>(false);
  const [showBoat, setShowBoat] = useState(false);
  const [modalState, setModalState] = useState<boolean>(false);

  const handleButtonClick = () => {
    setIsZoom(true);
    setTimeout(() => {
      setShowBoat(true);
    }, 4500);

    setTimeout(() => {
      setModalState(true);
    }, 12000);
  };

  // useEffect(() => {
  //   let a = 1;
  //   console.log(abc);
  // }, [abc]);

  // const add = () => {
  //   return 2;
  // };

  return (
    <>
      <div className={`${style.background_Login} ${isZoom ? style.zoom : ""}`}>
        <div className={`${style.logo} ${isZoom ? style.display_none : ""}`}>
          <div className={`${style.logo_img}`}>
            <Image
              className={`${style.logo_txt}`}
              src={img_txt}
              alt={""}
            ></Image>
            <Image className={`${style.logo_bg}`} src={img_bg} alt={""}></Image>
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
      </div>
      <ModalQuestion open={modalState} onClose={() => setModalState(false)} />
    </>
  );
}
