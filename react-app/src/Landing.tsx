import { useState } from "react";
import background from "./assets/background.png";
import "./App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Landing() {
  // user input
  const [value, setValue] = useState("-");

  const navigate = useNavigate();
  const getValue = (event: any) => {
    setValue(event.target.value);
  };

  const handleSubmit = () => {
    // input is not case sensitive
    const name = value.toLowerCase();
    let URL = `https://pokeapi.co/api/v2/pokemon/${name}`;

    axios
      .get(URL)
      .then((response) => {
        const hp = response.data.stats[0].base_stat;
        const imgSrc = response.data.sprites.front_default;
        const moves = response.data.moves.slice(0, 2);
        const move1 = moves[0].move.name;
        const move2 = moves.length < 2 ? "" : moves[1].move.name;
        const ability = response.data.abilities[0].ability.name;
        navigate("/display", {
          state: {
            name: name,
            hp: hp,
            imgSrc: imgSrc,
            move1: move1,
            move2: move2,
            ability: ability,
          },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${background})`,
          height: "100vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="header">
          <h1 className="top-header"> Search for Pokemon! </h1>
          <input type="text" onChange={getValue} />
          <button onClick={handleSubmit}>Search!</button>
        </div>
      </div>
    </>
  );
}

export default Landing;
