const { Pokemon } = require("../../db");
module.exports = async (id) => {
  const recordsDeleted = await Pokemon.destroy({
    where: { id: id },
  });
  return recordsDeleted;
};
