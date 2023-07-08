const postPokemon = require("../controllers_utils/DbControllers/postPokemon");

module.exports = async function postNewPokemonHandler(req, res) {
  const { name, image, hp, attack, deffense, types } = req.body;
  if ((!name, !image, !hp, !attack, !deffense, !types)) {
    return res.status(404).json({
      message: "Faltan los datos necesarios para completar el pokemon",
    });
  } else if (!types.length) {
    res
      .status(404)
      .json({ messagge: "El pokemon debe tener al menos un type" });
  }
  try {
    const postedPokemon = await postPokemon(req.body);

    return res.status(201).json(postedPokemon);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
