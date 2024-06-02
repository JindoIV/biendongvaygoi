"use-client";
import style from "../homepage.module.scss";
import Image from "next/image";
import boat_st4 from "../../../../assets/Images/Con_thuyen_nguoc.png";
interface Stage4Props {
  onSt3Close: () => void; 
}
const Stage4 = ({ onSt3Close }: Stage4Props) => {




  const handleCloseMap = () =>{
    // onMapClose();
  }

  return (
    <>
        <div className={`${style.boat_img_st_4} ${style.boat_img}`}>
          <Image src={boat_st4} alt={""} />
        </div>
    </>
  );
};

export default Stage4;
