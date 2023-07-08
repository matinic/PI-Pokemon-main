const { Pokemon, PokemonType } = require("../../db");
module.exports = async function getPokemonByIdDb(id) {
  const pokemon = await Pokemon.findByPk(id, {
    include: {
      model: PokemonType,
      as: "types",
      attributes: ["name"],
      through: { attributes: [] },
    },
  });
  return {
    ...pokemon.dataValues,
    types: pokemon.types.map((type) => type.name),
  };
};
