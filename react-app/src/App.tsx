import React, { useState } from "react";
import axios from 'axios';
import logo from "./logo.svg";
import "./App.css";
import backgroundImage from './assets/background.png';

function App() {
  const [pokemonData, setPokemonData] = useState<any>(null);
  const [pokemonName, setPokemonName] = useState('');
  const [showDisplay, setShowDisplay] = useState(false);

  const fetchPokemonData = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
      setPokemonData(response.data);
      setShowDisplay(true);
    } catch (error) {
      console.error('Error fetching Pokemon data:', error);
    }
  };

  const handleSearch = () => {
    fetchPokemonData();
  };

  const handleBack = () => {
    setShowDisplay(false);
    setPokemonData(null);
    setPokemonName('');
  };

  return (
    <div className="app" /*style={{ backgroundImage: `url(${backgroundImage})` }}*/>
      {!showDisplay && (
        <div className="search-page">
          <div className="title-container">
            <div className="title">Search For Pokemon!</div>
          </div>
          <div className="search-container">
            <input 
              type="text" 
              className="search-bar" 
              placeholder=""
              value={pokemonName}
              onChange={(e) => setPokemonName(e.target.value)}
            />
            <button className="search-button" onClick={handleSearch}>Search!</button>
          </div>
        </div>
      )}
      {showDisplay && pokemonData && (
        <div className="display-container">
          <div className="pokemon-card">
            <div className="pokemon-header">
              <h2>{pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}</h2>
              <div className="hp">HP: {pokemonData.stats.find((stat: any) => stat.stat.name === 'hp')?.base_stat}</div>
            </div>
            <div className="pokemon-image">
              <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
            </div>
            <div className="pokemon-details">
              <p>Moves:</p>
              <ul>
                {pokemonData.moves.slice(0, 2).map((move: any, index: number) => (
                  <li key={index}>{move.move.name}</li>
                ))}
              </ul>
              <div className="ability">Ability: {pokemonData.abilities[0].ability.name.charAt(0).toUpperCase() + pokemonData.abilities[0].ability.name.slice(1)}</div>
            </div>
          </div>
          <button onClick={handleBack}>Back Space</button> 
        </div>
      )}
    </div>
  );
}

export default App;
