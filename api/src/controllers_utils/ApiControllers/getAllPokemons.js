const axios = require("axios");
const getOnePokemon = require("../getOnePokemon");

module.exports = async ()=>{
    const {results} = (
      await axios(`https://pokeapi.co/api/v2/pokemon?limit=300`)
    ).data;
    const pokemons = await Promise.all(
      results.map(async (pokemon) => {
        const response = (await axios(pokemon.url)).data;
        return getOnePokemon(response);
      })
    );
    return pokemons;
};
