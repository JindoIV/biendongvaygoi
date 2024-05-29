"use client";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import "./BoxInfoLySon.css";

interface IBoxInfoLySon {
  open: boolean;
  place: string;
  closeModal: () => void;
}

const BoxInfoLySon = ({ open, place, closeModal }: IBoxInfoLySon) => {
  const [showInfo, setShowInfo] = useState<string>("");
  const [showTittle, setShowTittle] = useState<string>("");
  useEffect(() => {
    function displayInformation() {
      switch (place) {
        case "cot_co":
          setShowTittle("Cột cờ Tổ Quốc");
          setShowInfo("cot co nay bu cha ba lun");
          break;
        case "hai_dang":
          setShowTittle("Hải Đăng");
          setShowInfo("haiDang nay bu cha ba lun");
          break;
        case "nui1":
          setShowTittle("Núi Thới Lới");
          setShowInfo("nui1 nay bu cha ba lun");
          break;
        case "nui2":
          setShowTittle("Núi Giếng Tiên");
          setShowInfo("nui2 nay bu cha ba lun");
          break;
        case "chua1":
          setShowTittle("Chùa Đục");
          setShowInfo("chua1 nay bu cha ba lun");
          break;
        case "chua2":
          setShowTittle("Chùa Hang");
          setShowInfo("chua2 nay bu cha ba lun");
          break;
        case "dinh_lang":
          setShowTittle("Đình Làng An Hải");
          setShowInfo("dinhlang1 nay bu cha ba lun");
          break;
        case "dinh_lang2":
          setShowTittle("Đình Làng An Vĩnh");
          setShowInfo("dinhlang2 nay bu cha ba lun");
          break;
        case "trung_bay":
          setShowTittle("Nhà Trưng bày Hải đội Hoàng Sa kiêm quản Bắc Hải");
          setShowInfo("trungbay nay bu cha ba lun");
          break;
        default:
          setShowTittle("");
          setShowInfo("");
      }
    }
    displayInformation();
  }, [place]);

  return (
    <>
      <Modal
        isOpen={open}
        onRequestClose={closeModal}
        className="Modal"
        contentLabel="Example Modal"
        overlayClassName="Overlay"
      >
        <div className="box">
          <h1>{showTittle}</h1>
          <p>{showInfo}</p>
          <p className="xemTiep" onClick={closeModal}>Xem tiếp</p>
        </div>
      </Modal>
    </>
  );
};

export default BoxInfoLySon;
