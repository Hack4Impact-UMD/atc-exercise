import React, { useState} from "react";
import "./App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const containerStyle: React.CSSProperties = {
        height: "50vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    };

    const titleStyle: React.CSSProperties = {
        color: "white",
        backgroundColor: "orange",
        borderRadius: "2vh",
        marginBottom: "40px",
        //padding: "40px"

    };
    
    const boxStyle: React.CSSProperties = {
        color: "gray",
        backgroundColor: "#dce85b",
        border: "none",
        scale: "2",
        marginBottom: "40px"
    };

    const buttonStyle: React.CSSProperties = {
        color: "white",
        backgroundColor: "#dce85b",
        padding: "10px 20px",
        border: "none",
        cursor: "pointer"
    };
    

  const [urlInput, updateVal] = useState("-");
  const getText = (event: any) => {
    updateVal(event.target.value);
  };
  const navigate = useNavigate();

  const getPokimon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${urlInput}`)
      .then((response) => {
        const image = response.data.sprites.front_default;
        const health = response.data.stats[0].base_stat;
        const moves = response.data.moves.slice(0, 2);
        const moveOne = moves[0].move.name;
        const moveTwo = moves.length < 2 ? "NA" : moves[1].move.name;
        const power = response.data.abilities[0].ability.name;
        navigate("/Pokimon", {
          state: {
            image: image,
            moveOne: moveOne,
            moveTwo: moveTwo,
            health: health,
            power: power,
            name: urlInput
          },
        });
      })
  };

  return (
    <div style={containerStyle}>
        <div style ={titleStyle}> 
            <h1>Search for Pokemon!</h1>
            </div>
            <div style = {boxStyle}> 
            <input type="text" onChange={getText} />
            </div>
            <div style = {buttonStyle}> 
            <button onClick={getPokimon}>Search!</button>
            </div>
        </div>
  );
}

export default Home;