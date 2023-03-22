import { createSlice } from "@reduxjs/toolkit";

const timerSlice = createSlice({
  name: "timer",
  initialState: {
    currentTime: Date.now(),
  },
  reducers: {
    timeAdvance: (state) => {
      return state + 1;
    },
  },
});

export const { timeAdvance } = timerSlice.actions;

export default timerSlice.reducer;
