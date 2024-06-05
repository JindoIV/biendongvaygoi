"use client";
import React, { useEffect, useState } from "react";
import "./style.css";
import ModalQuestion from "@/components/ModalQuestion/ModalQuestion";
import { http } from "@/utils/config";
import Question from "@/types/question";

const UnityComponent = () => {
  const [modalQuestion, setModalQuestion] = useState<boolean>(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [fetchDataDone, setFetchDataDone] = useState<boolean>(false);
  const [questionSelected, setQuestionSelected] = useState<any>();

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
          window.ShowPopup = handleOpenModal;

          window.AddScore = function () {
            unityInstance.SendMessage(
              "Game Controller",
              "SetCanAddScore",
              "true"
            );
            ClosePopup();
          };

          window.ClosePopup = function () {
            const popup = document.getElementById("gamePopup");
            if (popup) {
              document.body.removeChild(popup);
            }
            unityInstance.SendMessage("Game Controller", "ResumeGame");
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
  }, []);

  const fetchData = async () => {
    try {
      const res = await http.get(`/api/get-questionBien`);
      const newQuestions = res.data.questions.rows.map((quesion: any) => {
        return { ...quesion, correctAnswer: quesion.correctanswer };
      });
      setQuestions(newQuestions);
      console.log(newQuestions);
      setFetchDataDone(true);
    } catch (error) {
      console.error("Lỗi khi đọc file JSON:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOpenModal = () => {
    initQuestion();
    setModalQuestion(true);
  };

  const initQuestion = () => {
    const temp = Math.floor(Math.random() * questions.length);
    let mainQuestions = [...questions];
    let supQuestions = mainQuestions.splice(temp, 1);
    setQuestionSelected(questionSample);
    setQuestions(mainQuestions);
  };

  const questionSample = {
    question: "Nguyên nhân chủ yếu gây ra ô nhiễm môi trường biển là",
    options: "tràn dầu|chặt phá rừng|chất thải công nghiệp|chất thải hữu cơ",
    correctAnswer: 0,
    image: "",
    explanation:
      "Khiến cho nước biển nhiễm các chất độc hại, gây ra cái chết cho hàng loạt sinh vật.",
  };

  return (
    <>
      <div id="unity-container" className="unity-desktop">
        <canvas
          id="unity-canvas"
          width="1244"
          height="700"
          tabIndex={-1}
        ></canvas>
        <div id="unity-warning"></div>
      </div>
      <ModalQuestion
        open={modalQuestion}
        onClose={() => setModalQuestion(false)}
        question={questionSelected}
      ></ModalQuestion>
    </>
  );
};

export default UnityComponent;
