"use client";
import "./LySonMap.css";
import * as image from "@/assets/Images/LySonMap";
import Image from "next/image";
const LySonMap = () => {
  return (
    <>
      <div className="background">
        <div className="dinh_lang">
          <Image src={image.dinh_lang} alt=""></Image>
        </div>
        <div className="cot_co">
          <Image src={image.cot_co} alt=""></Image>
        </div>
        <div className="hai_dang">
          <Image src={image.hai_dang} alt=""></Image>
        </div>
        <div className="trung_bay">
          <Image src={image.trung_bay} alt=""></Image>
        </div>
        <div className="chua1">
          <Image src={image.chua} alt=""></Image>
        </div>
        <div className="chua2">
          <Image src={image.chua} alt=""></Image>
        </div>
        <div className="nui1">
          <Image src={image.nui_lua} alt=""></Image>
        </div>
        <div className="nui2">
          <Image src={image.nui_lua} alt=""></Image>
        </div>
        <div className="dinh_lang2">
          <Image src={image.dinh_lang} alt=""></Image>
        </div>
        <div className="con_thuyen"></div>
      </div>
    </>
  );
};
export default LySonMap;
