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
    character: "Cá Ông",
    content:
      " Xin chào các bạn nhỏ, ta là Cá Ông đây. Dạo gần đây, ta và các bạn của mình liên tục bị làm phiền từ rác thải của con người, không chỉ có rác thải nhựa thì mà còn có hóa chất độc hại,... ",
  },
  {
    character: "Cá Ông",
    content:
      " Khiến cho cuộc sống của chúng ta trở nên rất tồi tệ gây ra sự chết chóc của các loài cá và ô nhiễm môi trường nước trầm trọng.",
  },
  {
    character: "Cá Ông",
    content: `Vì vậy, chúng ta hãy cùng chung tay bảo vệ môi trường nhé!`,
  },
  {
    character: "Cá Ông",
    content:
      "Để bắt đầu, các bạn hãy trả lời lần lượt các câu hỏi và thu thập rác thải. Chúc các bạn may mắn!",
  },
];

const VisualNovelCaVoi = ({ open, onClose, onEndVN }: ModalAction) => {
  const min = 0,
    max = 3;
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
    onEndVN();
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
        <div className="ContainerCharacterCaVoi">
          <div className="ImageCharacter1VisualNovelCaVoi"></div>
          <div className="ImageCharacter2VisualNovelCaVoi"></div>
        </div>
      )}
      <Modal
        isOpen={open}
        className="ModalVisualNovelCaVoi"
        // onAfterOpen={afterOpenModal}
        // onRequestClose={onClose}
        // style={customStyles}
        contentLabel="Confirm music"
        overlayClassName="OverlayVisualNovelCaVoi"
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

export default VisualNovelCaVoi;
