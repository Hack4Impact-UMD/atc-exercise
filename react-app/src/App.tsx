import React, { useState } from "react";
import LandingPage from "./LandingPage";
import DisplayPage from "./DisplayPage";

function App() {
  const [displayPage, setDisplayPage] = useState(false);
  const [pokemonName, setPokemonName] = useState("");

  const setSearchPokemon = (pokemonName: string) => {
    setPokemonName(pokemonName);
    setDisplayPage(true);
  };

  const goBack = () => {
    setDisplayPage(false);
    setPokemonName("");
  };

  return (
    <div className="App">
      {!displayPage ? (
        <LandingPage setSearchPokemon={setSearchPokemon} />
      ) : (
        <DisplayPage pokemonName={pokemonName} goBack={goBack} />
      )}
    </div>
  );
}

export default App;
