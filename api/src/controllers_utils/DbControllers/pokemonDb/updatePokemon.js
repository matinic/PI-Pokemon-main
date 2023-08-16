const { Pokemon } = require("../../../db");
module.exports = async (body) => {
  const updated = Pokemon.update(
    body,
    {
      where: { id: body.id },
    }
  );
  return updated;
};
