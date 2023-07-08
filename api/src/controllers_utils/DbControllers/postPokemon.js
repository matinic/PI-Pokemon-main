const axios = require("axios");
const { Pokemon, PokemonType, Op } = require("../../db");

module.exports = async function postPokemon({
  name,
  image,
  hp,
  attack,
  deffense,
  speed,
  height,
  weight,
  types,
}) {
  const min = name.toLowerCase();
  const alreadyExist = await Pokemon.findOne({ where: { name: min } });
  if (alreadyExist) throw Error("El pokemon ya existe en la base de datos");
  const pokemon = await Pokemon.create({
    name: min,
    image,
    hp,
    attack,
    deffense,
    speed,
    height,
    weight,
  });
  const areThereTypes = await PokemonType.findAll();
  if (!areThereTypes.length) {
    await axios.get("http://localhost:3001/types");
  }
  const existingTypes = await PokemonType.findAll({
    where: {
      [Op.or]: types.map((name) => ({ name })),
    },
  });
  await pokemon.addPokemonTypes(existingTypes);
  const findedTypes = existingTypes.map((type) => type.name);
  return { ...pokemon.dataValues, types: findedTypes };
};
