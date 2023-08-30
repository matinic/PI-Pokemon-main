const getPokemonByName = require("../../controllers_utils/ApiControllers/getPokemonByName");
const getPokemonByNameDb = require("../../controllers_utils/DbControllers/pokemonDb/getPokemonByNameDb");

module.exports = async (req, res) => {
  const { name } = req.query;
  if (!name)
    return res
      .status(400)
      .json({ message: "Faltan datos requeridos para realizar la búsqueda" });
  try {
    const pokemon = await getPokemonByName(name);
    const pokemonDb = await getPokemonByNameDb(name);
    return res
      .status(200)
      .json(
        [...pokemonDb, ...pokemon].sort((a, b) => a.name.localeCompare(b.name))
      );
  } catch (err) {
    return res.status(404).json({ message: "Pokemon no encontrado 404" });
  }
}; 
