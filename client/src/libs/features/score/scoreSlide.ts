"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface ScoreState {
  value: number;
}

const initialState: ScoreState = {
  value: 0,
};

export const scoreSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    initAmount: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, incrementByAmount, initAmount } =
  scoreSlice.actions;

export default scoreSlice.reducer;
