import { configureStore } from '@reduxjs/toolkit';
import fetchDataReducer from '../redux-store/Action-fetchdata/fetchdataSlice'
import timerReducer from './Action-timer/timerSlice';


export const store = configureStore({
   reducer: {
      fetchData: fetchDataReducer,
      timer: timerReducer,
   }
})