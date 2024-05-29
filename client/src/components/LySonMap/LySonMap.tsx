"use client";
import "./LySonMap.css";
import * as image from "@/assets/Images/LySonMap";
import Image from "next/image";
import BoxInfoLySon from "../BoxInfoLySon/BoxInfoLySon";
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
      <div className={`background ${isOpen ? 'blur' : ''}`}> 
        <div className="dinh_lang image_LSMap" onClick={() => displayBoxInfo("dinh_lang")}>
          <Image src={image.dinh_lang} alt="" />
          <p>Đình Làng An Hải</p>
        </div>
        <div className="cot_co image_LSMap" onClick={() => displayBoxInfo("cot_co")}>
          <Image src={image.cot_co} alt="" />
          <p>Cột cờ Tổ Quốc</p>
        </div>
        <div className="hai_dang image_LSMap" onClick={() => displayBoxInfo("hai_dang")}>
          <Image src={image.hai_dang} alt="" />
          <p>Hải Đăng</p>
        </div>
        <div className="trung_bay image_LSMap" onClick={() => displayBoxInfo("trung_bay")}>
          <Image src={image.trung_bay} alt="" />
          <p>Nhà Trưng bày Hải đội Hoàng Sa kiêm quản Bắc Hải</p>
        </div>
        <div className="chua1 image_LSMap" onClick={() => displayBoxInfo("chua1")}>
          <Image src={image.chua} alt="" />
          <p>Chùa Đục</p>
        </div>
        <div className="chua2 image_LSMap" onClick={() => displayBoxInfo("chua2")}>
          <Image src={image.chua} alt="" />
          <p>Chùa Hang</p>
        </div>
        <div className="nui1 image_LSMap" onClick={() => displayBoxInfo("nui1")}>
          <Image src={image.nui_lua} alt="" />
          <p>Núi Thới Lới</p>
        </div>
        <div className="nui2 image_LSMap" onClick={() => displayBoxInfo("nui2")}>
          <Image src={image.nui_lua} alt="" />
          <p>Núi Giếng Tiên</p>
        </div>
        <div className="dinh_lang2 image_LSMap" onClick={() => displayBoxInfo("dinh_lang2")}
        >
          <Image src={image.dinh_lang} alt="" />
          <p>Đình Làng An Vĩnh</p>
        </div>
        <div className="con_thuyen_ls">
          <Image src={image.con_thuyen} alt="" />
          <p>Cảng Lý Sơn</p>
        </div>
      </div>
      <BoxInfoLySon open={isOpen} place={currentPlace} closeModal={closeModal}/>
    </>
  );
};
export default LySonMap;
