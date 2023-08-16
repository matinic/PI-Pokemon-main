const { Pokemon, Type } = require("../../../db");

module.exports = async () => {
  const pokemons = await Pokemon.findAll({
    include: {
      model: Type,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  return pokemons.map((pokemon) => ({
    ...pokemon.dataValues,
    types: pokemon.dataValues.types.map((t) => t.name),
  }));
};
