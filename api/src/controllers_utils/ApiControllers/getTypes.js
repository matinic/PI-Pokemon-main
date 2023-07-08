const axios = require("axios");
const { PokemonType } = require("../../db");
module.exports = async () => {
  const response = (await axios.get("https://pokeapi.co/api/v2/type")).data
    .results;
  const name = response.map((type) => ({ name: type.name }));
  const created = await PokemonType.bulkCreate(name);
  return created;
};
