import React, { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../redux-store/Action-fetchdata/fetchdataSlice";

function Homepage() {
  const dispatch = useDispatch();
  const productsArr = useSelector((state) => state.fetchData.productsArr);
  let loading = useSelector((state) => state.fetchData.loading);
  const error = useSelector((state) => state.fetchData.error);
  const isTimerSet = useSelector((state) => state.fetchData.isTimerSet);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <main className="Home__ctn border--gradient">
      <section className="Home__title">
        <h1>
          Welcome [<span className="magic-effect">Human</span>]! you can check a
          product or press '<span className="magic-effect"> i </span>' to
          know more about my creator
        </h1>
      </section>

      <section
        className="loading__ctn"
        style={{ display: loading ? "flex" : "none" }}
      >
        <h1 className="magic-effect"> {">"}LOADING...</h1>
        <div className="loading__ctn--loader loader1">
          <div className="loading__ctn--loader loader2">
            <div className="loading__ctn--loader loader3"></div>
          </div>
        </div>
      </section>

      <section
        className="Home__body"
        style={{ display: loading ? "none" : "flex" }}
      >
        {productsArr.map((product) => {
          return <ProductCard key = {product.id} product={product} />;
        })}
      </section>
    </main>
  );
}

export default Homepage;
