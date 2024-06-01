"use-client";
import style from "../homepage.module.scss";
import Image from "next/image";
import boat from "../../../../assets/Images/Con_thuyen.png";
import VisualNovel from "@/components/VisualNovel1/VisualNovel";
import { Dispatch, SetStateAction } from "react";

interface Stage1 {
  open: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
}

const Stage1 = ({ open, onClose }: Stage1) => {
  return (
    <>
      <div>
        <div className={`${style.boat_img_st_1} ${style.boat_img}`}>
          <Image src={boat} alt={""} />
        </div>
      </div>
      {/* <VisualNovel open={open} onClose={() => onClose(false)}></VisualNovel> */}
    </>
  );
};

export default Stage1;
