const { Pokemon, Type } = require("../../db");
module.exports = async (id) => {
  const pokemon = await Pokemon.findByPk(id, {
    include: {
      model: Type,
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
