"use client";
import React, { useEffect, useState } from "react";
import "./_components/css/style.css";
import "./_components/css/modal.css";
import ModalQuestionGame from "@/components/ModalQuestionGame/ModalQuestionGame";
import { http } from "@/utils/config";
import Question from "@/types/question";
import { questionsBien } from "@/components/QuestionBien/QuestionsData";
import { useDispatch } from "react-redux";
import { incrementByAmount } from "@/libs/features/score/scoreSlide";

interface IGameCaVoi {
  open: boolean;
  onEndGame: () => void;
}

declare global {
  interface Window {
    ShowPopup: () => void;
    AddScore: () => void;
    ClosePopup: () => void;
    pointGame: (point: number) => void;
  }
}

const GameCaVoi: React.FC<IGameCaVoi> = ({ open, onEndGame }) => {
  const dispatch = useDispatch();

  const [modalQuestion, setModalQuestion] = useState<boolean>(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [fetchDataDone, setFetchDataDone] = useState<boolean>(false);
  const [endQuestion, setEndQuestion] = useState<boolean>(false);
  const [questionSelected, setQuestionSelected] = useState<Question>(
    questionsBien[0]
  );

  const [questionsList, setQuestionsList] = useState<Question[]>(questionsBien);
  const [result, setResult] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    const container =
      document.querySelector<HTMLDivElement>("#unity-container");
    const canvas = document.querySelector<HTMLCanvasElement>("#unity-canvas");
    const warningBanner =
      document.querySelector<HTMLDivElement>("#unity-warning");

    function unityShowBanner(msg: string, type: string) {
      function updateBannerVisibility() {
        if (warningBanner) {
          warningBanner.style.display = warningBanner.children.length
            ? "block"
            : "none";
        }
      }
      const div = document.createElement("div");
      div.innerHTML = msg;
      if (warningBanner) {
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

    if (container && canvas) {
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
        // @ts-ignore
        createUnityInstance(canvas, config, (progress: number) => {})
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
              unityInstance.SendMessage("Game Controller", "ResumeGame");
            };

            window.pointGame = function (point: number) {
              setEndQuestion(true);
              handleEndGame(point);
            };
          })
          .catch((message: any) => {
            alert(message);
          });
      };

      document.body.appendChild(script);
    }
  }, [open]);

  useEffect(() => {
    if (endQuestion) {
      handleOpenModal();
    }
  }, [endQuestion]);

  const handleOpenModal = () => {
    setTimeout(() => {
      initQuestion();
    }, 400);

    setTimeout(() => {
      setModalQuestion(true);
    }, 900);
  };

  const handleCloseModal = () => {
    setTimeout(() => {
      setModalQuestion(false);
      if (result) {
        setResult(false);
        window.AddScore();
      }
    }, 400);

    setTimeout(() => {
      window.ClosePopup();
      if (endQuestion) {
        handleEndGame();
      }
    }, 600);
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
  };

  const handleEndGame = (point: number = 0) => {
    setScore(point);
    dispatch(incrementByAmount(point));
    onEndGame();
  };

  // const AddScore = () => {
  //   // Xử lý logic thêm điểm tại đây
  //   console.log("Add Score");
  // };

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
