import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { timeAdvance } from "../redux-store/Action-timer/timerSlice";
import { useEffect, useState } from "react";

export default function CardTimer() {
  const dispatch = useDispatch();
  const timer = useSelector((state) => state.timer);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(timeAdvance());
    }, 1000);
    return () => clearInterval(interval);
  }, [dispatch]);

  function formatTime(nSeconds) {
    const date = new Date(nSeconds * 1000);
    const minutes = date.getUTCMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  }
  return <h1>{formatTime(timer)}</h1>;
}
