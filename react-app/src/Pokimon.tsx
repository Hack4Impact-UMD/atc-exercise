import { useLocation, Link } from "react-router-dom";
import "./App.css";
import "./Pokimon.css"
import React from "react";

const Pokimon = () => {
    // Access data from before
    const { state } = useLocation();
    const {name, image, moveOne, moveTwo, power, health } = state || {};

    const containerStyle: React.CSSProperties = {
        height: "50vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "40px"
    };

    const boxStyle: React.CSSProperties = {
        backgroundColor: "#627FE9",
        width: "200px",
    };

    const centerStyle: React.CSSProperties = {
        float: "left", 
        display: "inline", 
        width: "100%"
    };

    const buttonStyle: React.CSSProperties = {
        backgroundColor: "#dce85b",
        marginTop: "50px"
    };

  return (
    <div style = {containerStyle}> 
        <div style = {boxStyle}> 
        <div style = {centerStyle}> 
        <p> {name}</p>
        <p>{health} hp</p>
        </div>
        <img src={image} />
        <p>Moves:</p>
        <p>{moveOne}</p>
        <p> {moveTwo}</p>
        <p>Ability: {power}</p>
        </div>
        <div style = {buttonStyle}> 
          <Link className="back-btn " to="/">
            Back
          </Link>
          </div>
      </div>
  );
};

export default Pokimon;