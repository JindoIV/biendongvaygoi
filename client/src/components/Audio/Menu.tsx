"use client";
import "./Menu.css";
import Modal from "react-modal";
import React, { useState, useRef, useEffect } from "react";
import { Button, Col, Row } from "antd";

export default function Menu() {
  const audioElement = useRef<HTMLAudioElement>(null);
  const [isSoundOn, setIsSoundOn] = useState<boolean>(false);

  const [modalConfirm, setModalConfirm] = useState<boolean>(true);

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

  return (
    <section>
      <audio ref={audioElement} onEnded={handleAudioEnded}>
        <source src="./Duong_mot_chieu_a.mp3" type="audio/mpeg"></source>
      </audio>

      <Modal
        isOpen={modalConfirm}
        className="ModalConfirmMusic"
        // onAfterOpen={afterOpenModal}
        // onRequestClose={onClose}
        // style={customStyles}
        contentLabel="Confirm music"
        overlayClassName="OverlayConfirmMusic"
      >
        <div className="ModalContainerConfirmMusic">
          <div className="BackgroundConfirmMusic">
            <div className="BoxConfirmMusic">
              <Row>
                <h4>Bạn muốn trải nghiệm web với âm thanh không?</h4>
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
        <div
          className={`${isSoundOn ? "am_luong_btn" : "mute_am_luong_btn"}`}
          onClick={handlePlayAudio}
        ></div>
        <div className={"map_btn"}></div>
      </div>
    </section>
  );
}
