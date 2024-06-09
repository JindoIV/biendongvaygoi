"use-client";
import style from "../homepage.module.scss";
import Image from "next/image";
import boat from "../../../../assets/Images/Con_thuyen.png";
import { useEffect, useState } from "react";
import TruongSaMap from "@/components/TruongSaMap/TruongSaMap";
import VisualNovelCaVoi from "@/components/VisualNovel2/VisualNovelCaVoi";
import GameCaVoi from "@/components/GameCaVoi/GameCaVoi";
interface Stage3Props {
  onSt3Close: () => void;
}
const Stage3 = ({ onSt3Close }: Stage3Props) => {
  const [showMap, setShowMap] = useState<boolean>(false);
  const [visualModalWhale, setVisualModalWhale] = useState<boolean>(false);
  const [gameCaVoiLoad, setGameCaVoiLoad] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMap(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  const handleCloseMap = () => {
    setShowMap(false);
    setVisualModalWhale(true);
    // onSt3Close();
  };

  const handleLoadGame = () => {
    setGameCaVoiLoad(true);
  };

  const handleCloseGame = () => {
    setGameCaVoiLoad(false);
    onSt3Close();
  };

  return (
    <>
      <div className={`${style.boat_img_st_3} ${style.boat_img}`}>
        <Image src={boat} alt={""} />
      </div>
      {showMap && <TruongSaMap closeMap={handleCloseMap} />}
      <VisualNovelCaVoi
        open={visualModalWhale}
        onClose={() => setVisualModalWhale(false)}
        onEndVN={handleLoadGame}
      ></VisualNovelCaVoi>
      {gameCaVoiLoad && (
        <GameCaVoi open={gameCaVoiLoad} onEndGame={handleCloseGame}></GameCaVoi>
      )}
    </>
  );
};

export default Stage3;
