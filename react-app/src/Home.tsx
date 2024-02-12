import { useState } from "react";
import "./App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [urlInput, updateVal] = useState("-");
  const getText = (event: any) => {
    updateVal(event.target.value);
  };
  const navigate = useNavigate();

  const getPokimon = () => {
    var URL = `https://pokeapi.co/api/v2/pokemon/${urlInput}`;

    axios
      .get(URL)
      .then((response) => {
        const image = response.data.sprites.front_default;
        const health = response.data.stats[0].base_stat;
        const moves = response.data.moves.slice(0, 2);
        const moveOne = moves[0].move.name;
        const moveTwo = moves.length < 2 ? "NA" : moves[1].move.name;
        const power = response.data.abilities[0].ability.name;
        navigate("/display", {
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
    <div
        style={{
          height: "100",
        }}>
          <h1> Search for Pokemon! </h1>
          <input type="text" onChange={getText} />
          <button onClick = { getPokimon }>Search!</button>
        </div>
  );
}

export default Home;