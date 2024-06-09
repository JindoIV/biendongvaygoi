"use client";
import Modal from "react-modal";
import "./VisualNovel.css";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Khung_Thoai from "../../assets/Images/Khung_Thoai.png";
import Button from "antd/es/button";
import { CaretRightOutlined } from "@ant-design/icons";
import { ConfigProvider } from "antd";
import { TinyColor } from "@ctrl/tinycolor";

interface ModalAction {
  open: boolean;
  onClose: () => void;
  onEndVN: () => void;
}

const Thoai = [
  {
    character: "Hướng dẫn viên Ngân",
    content:
      " Vậy là chuyến hành trình của chúng ta đã kết thúc rồi, cảm ơn các bạn đã tham gia hết mình cùng chị. Hy vọng các bạn đã có một trải nghiệm thật đáng nhớ.",
  },
  {
    character: "Hướng dẫn viên Ngân",
    content: "Tạm biệt và hẹn gặp lại các bạn!",
  },
];

const VisualNovelEndGame = ({ open, onClose, onEndVN }: ModalAction) => {
  const min = 0,
    max = 1;
  const [character, setCharacter] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [stageThoai, setStageThoai] = useState<number>(0);

  const [isClickk, setIsClickk] = useState<boolean>(false);
  const [isTextWrite, setIsTextWrite] = useState<boolean>(false);
  const typewriterRef = useRef<HTMLDivElement>(null);
  const typingRef = useRef<boolean>(false);

  useEffect(() => {
    if (open) {
      initText();
    }
  }, [open]);

  const initText = () => {
    setCharacter(Thoai[min].character);
    typeTextEffect(Thoai[min].content);
  };

  const handleStageThoai = () => {
    if (!isTextWrite) {
      if (stageThoai < max) {
        setStageThoai(stageThoai + 1);
      } else {
        onEndVN();
        onClose();
      }
    } else {
      typingRef.current = false;
    }
  };

  const handleSkipStageThoai = () => {
    // onEndVN();
    onClose();
  };

  useEffect(() => {
    if (!typingRef.current) {
      setIsTextWrite(false);
      if (typewriterRef.current) {
        typewriterRef.current.innerHTML = "";
        typewriterRef.current.innerHTML = Thoai[stageThoai].content;
      }
    }
  }, [typingRef.current]);

  useEffect(() => {
    setCharacter(Thoai[stageThoai].character);
    setContent(Thoai[stageThoai].content);
  }, [stageThoai]);

  useEffect(() => {
    typeTextEffect(content);
  }, [content]);

  const typeTextEffect = (text: string = "") => {
    if (typewriterRef.current) {
      typewriterRef.current.innerHTML = "";
    }
    const speed = 50;
    setIsTextWrite(true);
    typingRef.current = true;

    let i = 0;
    const type = () => {
      if (typingRef.current && i < text.length) {
        if (typewriterRef.current) {
          typewriterRef.current.innerHTML += text.charAt(i);
        }
        i++;
        setTimeout(type, speed);
      } else {
        setIsTextWrite(false);
      }
    };
    type();
  };

  const colors1 = ["#3300FF", "#04BEFE"];
  const colors2 = ["#FF0000", "#8B1A1A"];

  const getHoverColors = (colors: string[]) =>
    colors.map((color) => new TinyColor(color).lighten(5).toString());

  const getActiveColors = (colors: string[]) =>
    colors.map((color) => new TinyColor(color).darken(5).toString());

  return (
    <>
      {open && (
        <div className="ContainerCharacterEndGame">
          <div className="ImageCharacter1VisualNovelEndGame"></div>
          <div className="ImageCharacter2VisualNovelEndGame"></div>
        </div>
      )}
      <Modal
        isOpen={open}
        className="ModalVisualNovelEndGame"
        // onAfterOpen={afterOpenModal}
        // onRequestClose={onClose}
        // style={customStyles}
        contentLabel="Confirm music"
        overlayClassName="OverlayVisualNovelEndGame"
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
            <div className="ContentVisualNovel" ref={typewriterRef}></div>
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
                <Button type={"primary"} onClick={() => handleStageThoai()}>
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
                <Button type={"primary"} onClick={() => handleSkipStageThoai()}>
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

export default VisualNovelEndGame;
