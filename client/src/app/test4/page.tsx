"use client";

import {
  decrement,
  increment,
  incrementByAmount,
} from "@/libs/features/score/scoreSlide";
import { RootState } from "@/libs/store";
import { useSelector, useDispatch } from "react-redux";

export default function Test4() {
  const count = useSelector((state: RootState) => state.score.value);
  const dispatch = useDispatch();

  return (
    <main>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(2))}>
        Increment by 2
      </button>
    </main>
  );
}
