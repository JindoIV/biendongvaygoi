"use client";
import Image from "next/image";
import style from "./homepage.module.scss";
import { useEffect, useState } from "react";
import img from "../../assets/Images/biendongvaygoichu.png";

export default function HomePage() {
  const [abc, setAbc] = useState<number>(0);

  const [isZoom, setIsZoom] = useState<boolean>(false);

  useEffect(() => {
    let a = 1;
    console.log(abc);
  }, [abc]);

  const add = () => {
    return 2;
  };

  return (
    <>
      <div className={`${style.background_Login}`}>
        <div className={`${style.img_logo}`}>
          <Image src={img} alt={""}></Image>
        </div>
      </div>
      {/* <div className={`${style.img_logo}`}>
        <Image src={img} alt={""}></Image>
        <img src={"./biendongvaygoichu.png"} alt={""}></img>
      </div> */}
      {/* <button
          className={`${style.button_start}`}
          onClick={() => setIsZoom(!isZoom)}
        >
          Bắt Đầu
        </button> */}
    </>
  );
}
