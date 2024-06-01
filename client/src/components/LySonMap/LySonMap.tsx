"use client";
import "./LySonMap.css";
import * as image from "@/assets/Images/LySonMap";
import Image from "next/image";
import BoxInfoLySon from "../BoxInfoLySon/BoxInfoLySon";
import { useState, useEffect } from "react";
interface LySonMapProps{
  closeMap: () => void;
}

const LySonMap = ({ closeMap }: LySonMapProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentPlace, setCurrentPlace] = useState<string>("");
  const [randomNumber, setRandomNumber] = useState<number>(0);
  const [showStar, setShowStar] = useState<boolean>(false);
  const [points, setPoints] = useState<number>(0);


  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * 10) + 1);
  }, []);



  const displayBoxInfo = (place: string, number: number) => {
    if (number === randomNumber) {
      setShowStar(true);
      setRandomNumber(0);
      setTimeout(() => {

        
      setPoints(points + 1);


      }, 5200);
    } else {
      setShowStar(false);
    }
    setCurrentPlace(place);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };


  const places = [
    { className: "dinh_lang", label: "Đình Làng An Hải", img: image.dinh_lang, place: "dinh_lang", number: 1 },
    { className: "cot_co", label: "Cột cờ Tổ Quốc", img: image.cot_co, place: "cot_co", number: 2 },
    { className: "hai_dang", label: "Hải Đăng", img: image.hai_dang, place: "hai_dang", number: 3 },
    { className: "trung_bay", label: "Nhà Trưng bày Hải đội Hoàng Sa kiêm quản Bắc Hải", img: image.trung_bay, place: "trung_bay", number: 4 },
    { className: "chua1", label: "Chùa Đục", img: image.chua, place: "chua1", number: 5 },
    { className: "chua2", label: "Chùa Hang", img: image.chua, place: "chua2", number: 6 },
    { className: "nui1", label: "Núi Thới Lới", img: image.nui_lua, place: "nui1", number: 7 },
    { className: "nui2", label: "Núi Giếng Tiên", img: image.nui_lua, place: "nui2", number: 8 },
    { className: "dinh_lang2", label: "Đình Làng An Vĩnh", img: image.dinh_lang, place: "dinh_lang2", number: 9 },
    { className: "cang_bien", label: "Cảng Lý Sơn", img: image.cang, place: "cang_LS", number: 10 },
  ];


  return (
    <>
      <div className={`backgroundLS ${isOpen ? 'blur' : ''}`}> 
      {places.map(({ className, label, img, place, number }) => (
          <div key={place} className={`${className} image_LSMap`} onClick={() => displayBoxInfo(place, number)}>
            <Image src={img} alt="" />
            <p>{label}</p>
          </div>
        ))}

      <div className="points">Points: {points}</div>
      </div>
      <div className="btnX" onClick={closeMap}>
        <Image src={image.btn_thoat} alt=""></Image>
      </div>
      <BoxInfoLySon open={isOpen} place={currentPlace} showStar={showStar} closeModal={closeModal}/>
        
    </>
  );
};
export default LySonMap;
