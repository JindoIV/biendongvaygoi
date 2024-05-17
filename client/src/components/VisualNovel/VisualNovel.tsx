"use client";
import Modal from "react-modal";
import "./VisualNovel.css";
import { useState } from "react";
import Image from "next/image";
import Khung_Thoai from "../../assets/Images/Khung_Thoai.png";
import NhanVatChinh from "../../assets/Images/nhan_vat_chinh.png";

interface ModalAction {
  open: boolean;
  onClose: () => void;
  //   question: Question | undefined;
}

const VisualNovel = ({ open, onClose }: ModalAction) => {
  //   const [modalConfirm, setModalConfirm] = useState<boolean>(true);

  return (
    <>
      {open && (
        <div className="ContainerCharacter">
          <div className="ImageCharacter1VisualNovel"></div>
          <div className="ImageCharacter1VisualNovel"></div>
        </div>
      )}
      <Modal
        isOpen={open}
        className="ModalVisualNovel"
        // onAfterOpen={afterOpenModal}
        // onRequestClose={onClose}
        // style={customStyles}
        contentLabel="Confirm music"
        overlayClassName="OverlayVisualNovel"
      >
        <div className="ModalContainerVisualNovel">
          <div className="BackgroundVisualNovel">
            <Image
              className="ImageVisualNovel"
              src={Khung_Thoai}
              alt={""}
            ></Image>
            <div className="RoleVisualNovel">
              <span>Thuỷ thủ</span>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default VisualNovel;
