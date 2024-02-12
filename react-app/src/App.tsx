import React, {useState} from "react";
import "./App.css";
import backgroundImage from "./assets/background.png";
import PokemonDetails from './PokemonDetails';

function App() {
  const [pokemonName, setPokemonName] = useState('');
  const [searched, setSearched] = useState(false);
  const [isVisible, setIsVisible] = useState(true);


  const handleSearchClick = () => {
    console.log('Searched Pokemon:', pokemonName);
    setSearched(true);
    setIsVisible(false);
  };

  return (
    <div className="App">
      <div style={{ backgroundImage:`url(${backgroundImage})`, backgroundSize:"contain" }}>
        {isVisible && (
          <header className="App-header">
            <h1 id="title">Search for Pokemon!</h1>
            <label>
              <input type="text" value={pokemonName} onChange={e => setPokemonName(e.target.value)} />
            </label>
            <button onClick={handleSearchClick}>Search!</button>
          </header>
        )}
        {searched && <PokemonDetails name={pokemonName} />}
      </div>
    </div>
  );
}

export default App;
