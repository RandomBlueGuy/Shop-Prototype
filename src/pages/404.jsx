import React from "react";
import { Link } from "react-router-dom";
import '../styles/styles.css'

function page404() {
  return (
    <div>
      <div className="page404-ctn">
        <h1 className="page404-ctn-title page404-ctn-coloreffect magic-effect">404</h1>
        <p className="page404-ctn-coloreffect">There's nothing here :(</p>
        <Link to="/">
          <button className="">GO BACK</button>
        </Link>
      </div>
    </div>
  );
}

export default page404;
