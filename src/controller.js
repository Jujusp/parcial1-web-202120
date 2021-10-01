const { response, request } = require("express");
const axios = require("axios");
const link =
    "https://gist.githubusercontent.com/jhonatan89/bc554ec3ded15407609714e8b7b8f1c8/raw/5ab1e3e5b45e99aabcbbdd30f55d2ae5eafb9cbe/nba-players";

const getPairsOfPlayers = async (req = request, resp = response) => {
  //Implementar logica aquí
  const data = await axios.get(link);
  return resp.json(await getPairs(data.data.values, Number(req.query.goal)));
};

const getName = (player) => {
  return `${player.first_name} ${player.last_name}`;
};

const getPairs = async (data, goal) => {
  let pairs = {};
  pairs.players = [];
  for (let i = 0; i < data.length; ++i) {
    for (let j = i + 1; j < data.length; ++j) {
      if (Number(data[i].h_in) + Number(data[j].h_in) == goal) {
        pairs.players.push([getName(data[i]), getName(data[j])]);
      }
    }
  }
  if (pairs.players.length == 0) {
    return { msg: "No matches found" };
  }
  return pairs;
};

module.exports = { getPairsOfPlayers };
