import React, { useEffect, useState } from 'react';
import App from './App';
import "./App.css";
import backgroundImage from "./assets/background.png";


interface PokemonDetailsProps {
  name: string;
}

const PokemonDetails: React.FC<PokemonDetailsProps> = ({ name }) => {
  const [toReturn, setToReturn] = useState(false);
  const [pokemonData, setPokemonData] = useState<any | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [loading, setLoading] = useState(true);

  const handleReturnClick = () => {
    setToReturn(true);
    setIsVisible(false);
  };

  useEffect(() => {

    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await response.json();
        const moves = data.moves.slice(0, 2).map((move: any) => move.move.name);

        setPokemonData({
          name: data.name,
          hp: data.stats.find((stat:any) => stat.stat.name === 'hp').base_stat,
          image: data.sprites.front_default,
          abilities: data.abilities.map((ability:any) => ability.ability.name),
          moves: moves
        });
        setLoading(false);

      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
        setLoading(false);

      }
    };

    fetchData();
  }, [name]);

  return (
    <div style={{ backgroundImage:`url(${backgroundImage})`, height: '100vh'}}>
      {!loading && pokemonData && isVisible && (

        <div>
          <div id="card">
            <table className="center">
              <tr>
                <td className="alignLeft"><h1>{pokemonData.name}</h1></td>
                <td className="alignRight, nowrap"><h2>{pokemonData.hp} hp</h2></td>
              </tr>
              <tr>
                <td colSpan={2} className="imageContainer"><img src={pokemonData.image} alt={`${pokemonData.name} sprite`} /></td>
              </tr>
              <tr>
                <td className="alignLeft"><h2>Moves</h2></td>
              </tr>
              <tr>
                <td className="alignLeft">
                  <p>
                  <ul>
                    {pokemonData.moves.map((move: string, index: number) => (
                      <li key={index}>{move}</li>
                    ))}
                  </ul>
                  </p>
                </td>
              </tr>
              <tr>
                <td className="alignLeft"><h2>Ability: {pokemonData.abilities}</h2></td>
              </tr>
            </table>          
        </div>
        <button onClick={handleReturnClick}>Back</button>
      </div>
      
    )}

    {toReturn && <App />}

    </div>
  );
};

export default PokemonDetails;

export {};
