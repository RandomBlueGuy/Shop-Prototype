import React from "react";
import meImg from "../assets/me.png";
import { Link } from "react-router-dom";

function Aboutme() {
  const specialChars = [" => ", "> "];
  return (
    <main className="Aboutme__ctn">
      <section className="Aboutme__banner Aboutme__banner--img1">
        <div className="ProductCard__exterior--corner upper-left" />
        <div className="ProductCard__exterior--corner upper-right" />
        <div className="ProductCard__exterior--corner bottom-right" />
        <div className="ProductCard__exterior--corner bottom-left" />
        <div className="infoCard--overlay"></div>
      </section>
      <section className="Aboutme__card">
        <div className="ProductDetails__title">
          <h1>About Me</h1>
        </div>
        <div className="card__personalInfo">
          <img src={meImg} alt="" className="card__personalInfo--img" />
          <article className="card__personalInfo--txt">
            <p className="extraDetails--obj">
              <strong>
                 Name{specialChars[0]}
              </strong>
              <span className="extraDetails--value">Andrés Vélez</span>
            </p>
            <p className="extraDetails--obj">
              <strong>Personal description{specialChars[0]}</strong>
              <span className="extraDetails--value">
                There's not much to be said about me. I'm just a{" "}
                <strong className="magic-effect">random blue guy</strong>{" "}
                learning how to code...
              </span>
            </p>
          </article>
        </div>
        <div className="card__extraInfo">
          <ul className="extraDetails--obj">
            <strong>
              {specialChars[1]}Stuff I have learned{specialChars[0]}
            </strong>
            <li>
              <span className="extraDetails--value">
                CSS basics, it's like painting little funny boxes!
              </span>
            </li>
            <li>
              <span className="extraDetails--value">
                JavaScript core concepts, (even if I tend to forget them easily)
              </span>
            </li>
            <li>
              <span className="extraDetails--value">How to implement other areas of knowledge into UI Design (Hopefully)</span>
            </li>
          </ul>
          <p className="extraDetails--obj">
            <strong>
              {specialChars[1]}Email{specialChars[0]}
            </strong>
            <span className="extraDetails--value">
              _randombluemail@gmail.com
            </span>
          </p>
          <p className="extraDetails--obj">
            <strong>
              {specialChars[1]}GitHub{specialChars[0]}
            </strong>
            <span className="extraDetails--value">
              <Link to="https://github.com/RandomBlueGuy">
                _github.com/RandomBlueGuy
              </Link>
            </span>
          </p>
        </div>
        <div className="extraDetails__btnCtn">
          <Link to="/">
            <button>Go back</button>
          </Link>
        </div>
      </section>
      <section className="Aboutme__banner Aboutme__banner--img2">
        <div className="ProductCard__exterior--corner upper-left" />
        <div className="ProductCard__exterior--corner upper-right" />
        <div className="ProductCard__exterior--corner bottom-right" />
        <div className="ProductCard__exterior--corner bottom-left" />
        <div className="infoCard--overlay" />
      </section>
    </main>
  );
}

export default Aboutme;
