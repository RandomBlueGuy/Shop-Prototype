import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

export const fetchDataSlice = createSlice({
  name: "fetchDataSlice",
  initialState: {
    productsArr: [],
    randomTimerOriginal: [],
    randomTimer: [],
    isTimerSet: false,
    currentTime: Date.now(),
    loading: false,
    error: null,
  },
  reducers: {
    postsSuccess: (state, action) => {
      state.productsArr = action.payload;
      if (!state.isTimerSet) {
        state.randomTimer = action.payload.map((item) =>
          (parseInt(state.currentTime / 1000 + Math.random() * 180)) + 30
        );
        state.randomTimerOriginal = state.randomTimer.map((rTimer) =>
          parseInt(rTimer - parseInt(Date.now() / 1000))
        );
        state.isTimerSet = true;
      }
      state.loading = false;
      state.error = null;
    },
    postsLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    postsError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const getPosts = () => {
  return async (dispatch, getState) => {
    const isTimerSet = getState().fetchData.isTimerSet;
    if (!isTimerSet) {
      dispatch({ type: postsLoading });
      try {
        await axios
          .get("https://fakestoreapi.com/products")
          .then((response) => {
            setTimeout(() => {
              dispatch({ type: postsSuccess, payload: response.data });
            }, 1000);
          });
      } catch (error) {
        dispatch({ type: postsError, payload: error.message });
      }
    } else {
      setTimeout(() => {
        const productsArr = getState().fetchData.productsArr;
        dispatch({ type: postsSuccess, payload: productsArr });
      }, 1000);
      dispatch({ type: postsLoading });
    }
  };
};

export const { postsSuccess, postsLoading, postsError } =
  fetchDataSlice.actions;

export default fetchDataSlice.reducer;
