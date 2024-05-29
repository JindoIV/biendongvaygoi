"use client";
import { useState, useEffect } from "react";
import Modal from "react-modal";

interface IBoxInfoLySon {
  open: boolean;
  place: string;
}

const BoxInfoLySon = ({ open, place }: IBoxInfoLySon) => {
  const [showInfo, setShowInfo] = useState<string>("");
  useEffect(() => {
    function displayInformation() {
      switch (place) {
        case "cot_co":
          setShowInfo("cot co nay bu cha ba lun");
          break;
        case "hai_dang":
          setShowInfo("haiDang nay bu cha ba lun");
          break;
        case "nui1":
          setShowInfo("nui1 nay bu cha ba lun");
          break;
        case "nui2":
          setShowInfo("nui2 nay bu cha ba lun");
          break;
        case "chua1":
          setShowInfo("chua1 nay bu cha ba lun");
          break;
        case "chua2":
          setShowInfo("chua2 nay bu cha ba lun");
          break;
        case "dinh_lang":
          setShowInfo("dinhlang1 nay bu cha ba lun");
          break;
        case "dinh_lang2":
          setShowInfo("dinhlang2 nay bu cha ba lun");
          break;
        case "trung_bay":
          setShowInfo("trungbay nay bu cha ba lun");
          break;
        default:
          setShowInfo("");
      }
    }
    displayInformation();
  }, [place]);

  return (
    <>
      <Modal
        isOpen={open}
        onRequestClose={()=>{}}
        className="Modal"
        contentLabel="Example Modal"
        overlayClassName="Overlay"
      >
        <p>{showInfo}</p>
      </Modal>
    </>
  );
};

export default BoxInfoLySon;
