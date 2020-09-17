import React from "react";
import GameGrid from "./components/GameGrid";
import "./App.css";

import { getGames } from "./GameService";

function App() {
  const [originalGames, setOriginalGames] = React.useState([]);
  const [games, setGames] = React.useState(() => {
    fetchGames();

    return [];
  });
  const [searchQuery, setSearchQuery] = React.useState("");
  React.useEffect(() => {
    if (!searchQuery) {
      setGames(originalGames);
      return;
    }
    const filteredGames = originalGames.filter((game) => {
      const searchQueryLowerCase = searchQuery.toLowerCase();
      const gameNameLowerCase = game.name.toLowerCase();

      if (gameNameLowerCase.startsWith(searchQueryLowerCase)) {
        return true;
      }
    });
    setGames(filteredGames);
  }, [searchQuery]);

  function fetchGames() {
    getGames()
      .then((respone) => {
        setOriginalGames(respone.data);
        setGames(respone.data);
      })

      .catch((error) => {
        debugger;
      });
  }

  return (
    <div className="game">
      <h1 className="header">GAMER FORUMS</h1>
      <input
        type="text"
        placeholder="Search Games"
        className="search"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
      ></input>
      <GameGrid games={games} />
      {games.length === 0 ? <h3>No Results Found</h3> : null}
    </div>
  );
}
export default App;
