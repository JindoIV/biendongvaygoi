"use client";
import Modal from "react-modal";
import "./VisualNovel.css";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Khung_Thoai from "../../assets/Images/Khung_Thoai.png";
import Typewriter from "typewriter-effect";
import Button from "antd/es/button";
import { CaretRightOutlined } from "@ant-design/icons";
import { ConfigProvider } from "antd";
import { TinyColor } from "@ctrl/tinycolor";

interface ModalAction {
  open: boolean;
  onClose: () => void;
  //   question: Question | undefined;
}

const Thoai = [
  {
    character: "Thủy thủ",
    content: "Chào cô hướng dẫn viên!",
  },
  {
    character: "Võ Thị Sáu",
    content: "Chào tất cả mọi người! Chúng ta cùng tham quan biển Đông nha",
  },
  {
    character: "Thủy Thủ",
    content: "Oki lun!",
  },
];

const VisualNovel = ({ open, onClose }: ModalAction) => {
  //   const [modalConfirm, setModalConfirm] = useState<boolean>(true);

  const [character, setCharacter] = useState<string>();
  const [content, setContent] = useState<string>();

  const [stageThoai, setStageThoai] = useState<number>(0);

  useEffect(() => {
    setCharacter(Thoai[0].character);
    setContent(Thoai[0].content);
  }, []);

  useEffect(() => {
    if (stageThoai < 3) {
      setCharacter(Thoai[stageThoai].character);
      setContent(Thoai[stageThoai].content);
    }
  }, [stageThoai]);

  const typewriterRef = useRef<any>(null);

  useEffect(() => {
    if (typewriterRef.current) {
      typewriterRef.current
        .deleteAll()
        .typeString(content ?? "")
        .pauseFor(5000)
        .start();
    }
  }, [content]);

  const colors1 = ["#3300FF", "#04BEFE"];
  const colors2 = ["#FF0000", "#8B1A1A"];

  const getHoverColors = (colors: string[]) =>
    colors.map((color) => new TinyColor(color).lighten(5).toString());

  const getActiveColors = (colors: string[]) =>
    colors.map((color) => new TinyColor(color).darken(5).toString());

  return (
    <>
      {open && (
        <div className="ContainerCharacter">
          <div className="ImageCharacter1VisualNovel"></div>
          <div className="ImageCharacter2VisualNovel"></div>
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
              <span>{character}</span>
            </div>
            <div className="ContentVisualNovel">
              <Typewriter
                onInit={(typewriter) => {
                  typewriterRef.current = typewriter;
                  typewriter
                    .typeString(content ?? "")
                    .pauseFor(2500)
                    .start();
                }}
              />
            </div>
            <div className="ButtonNextVisualNovel">
              <ConfigProvider
                theme={{
                  components: {
                    Button: {
                      colorPrimary: `linear-gradient(135deg, ${colors1.join(
                        ", "
                      )})`,
                      colorPrimaryHover: `linear-gradient(135deg, ${getHoverColors(
                        colors1
                      ).join(", ")})`,
                      colorPrimaryActive: `linear-gradient(135deg, ${getActiveColors(
                        colors1
                      ).join(", ")})`,
                      lineWidth: 0,
                    },
                  },
                }}
              >
                <Button
                  type={"primary"}
                  onClick={() => setStageThoai(stageThoai + 1)}
                >
                  Tiếp <CaretRightOutlined />
                </Button>{" "}
              </ConfigProvider>
              <ConfigProvider
                theme={{
                  components: {
                    Button: {
                      colorPrimary: `linear-gradient(135deg, ${colors2.join(
                        ", "
                      )})`,
                      colorPrimaryHover: `linear-gradient(135deg, ${getHoverColors(
                        colors2
                      ).join(", ")})`,
                      colorPrimaryActive: `linear-gradient(135deg, ${getActiveColors(
                        colors2
                      ).join(", ")})`,
                      lineWidth: 0,
                    },
                  },
                }}
              >
                <Button type={"primary"}>
                  Skip <CaretRightOutlined />
                </Button>
              </ConfigProvider>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default VisualNovel;
