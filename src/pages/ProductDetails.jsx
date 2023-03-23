import React from "react";
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ProductDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state;
  const specialChars = ["=> ", "> "];
  const randomTimer = useSelector((state) => state.fetchData.randomTimer);

  useEffect(() => {
    if (product === null) {
      navigate("/");
    }
  }, [product]);

  useEffect(() => {
    console.log("CURRENT TIMER PRODUCT", randomTimer);
  }, []);

  return (
    <main className="ProductDetails__ctn border--gradient">
      <div className="ProductDetails__title">
        <h1>About Product</h1>
      </div>
      <section className="ProductDetails__card infoCard">
        <div className="ProductCard__exterior--corner upper-left" />
        <div className="ProductCard__exterior--corner upper-right" />
        <div className="ProductCard__exterior--corner bottom-right" />
        <div className="ProductCard__exterior--corner bottom-left" />
        <div className="infoCard--overlay"></div>
      </section>
      <section className="ProductDetails__card extraDetails">
        <div>
          <figure className="extraDetails__img">
            <div className="ProductCard__exterior--corner upper-left" />
            <div className="ProductCard__exterior--corner upper-right" />
            <div className="ProductCard__exterior--corner bottom-right" />
            <div className="ProductCard__exterior--corner bottom-left" />
            <img
              className="productDetails__image"
              src={`${product?.image}`}
              alt=""
            />
          </figure>
          <div className="extraDetails__btnCtn">
            <Link to="/">
              <button>Go back</button>
            </Link>
          </div>
        </div>
        <div className="extraDetails__txtCtn">
          <p className="extraDetails--obj">
            <strong>
              {specialChars[1]}Product name{specialChars[0]}
            </strong>
            <span className="extraDetails--value">{product?.title}</span>
          </p>
          <p className="extraDetails--obj">
            <strong>
              {specialChars[1]}Product ID {specialChars[0]}
            </strong>
            <span className="extraDetails--value">{product?.id}</span>
          </p>
          <p className="extraDetails--obj">
            <strong>
              {specialChars[1]} price{specialChars[0]}
            </strong>
            <span className="extraDetails--value">${product?.price}</span>
          </p>
          <p className="extraDetails--obj">
            <strong>
              {specialChars[1]}Description{specialChars[0]}
            </strong>
            <span className="extraDetails--value">${product?.description}</span>
          </p>
          <p className="extraDetails--obj">
            <strong>
              {specialChars[1]}Category{specialChars[0]}
            </strong>
            <span className="extraDetails--value">{product?.category}</span>
          </p>
          <p className="extraDetails--obj">
            <strong>
              {specialChars[1]}Rating{specialChars[0]}
            </strong>
            <span className="extraDetails--value">{product?.rating.rate}</span>
          </p>
          <p className="extraDetails--obj">
            <strong>
              {specialChars[1]}Ammount in storage{specialChars[0]}
            </strong>
            <span className="extraDetails--value">{product?.rating.count}</span>
          </p>
        </div>
      </section>
    </main>
  );
}

export default ProductDetails;
