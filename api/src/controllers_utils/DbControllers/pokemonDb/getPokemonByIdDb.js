const { Pokemon, Type } = require("../../../db");
module.exports = async (id) => {
  
  const pokemon = await Pokemon.findByPk(id,{
    include:{
      model: Type,
      attributes: ['name'],
      through:{
        attributes: []
      }
    }
  });
  return {
    ...pokemon.dataValues,
    types: pokemon.dataValues.types.map(t => t.name)
  }
};
