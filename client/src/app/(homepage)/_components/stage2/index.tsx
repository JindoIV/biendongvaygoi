"use-client";
import style from "../homepage.module.scss";
import Image from "next/image";
import boat from "../../../../assets/Images/Con_thuyen.png";
import { useEffect, useState } from "react";
import LySonMap from "@/components/LySonMap/LySonMap";
interface Stage2Props {
  onMapClose: () => void; 
}
const Stage2 = ({ onMapClose }: Stage2Props) => {
  const[showMap, setShowMap] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMap(true);
    }, 9900);

    return () => clearTimeout(timer); 
  }, []);

  const handleCloseMap = () =>{
    setShowMap(false);
    onMapClose();
  }

  return (
    <>
        <div className={`${style.boat_img_st_2} ${style.boat_img}`}>
          <Image src={boat} alt={""} />
        </div>
        {showMap && <LySonMap closeMap={handleCloseMap}/>}
    </>
  );
};

export default Stage2;
