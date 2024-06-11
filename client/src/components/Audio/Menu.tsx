"use client";
import "./Menu.css";
import Modal from "react-modal";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Button, Col, Row } from "antd";
import Loading from "@/components/Loading/Loading";
import star from "../../assets/Images/Star.png";
import { _Playfair, _Roboto } from "@/utils/font";
import { useSelector } from "react-redux";
import { RootState } from "@/libs/store";

export default function Menu() {
  const score = useSelector((state: RootState) => state.score.value);

  const audioElement = useRef<HTMLAudioElement>(null);
  const [isSoundOn, setIsSoundOn] = useState<boolean>(false);

  const [modalConfirm, setModalConfirm] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    handlePlayMusic();
    if (!isSoundOn && audioElement.current) {
      audioElement.current.pause();
      audioElement.current.currentTime = 0;
    }
  }, [isSoundOn]);

  const handlePlayMusic = () => {
    if (isSoundOn && audioElement.current) {
      audioElement.current.play();
    }
  };

  const handlePlayAudio = () => {
    setIsSoundOn(!isSoundOn);
  };

  const handleAudioEnded = () => {
    if (audioElement.current) {
      audioElement.current.currentTime = 0;
      audioElement.current.play();
    }
  };

  const handleInitSoundOn = (isInit: boolean) => {
    setIsSoundOn(isInit);
    setModalConfirm(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <section>
      {isLoading ? (
        <>
          <Loading></Loading>
        </>
      ) : (
        <>
          <audio ref={audioElement} onEnded={handleAudioEnded}>
            <source src="./Nhac-Nen.mp3" type="audio/mpeg"></source>
          </audio>

          <Modal
            isOpen={modalConfirm}
            className="ModalConfirmMusic"
            // onAfterOpen={afterOpenModal}
            onRequestClose={() => handleInitSoundOn(false)}
            // style={customStyles}
            // contentLabel="Confirm music"
            overlayClassName="OverlayConfirmMusic"
          >
            <div className="ModalContainerConfirmMusic">
              <div className="BackgroundConfirmMusic">
                <div className="BoxConfirmMusic">
                  <Row>
                    <h4 className={`${_Playfair}`}>
                      Bạn muốn trải nghiệm web với âm thanh không?
                    </h4>
                  </Row>
                  <Row gutter={16}>
                    <Col>
                      <Button
                        type="primary"
                        onClick={() => handleInitSoundOn(true)}
                      >
                        Có
                      </Button>
                    </Col>
                    <Col>
                      <Button onClick={() => handleInitSoundOn(false)}>
                        Không
                      </Button>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </Modal>

          <div className={"menu"}>
            <div className={"mainStar"}>
              <Image src={star} alt=""></Image>
              <p className="textPoint">{score}</p>
            </div>
            <div
              className={`${isSoundOn ? "am_luong_btn" : "mute_am_luong_btn"}`}
              onClick={handlePlayAudio}
            ></div>
          </div>
        </>
      )}
    </section>
  );
}
