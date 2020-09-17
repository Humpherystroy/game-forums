import axios from "axios";

// const BASE_URL = "http://localhost:3006";
const BASE_URL = " https://gamer-forums.herokuapp.com";
const getGames = () => {
  return axios.get(`${BASE_URL}/api/games`);
};

const getGame = (gameId) => {
  return axios.get(`${BASE_URL}/api/games/${gameId}`);
};

const createGame = (game) => {
  return axios.post(`${BASE_URL}/api/games`, game);
};

const updateGame = (gameId, game) => {
  return axios.put(`${BASE_URL}/api/games/${gameId}`, game);
};
const deleteGame = (gameId) => {
  return axios.delete(`${BASE_URL}/api/games/${gameId}`);
};

export { getGames, createGame, updateGame, deleteGame, getGame };
