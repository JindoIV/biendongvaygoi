"use-client";
import style from "../homepage.module.scss";
import Image from "next/image";
import boat from "../../../../assets/Images/Con_thuyen.png";
import { useEffect, useState } from "react";
import LySonMap from "@/components/LySonMap/LySonMap";

const Stage2 = () => {
  const[showMap, setShowMap] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMap(true);
    }, 9900);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <>
        <div className={`${style.boat_img_st_2} ${style.boat_img}`}>
          <Image src={boat} alt={""} />
        </div>
        {showMap && <LySonMap/>}
    </>
  );
};

export default Stage2;
