"use client";
import "./TruongSaMap.css";
import * as image from "@/assets/Images/TruongSaMap";
import Image from "next/image";
import { useState } from "react";

const TruongSaMap = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
<>
  <div className={`background ${isOpen ? 'blur' : ''}`}> 
  <div className="question1">
    <Image src={image.question} alt=""/>
  </div>
  <div className="diaDiem1">
    <Image src={image.diaDiem} alt=""/>
  </div>
  </div>
  </>
  );
};
export default TruongSaMap;
