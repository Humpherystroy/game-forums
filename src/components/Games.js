import React from "react";
import "./Games.css";
import { Link } from "react-router-dom";

function Games({ games }) {
  return (
    <div className="game-container">
      <Link to={`/games/${games._id}`}>
        <img
          className="img
      "
          src={`./thumbnails/${games.imageUrl}`}
          alt={games.name}
          onError={(e) => (e.target.src = "./no-image.jpg")}
        />
        <div>{games.name}</div>
      </Link>
    </div>
  );
}

export default Games;
