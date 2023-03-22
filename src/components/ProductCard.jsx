import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox } from "@fortawesome/free-solid-svg-icons";
import { timeAdvance } from "../redux-store/Action-timer/timerSlice";

function ProductCard({ product }) {
  const randomTimer = useSelector((state) => state.fetchData.randomTimer);
  const randomTimerOriginal = useSelector((state) => state.fetchData.randomTimerOriginal);
  const [visualTimer, setVisualTimer] = useState(0);
  const [timerOut, setTimerOut] = useState(false);
  const [promoTimeSeconds, setPromoTimeSeconds] = useState(
    parseInt(Date.now() / 1000) < randomTimer[product.id - 1]
      ? randomTimer[product.id - 1] - parseInt(Date.now() / 1000)
      : 0
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (promoTimeSeconds >= 1) {
        setPromoTimeSeconds((promoTimeSeconds) => promoTimeSeconds - 1);
      } else {
        setPromoTimeSeconds(0);
        setTimerOut(true);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [promoTimeSeconds]);

  useEffect(() => {
    if (promoTimeSeconds > 0) {
      setVisualTimer((promoTimeSeconds * 200) / randomTimerOriginal[product.id - 1]);
    } else {
      setVisualTimer(0);
    }
  }, [promoTimeSeconds]);

  function formatTime(nSeconds) {
    const date = new Date(nSeconds * 1000);
    const minutes = date.getUTCMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  }

  return (
    <main className="ProductCard__exterior">
      <div className="ProductCard__exterior--corner upper-left" />
      <div className="ProductCard__exterior--corner upper-right" />
      <div className="ProductCard__exterior--corner bottom-right" />
      <div className="ProductCard__exterior--corner bottom-left" />
      <section className="ProductCard__full">
        <div
          className="ProductCard__timer"
          style={{ height: `${visualTimer}px` }}
        />
        <section
          className="ProductCard"
          style={{ filter: timerOut ? "saturate(0)" : "saturate(1)" }}
        >
          <div className="ProductCard__overlay" />
          <div className="ProductCard__title">
            <p className="ProductCard__banner">{product.title}</p>
          </div>
          <div className="ProductCard__content">
            {/* <p className="productCard__imagePlaceHolder">
              <FontAwesomeIcon icon={faBox} />
            </p> */}
            <img
              className="productCard__image"
              src={`${product?.image}`}
              alt=""
            />
            <p className="ProductCard__price">${product.price}</p>
          </div>

          <p
            className="ProductCard__timer--text"
            style={{
              color: timerOut ? "var(--neonBlack)" : "var(--neonBlack)",
            }}
          >
            {formatTime(promoTimeSeconds)}
          </p>
        </section>
      </section>
      <Link to={`/details/${product.id}`} state={product}>
        <button disabled={timerOut}>
          {!timerOut ? "See more..." : "Time's over!"}
        </button>
      </Link>
    </main>
  );
}

export default ProductCard;
