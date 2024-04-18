"use client";
import Image from "next/image";
import map from "@/assets/Images/map.png";
import style from "./homepage.module.scss";
import { useEffect, useState } from "react";

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
      <button onClick={() => setIsZoom(!isZoom)}>click me</button>
      <div className={`${style.img_hover_zoom} ${isZoom ? style.zoom : ""}`}>
        <img src={"./nhan_vat_chinh.png"} alt={""}></img>
      </div>
    </>
  );
}
