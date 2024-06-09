"use-client";
import style from "../homepage.module.scss";
import Image from "next/image";
import boat_st4 from "../../../../assets/Images/Con_thuyen_nguoc.png";
import { useEffect, useState } from "react";
import VisualNovelEndGame from "@/components/VisualNovel3/VisualNovelEndGame";
interface Stage4Props {
  onSt3Close: () => void;
}
const Stage4 = ({ onSt3Close }: Stage4Props) => {
  const [isVisualNovelShow, setIsVisualNovelShow] = useState<boolean>(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisualNovelShow(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={`${style.boat_img_st_4} ${style.boat_img}`}>
        <Image src={boat_st4} alt={""} />
      </div>
      <VisualNovelEndGame
        open={isVisualNovelShow}
        onClose={() => setIsVisualNovelShow(false)}
        onEndVN={function (): void {
          throw new Error("Function not implemented.");
        }}
      ></VisualNovelEndGame>
    </>
  );
};

export default Stage4;
