import React, { useState } from "react";
import axios from "axios";
import "./DisplayPage.css";

interface DisplayPageProps {
  pokemonName: string;
  goBack: () => void;
}

function DisplayPage({ pokemonName, goBack }: DisplayPageProps) {
  const [pokemonData, setPokemonData] = useState<any | null>(null);

  const fetchPokemonData = async (name: string) => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );
      setPokemonData(response.data);
    } catch (error) {
      console.error("Error fetching Pokemon data:", error);
    }
  };

  if (!pokemonData) {
    fetchPokemonData(pokemonName);
    return <div>POKEMON NOT FOUND</div>;
  }

  const topMoves = pokemonData.moves.slice(0, 2);
  const ability = pokemonData.abilities[0];

  return (
    <div className="display-page">
      <div className="blue-box">
        <div className="name-hp-container">
          <h1 className="name">{pokemonData.name}</h1>
          <h2 className="hp">
            HP:{" "}
            {
              pokemonData.stats.find((stat: any) => stat.stat.name === "hp")
                ?.base_stat
            }
          </h2>
        </div>
        <div className="image-container">
          <img
            src={pokemonData.sprites.front_default}
            alt={pokemonData.name}
            className="pokemon-image"
          />
        </div>
        <div className="moves">
          <h2>Top Moves:</h2>
          <ul>
            {topMoves.map((move: any, index: number) => (
              <li key={index}>{move.move.name}</li>
            ))}
          </ul>
        </div>
        <div className="ability">
          <h2>Ability: </h2>
          <p>{ability.ability.name}</p>
        </div>
      </div>

      <button className="back-button" onClick={goBack}>
        Back
      </button>
    </div>
  );
}

export default DisplayPage;
