import React, { useEffect, useState } from "react";
import "../styles/styles.css";
import { useLocation, Link } from "react-router-dom";

function App__ctn() {
  // , "_AboutMe_", "_Products"
  const [menuTitle, setMenuTitle] = useState("AESTHETIC");
  const location = useLocation();
  const [buttonDiretion, setButtonDirection]  = useState("/about-me")
 
  useEffect(() => {
    if (location.pathname.includes("details")) {
      setMenuTitle("_Products");
    } else if (location.pathname.includes("about-me")) {
      setMenuTitle("_AboutMe_");
    } else {
      setMenuTitle("STORE.EXE");
    }
  }, [location]);

  useEffect(() => {
    if (location.pathname === "/about-me"){
      setButtonDirection("/")
    } else {
      setButtonDirection("/about-me")
    }
  }, [location])
  

  console.log("currentLocation =>", location);
  return (
    <div>
      <h1 className="App__title magic-effect">{menuTitle}</h1>
      <Link to={buttonDiretion}>
        <div className="redirector button--effect">
          <h1 className="redirector__text ">{buttonDiretion !== "/" ? "i": "⌂"}</h1>
        </div>
      </Link>
    </div>
  );
}

export default App__ctn;
