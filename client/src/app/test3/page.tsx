"use client";

import GameCaVoi from "@/components/GameCaVoi/GameCaVoi";
import {
  decrement,
  increment,
  incrementByAmount,
  initAmount,
} from "@/libs/features/score/scoreSlide";
import { RootState } from "@/libs/store";
import { useSelector, useDispatch } from "react-redux";

export default function Test3() {
  const count = useSelector((state: RootState) => state.score.value);
  const dispatch = useDispatch();

  return (
    <main>
      <GameCaVoi
        open={true}
        onEndGame={function (): void {
          throw new Error("Function not implemented.");
        }}
      ></GameCaVoi>
    </main>
  );
}
