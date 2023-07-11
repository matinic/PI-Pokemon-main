const axios = require("axios");
const { Type } = require("../../db");
module.exports = async () => {
  const response = (await axios.get("https://pokeapi.co/api/v2/type")).data
    .results;
  const name = response.map((type) => ({ name: type.name }));
  const created = await Type.bulkCreate(name);
  return created;
};
