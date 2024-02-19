import React, { useState } from "react";
import "./LandingPage.css";

interface LandingPageProps {
  setSearchPokemon: (pokemonName: string) => void;
}

function LandingPage({ setSearchPokemon }: LandingPageProps) {
  const [pokemonName, setPokemonName] = useState("");

  const handleSearch = () => {
    setSearchPokemon(pokemonName);
  };

  return (
    <div className="landing-page-container">
      <div className="landing-page">
        <div className="title-box">
          <h1 className="title">Search For Pokemon!</h1>
        </div>
        <div className="search-box">
          <input
            type="text"
            className="search-input"
            value={pokemonName}
            onChange={(e) => setPokemonName(e.target.value)}
          />
          <button className="search-button" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
