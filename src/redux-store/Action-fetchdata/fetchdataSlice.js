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
    POSTS_SUCCESS: (state, action) => {
      state.productsArr = action.payload;
      if (!state.isTimerSet) {
        state.randomTimer = action.payload.map((item) =>
          parseInt(state.currentTime / 1000 + Math.random() * 180)
        );
        state.randomTimerOriginal = state.randomTimer.map(rTimer => parseInt(rTimer - parseInt(Date.now() / 1000)));
        state.isTimerSet = true;
      }
      state.loading = false;
      state.error = null;
    },
    POSTS_LOADING: (state) => {
      state.loading = true;
      state.error = null;
    },
    POSTS_ERROR: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const getPosts = () => {
  return async (dispatch, getState) => {
    const isTimerSet = getState().fetchData.isTimerSet;
///database/fakeApiProducts.json
    if (!isTimerSet) {
      dispatch({ type: POSTS_LOADING });
      try {
        const response = await axios
          .get("https://fakestoreapi.com/products")
          .then((response) => {
            setTimeout(() => {
              dispatch({ type: POSTS_SUCCESS, payload: response.data });
            }, 1000);
          });
      } catch (error) {
        dispatch({ type: POSTS_ERROR, payload: error.message });
      }
    } else {
      setTimeout(() => {
        const productsArr = getState().fetchData.productsArr;
        dispatch({ type: POSTS_SUCCESS, payload: productsArr });
      }, 1000);
      dispatch({ type: POSTS_LOADING });
    }
  };
};

export const { POSTS_SUCCESS, POSTS_LOADING, POSTS_ERROR } =
  fetchDataSlice.actions;

export default fetchDataSlice.reducer;
