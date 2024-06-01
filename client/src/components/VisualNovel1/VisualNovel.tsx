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
  //   question: Question | undefined;
}

const Thoai = [
  {
    character: "Hướng dẫn viên Ngân",
    content:
      "Xin chào các bạn, chị là Ngân cũng là hướng dẫn viên du lịch đồng hành cùng các em vào lần trải nghiệm này. ",
  },
  {
    character: "Hướng dẫn viên Ngân",
    content: `Trong chuyến đi này, chúng ta sẽ có 3 chặng đường chính.
    Chặng 1: Bắt đầu từ Côn Đảo đến “Vương quốc tỏi-Lý Sơn”.
    Chặng 2: Từ Lý Sơn ta sẽ đi đến Biển đảo “Hoàng Sa-Trường Sa”. 
    Chặng 3, cũng là chặng đường cuối cùng: từ biển khơi, ta sẽ trở về Côn Đảo.
    `,
  },
  {
    character: "Hướng dẫn viên Ngân",
    content:
      "Và để vượt qua các chặng đường, các bạn phải trả lời lần lượt các câu hỏi liên quan đến lịch sử, địa lý và tự nhiên,…",
  },
  {
    character: "Hướng dẫn viên Ngân",
    content:
      "Nhưng các bạn cũng đừng quá lo lắng nhé, vì chị luôn ở đây để giúp đỡ các bạn, chúc các em may mắn!",
  },
];

const VisualNovel = ({ open, onClose }: ModalAction) => {
  const [character, setCharacter] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [stageThoai, setStageThoai] = useState<number>(0);
  const typewriterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCharacter(Thoai[stageThoai].character);
    setContent(Thoai[stageThoai].content);
  }, [stageThoai]);

  // useEffect(() => {
  //   if (typewriterRef.current) {
  //     typewriterRef.current.innerHTML = "";
  //   }
  // }, []);

  useEffect(() => {
    if (open) {
      initText();
    }
  }, [open]);

  useEffect(() => {
    typeTextEffect(content);
  }, [content]);

  const initText = () => {
    setCharacter(Thoai[0].character);
    typeTextEffect(Thoai[0].content);
    return <></>;
  };

  const typeTextEffect = (text: string = "") => {
    if (typewriterRef.current) {
      typewriterRef.current.innerHTML = "";
    }
    const speed = 50;
    for (let i = 0; i < text.length; i++) {
      setTimeout(() => {
        if (typewriterRef.current) {
          typewriterRef.current.innerHTML += text.charAt(i);
        }
      }, speed * i);
    }
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
