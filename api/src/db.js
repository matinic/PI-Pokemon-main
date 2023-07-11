require('dotenv').config();
const { Sequelize, Op } = require('sequelize');
const fs = require('fs');
const path = require('path');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/pokemon`,
   {
      logging: false, // set to console.log to see the raw SQL queries
      native: false, // lets Sequelize know we can use pg-native for ~30% more speed
   }
);
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
   .filter(
      (file) =>
         file.indexOf('.') !== 0 &&
         file !== basename &&
         file.slice(-3) === '.js'
   )
   .forEach((file) => {
      modelDefiners.push(require(path.join(__dirname, '/models', file)));
   });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
   entry[0][0].toUpperCase() + entry[0].slice(1),
   entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Pokemon, Type, User, PokemonApi, Favorite } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
Pokemon.belongsToMany(Type, {through: 'pokemon_type', as:'types'})
Type.belongsToMany(Pokemon, {through: 'pokemon_type', as:'types'}) 

PokemonApi.belongsToMany(Type, {through: 'pokemonApi_type', as:'typesApi'})
Type.belongsToMany(PokemonApi, {through: 'pokemonApi_type', as:'typesApi'})

User.belongsToMany(PokemonApi, {through: 'user_pokemonApi', as:'favoritesApi'})
PokemonApi.belongsToMany(User, {through: 'user_pokemonApi', as:'favoritesApi'})

User.hasMany(Pokemon)//Un usuario tiene muchos pokemones(creados)
Pokemon.belongsTo(User)//Un pokemon(creado) puede pertenecer a un usuario

User.hasMany(Favorite)//Un usuario puede tener muchos favoritos de pokemones creados
Favorite.belongsTo(User)//Los favoritos de los pokemones creados pueden pertenecer a un usuario

Favorite.hasMany(Pokemon)//Una lista de favoritos puede tener muchos pokemones
Pokemon.belongsTo(Favorite)//un pokemon creado puede pertenecer a una sola lista de favoritos

module.exports = {
   ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
   conn: sequelize, // para importart la conexión { conn } = require('./db.js');
   Op
};
