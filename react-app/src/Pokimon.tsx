import { useLocation, Link } from "react-router-dom";
import "./App.css";
import "./Pokimon.css"

const Pokimon = () => {
    // Access data from before
    const { state } = useLocation();
    const {name, image, moveOne, moveTwo, power, health } = state || {};

  return (
    <div>
        <p> {name}</p>
        <p>{health} hp</p>
        <img src={image} />
        <p>Moves</p>
        <p>{moveOne}</p>
        <p> {moveTwo}</p>
        <p>Ability: {power}</p>
          <Link className="back-btn " to="/">
            Back
          </Link>
      </div>
  );
};

export default Pokimon;