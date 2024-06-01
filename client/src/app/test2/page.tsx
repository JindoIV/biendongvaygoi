"use client";
import React, { useEffect } from "react";
import "./style.css";

const UnityComponent = () => {
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
          window.ShowPopup = function (message: any) {
            const popup = document.createElement("div");
            popup.id = "gamePopup";
            popup.style.position = "fixed";
            popup.style.top = "50%";
            popup.style.left = "50%";
            popup.style.transform = "translate(-50%, -50%)";
            popup.style.backgroundColor = "white";
            popup.style.padding = "20px";
            popup.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
            popup.innerHTML = `
              <button onclick="AddScore()">Add Score</button>
              <button onclick="ClosePopup()">Close</button>
            `;
            document.body.appendChild(popup);
          };

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

  return (
    <div id="unity-container" className="unity-desktop">
      <canvas
        id="unity-canvas"
        width="1244"
        height="700"
        tabIndex={-1}
      ></canvas>
      <div id="unity-warning"></div>
    </div>
  );
};

export default UnityComponent;
