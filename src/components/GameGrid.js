import React from "react";
import "./GameGrid.css";
import { Link } from "react-router-dom";

function GameGrid({ games, handleEditComment }) {
  return (
    <div className="game-grid-container">
      {games && games.length > 0
        ? games.map((game) => {
            return (
              <div className="game" key={game._id}>
                <Link className="game-box" to={`/games/${game._id}`}>
                  <div className="game-name">{game.name}</div>
                  <img
                    className="game-img"
                    src={`./thumbnails/${game.imageUrl}`}
                    alt={game.name}
                  />
                </Link>
              </div>
            );
          })
        : null}
    </div>
  );
}

export default GameGrid;
