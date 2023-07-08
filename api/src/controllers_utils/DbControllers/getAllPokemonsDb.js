const { Pokemon, PokemonType } = require("../../db");
module.exports = async function getAllPokemonsDb() {
  const pokemons = await Pokemon.findAll({
    include: {
      model: PokemonType,
      as: "types",
      attributes: ["name"],
      through: { attributes: [] },
    },
  });
  return pokemons.map((pokemon) => ({
    ...pokemon.dataValues,
    types: pokemon.types.map((type) => type.name),
  }));
};
