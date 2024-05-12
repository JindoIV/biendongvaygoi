"use client";

import Loading from "@/components/Loading/Loading";
import { useEffect, useRef, useState } from "react";

export default function Test() {
  const audioElement = useRef<HTMLAudioElement>(null);
  const [canPlay, setCanPlay] = useState(false);

  useEffect(() => {
    if (canPlay && audioElement.current) {
      audioElement.current.play();
    }
  }, [canPlay]);

  const handlePlayAudio = () => {
    setCanPlay(true);
  };

  return (
    <>
      <audio ref={audioElement}>
        <source src="./Duong_mot_chieu_a.mp3" type="audio/mpeg"></source>
      </audio>
      <button onClick={handlePlayAudio}>Play Audio</button>
      {/* <Loading></Loading> */}
    </>
  );
}
