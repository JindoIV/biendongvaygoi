"use client";
import React, { useEffect, useState } from "react";
import "./_components/css/style.css";
import "./_components/css/modal.css";
import ModalQuestionGame from "@/components/ModalQuestionGame/ModalQuestionGame";
import { http } from "@/utils/config";
import Question from "@/types/question";
import { questionsBien } from "@/app/test2/QuestionsData";
import { useDispatch } from "react-redux";
import { incrementByAmount } from "@/libs/features/score/scoreSlide";

interface IGameCaVoi {
  open: boolean;
  onEndGame: () => void;
}

const GameCaVoi = ({ open, onEndGame }: IGameCaVoi) => {
  const dispatch = useDispatch();

  const [modalQuestion, setModalQuestion] = useState<boolean>(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [fetchDataDone, setFetchDataDone] = useState<boolean>(false);
  const [endQuestion, setEndQuestion] = useState<boolean>(false);
  const [questionSelected, setQuestionSelected] = useState<any>();

  const [questionsList, setQuestionsList] = useState<Question[]>(questionsBien);
  const [result, setResult] = useState<boolean>(false);
  const [score, setScore] = useState<any>();

  useEffect(() => {
    const container = document.querySelector("#unity-container");
    const canvas = document.querySelector("#unity-canvas");
    const warningBanner = document.querySelector("#unity-warning");

    function unityShowBanner(msg: any, type: any) {
      function updateBannerVisibility() {
        warningBanner.style.display = warningBanner.children.length
          ? "block"
          : "none";
      }
      const div = document.createElement("div");
      div.innerHTML = msg;
      warningBanner.appendChild(div);
      if (type === "error")
        div.setAttribute("style", "background: red; padding: 10px;");
      else {
        if (type === "warning")
          div.setAttribute("style", "background: yellow; padding: 10px;");
        setTimeout(() => {
          warningBanner.removeChild(div);
          updateBannerVisibility();
        }, 5000);
      }
      updateBannerVisibility();
    }

    const buildUrl = "./Build";
    const loaderUrl = buildUrl + "/LB_28_5.loader.js";
    const config = {
      dataUrl: buildUrl + "/LB_28_5.data.unityweb",
      frameworkUrl: buildUrl + "/LB_28_5.framework.js.unityweb",
      codeUrl: buildUrl + "/LB_28_5.wasm.unityweb",
      streamingAssetsUrl: "StreamingAssets",
      companyName: "DefaultCompany",
      productName: "Lan bien",
      productVersion: "1.0",
      showBanner: unityShowBanner,
    };

    // Mobile device style or Desktop style
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      const meta = document.createElement("meta");
      meta.name = "viewport";
      meta.content =
        "width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes";
      document.getElementsByTagName("head")[0].appendChild(meta);
      container.className = "unity-mobile";
      canvas.className = "unity-mobile";
    } else {
      canvas.setAttribute("style", "width: 1244px; height: 700px;");
    }

    const script = document.createElement("script");
    script.src = loaderUrl;
    script.onload = () => {
      createUnityInstance(canvas, config, (progress: any) => {})
        .then((unityInstance: any) => {
          window.ShowPopup = function () {
            handleOpenModal();
          };

          window.AddScore = function () {
            unityInstance.SendMessage(
              "Game Controller",
              "SetCanAddScore",
              "true"
            );
          };

          window.ClosePopup = function () {
            const popup = document.getElementById("gamePopup");
            if (popup) {
              document.body.removeChild(popup);
            }

            unityInstance.SendMessage("Game Controller", "ResumeGame");
          };

          window.pointGame = function (point: number) {
            setendQuestion(true);
            handleEndGame(point);
          };
        })
        .catch((message: any) => {
          alert(message);
        });
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup logic here if needed
    };
  }, [open]);

  useEffect(() => {
    if (endQuestion) {
      handleOpenModal();
    }
  }, [endQuestion]);

  const handleOpenModal = () => {
    initQuestion();

    setTimeout(() => {
      setModalQuestion(true);
    }, 400);
  };

  useEffect(() => {
    if (result) {
      setResult(false);
      AddScore();
    }
  }, [result]);

  const handleCloseModal = () => {
    setModalQuestion(false);

    setTimeout(() => {
      window.ClosePopup();
      if (endQuestion) {
        handleEndGame();
      }
    }, 100);
  };

  useEffect(() => {
    console.log(score);
  }, [score]);

  let listQuestion = questionsBien;

  const initQuestion = () => {
    const temp = Math.floor(Math.random() * listQuestion.length);

    let mainQuestions = [...listQuestion];
    let supQuestions = mainQuestions.splice(temp, 1);

    listQuestion = mainQuestions;
    console.log(listQuestion);
    console.log(mainQuestions);
    console.log(supQuestions[0]);

    setQuestionSelected(supQuestions[0]);
    setQuestionsList(mainQuestions);
  };

  const handleEndGame = (point: number = 0) => {
    setScore(point);
    dispatch(incrementByAmount(point));
    onEndGame();
  };

  return (
    <>
      <div className="GameCaVoiBG">
        <div id="unity-container" className="unity-desktop">
          <canvas
            id="unity-canvas"
            width="1244"
            height="700"
            tabIndex={-1}
          ></canvas>
          <div id="unity-warning"></div>
        </div>
        <ModalQuestionGame
          open={modalQuestion}
          onClose={handleCloseModal}
          question={questionSelected}
          isResult={() => setResult(true)}
        ></ModalQuestionGame>
      </div>
    </>
  );
};

export default GameCaVoi;
