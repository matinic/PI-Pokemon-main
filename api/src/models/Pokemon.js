const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: () => uuidv4(),
    },
    name:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    image:{
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        isUrl: true,
      }
    },
    hp:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    attack:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    deffense:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    speed:{
      type: DataTypes.INTEGER,
    },
    height:{
      type: DataTypes.INTEGER,
    },
    weight:{
      type: DataTypes.INTEGER,
    },
 
  });
  
};
