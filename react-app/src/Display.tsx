import { useLocation, Link } from "react-router-dom";
import "./App.css";
import background from "./assets/background.png";

const Display = () => {
  const location = useLocation();
  const { name } = location.state || {};
  const { hp } = location.state || {};
  const { imgSrc } = location.state || {};
  const { move1 } = location.state || {};
  const { move2 } = location.state || {};
  const { ability } = location.state || {};
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
        <div className="display-container">
          <div className="card">
            <div className="card-header">
              <div className="name-container">
                <p className="styled-name">{name}</p>
              </div>
              <p className="hp">{hp} hp</p>
            </div>
            <div className="img-container">
              <img src={imgSrc} alt="pokemon" />
            </div>
            <div className="card-body">
              <p className="moves">Moves</p>
              <div className="move-body">
                <p>{move1}</p>
                <p> {move2}</p>
              </div>
              <p className="styled-name">Ability: {ability}</p>
            </div>
          </div>
          <Link className="back-btn " to="/">
            Back
          </Link>
        </div>
      </div>
    </>
  );
};

export default Display;
