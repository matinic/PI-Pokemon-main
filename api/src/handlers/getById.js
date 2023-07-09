const getPokemonById = require("../controllers_utils/ApiControllers/getPokemonById.js");
const getPokemonByIdDb = require("../controllers_utils/DbControllers/getPokemonByIdDb.js");

module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    const pokemon = await getPokemonById(id);
    return res.status(200).json(pokemon);
  } catch (error) {
    try {
      const pokemonDb = await getPokemonByIdDb(id);
      return pokemonDb;
    } catch (error) {
      return res
        .status(404)
        .json({ message: "No existe personaje con ese id" });
    }
  }
};
