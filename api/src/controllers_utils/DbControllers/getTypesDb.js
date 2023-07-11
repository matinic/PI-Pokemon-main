const { Type } = require("../../db");
module.exports = async () => {
  const response = await Type.findAll();
  if (!response.length) throw Error();
  return response.map((type) => type.name);
};
