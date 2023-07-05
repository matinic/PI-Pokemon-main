const axios = require("axios");
const { Pokemon, PokemonType, Op } = require("../db.js");

module.exports = async function postNewPokemonHandler(req, res) {
  const { name, image, hp, attack, deffense, speed, height, weight, types } =
    req.body;
  if ((!name, !image, !hp, !attack, !deffense, !types)) {
    return res
      .status(404)
      .json({
        message: "Faltan los datos necesarios para completar el pokemon",
      });
  } else if (!types.length) {
    res
      .status(404)
      .json({ messagge: "El pokemon debe tener al menos un type" });
  }
  try {
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
    const connected = await pokemon.addPokemonTypes(existingTypes);

    const findedTypes = existingTypes.map((type) => type.name);

    return res.status(201).json({ ...pokemon.dataValues, types: findedTypes });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
