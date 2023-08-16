const getPokemonById = require("../../controllers_utils/ApiControllers/getPokemonById.js");
const getPokemonByIdDb = require("../../controllers_utils/DbControllers/pokemonDb/getPokemonByIdDb.js");
const uuid = require("uuid");

module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    if (uuid.validate(id)) {
      const pokemon = await getPokemonByIdDb(id);
      return res.status(200).json(pokemon);
    }
    const pokemon = await getPokemonById(id);
    return res.status(200).json(pokemon)
  } catch (error) {
    return res.status(404).json({ message: "No existe personaje con ese id" });
  }
};
