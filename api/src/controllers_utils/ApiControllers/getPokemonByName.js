const getOnePokemon = require("../getOnePokemon");
const axios = require("axios");

module.exports = async (name) => {
  const pokename = name?.toLowerCase().trim();
  const { results } = (
    await axios(`https://pokeapi.co/api/v2/pokemon?limit=1281`)
  ).data;
  const pokemonsMatched = results.filter((pokemon) =>
    pokemon.name.startsWith(pokename)
  );
  const pokemonsMapped = await Promise.all(
    pokemonsMatched.map(async (pokemon) => {
      const response = (await axios(pokemon.url)).data;
      return getOnePokemon(response);
    })
  );
  return pokemonsMapped;
};

