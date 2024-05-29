"use client";
import "./LySonMap.css";
import * as image from "@/assets/Images/LySonMap";
import Image from "next/image";
import BoxInfoLySon from "./BoxInfoLySon";
import { useState } from "react";
const LySonMap = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentPlace, setCurrentPlace] = useState<string>("");

  const displayBoxInfo = (place: string) => {
    setCurrentPlace(place);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="background">
        <div className="dinh_lang" onClick={() => displayBoxInfo("dinh_lang")}>
          <Image src={image.dinh_lang} alt="" />
        </div>
        <div className="cot_co" onClick={() => displayBoxInfo("cot_co")}>
          <Image src={image.cot_co} alt="" />
        </div>
        <div className="hai_dang" onClick={() => displayBoxInfo("hai_dang")}>
          <Image src={image.hai_dang} alt="" />
        </div>
        <div className="trung_bay" onClick={() => displayBoxInfo("trung_bay")}>
          <Image src={image.trung_bay} alt="" />
        </div>
        <div className="chua1" onClick={() => displayBoxInfo("chua1")}>
          <Image src={image.chua} alt="" />
        </div>
        <div className="chua2" onClick={() => displayBoxInfo("chua2")}>
          <Image src={image.chua} alt="" />
        </div>
        <div className="nui1" onClick={() => displayBoxInfo("nui1")}>
          <Image src={image.nui_lua} alt="" />
        </div>
        <div className="nui2" onClick={() => displayBoxInfo("nui2")}>
          <Image src={image.nui_lua} alt="" />
        </div>
        <div
          className="dinh_lang2"
          onClick={() => displayBoxInfo("dinh_lang2")}
        >
          <Image src={image.dinh_lang} alt="" />
        </div>
        <div className="con_thuyen"></div>
      </div>
      <BoxInfoLySon open={true} place={currentPlace} />
      {isOpen && <button onClick={closeModal}>Close</button>}
    </>
  );
};
export default LySonMap;
