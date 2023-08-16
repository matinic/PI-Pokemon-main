const getOnePokemon = require("../getOnePokemon");
const axios = require("axios");

module.exports = async function getPokemonById(id) {
    const { data } = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = getOnePokemon(data);
    return pokemon;
};
