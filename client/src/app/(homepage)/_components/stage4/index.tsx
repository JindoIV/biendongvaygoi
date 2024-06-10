"use-client";
import style from "../homepage.module.scss";
import Image from "next/image";
import boat_st4 from "../../../../assets/Images/Con_thuyen_nguoc.png";
import { useEffect, useState } from "react";
import VisualNovelEndGame from "@/components/VisualNovel3/VisualNovelEndGame";
import ModalResult from "@/components/ModalResult";
interface Stage4Props {
  onSt3Close: () => void;
}
const Stage4 = ({ onSt3Close }: Stage4Props) => {
  const [isVisualNovelShow, setIsVisualNovelShow] = useState<boolean>(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisualNovelShow(true);
    }, 9000);
    return () => clearTimeout(timer);
  }, []);

  const [resultTable, setResultTable] = useState<boolean>(false);

  const handleEndGame = () => {
    console.log("cc");
    setResultTable(true);
  };

  return (
    <>
      <div className={`${style.boat_img_st_4} ${style.boat_img}`}>
        <Image src={boat_st4} alt={""} />
      </div>
      <VisualNovelEndGame
        open={isVisualNovelShow}
        onClose={() => setIsVisualNovelShow(false)}
        onEndVN={handleEndGame}
      ></VisualNovelEndGame>
      <ModalResult
        open={resultTable}
        onClose={function (): void {
          throw new Error("Function not implemented.");
        }}
      ></ModalResult>
    </>
  );
};

export default Stage4;
