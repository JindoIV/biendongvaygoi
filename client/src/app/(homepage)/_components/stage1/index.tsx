"use client";
import style from "../homepage.module.scss";
import Image from "next/image";
import boat from "../../../../assets/Images/Con_thuyen.png";
import VisualNovel from "@/components/VisualNovel1/VisualNovel";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import ScreenAvA from "@/components/ScreenAvA/ScreenAvA";

interface Stage1 {
  open: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
  onNewStage: () => void;
}

const Stage1 = ({ open, onClose, onNewStage }: Stage1) => {
  const [isVisualNovelDone, setIsVisualNovelDone] = useState<boolean>();

  const handleEndVisual = () => {
    setIsVisualNovelDone(true);
  };

  const handleChangeStage = () => {
    onNewStage();
  };

  return (
    <>
      <div>
        <div className={`${style.boat_img_st_1} ${style.boat_img}`}>
          <Image src={boat} alt={""} />
        </div>
      </div>
      <VisualNovel
        open={open}
        onClose={() => onClose(false)}
        onEndVN={handleEndVisual}
      ></VisualNovel>
      {isVisualNovelDone && (
        <>
          <ScreenAvA
            open={isVisualNovelDone}
            onClose={() => {
              setIsVisualNovelDone(false);
              handleChangeStage();
            }}
          ></ScreenAvA>
        </>
      )}
    </>
  );
};

export default Stage1;
