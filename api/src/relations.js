// const {sequelize} = require('./db')
// const { Pokemon, Type, User, PokemonApi, Favorite } = sequelize.models;

// Pokemon.belongsToMany(Type, {through: 'pokemon_type', as:'types'})
// Type.belongsToMany(Pokemon, {through: 'pokemon_type', as:'types'}) 

// PokemonApi.belongsToMany(Type, {through: 'pokemonApi_type', as:'typesApi'})
// Type.belongsToMany(PokemonApi, {through: 'pokemonApi_type', as:'typesApi'})

// User.belongsToMany(PokemonApi, {through: 'user_pokemonApi', as:'favoritesApi'})
// PokemonApi.belongsToMany(User, {through: 'user_pokemonApi', as:'favoritesApi'})

// User.hasMany(Pokemon)//Un usuario tiene muchos pokemones(creados)
// Pokemon.belongsTo(User)//Un pokemon(creado) puede pertenecer a un usuario

// User.hasMany(Favorite)//Un usuario puede tener muchos favoritos de pokemones creados
// Favorite.belongsTo(User)//Los favoritos de los pokemones creados pueden pertenecer a un usuario

// Favorite.hasMany(Pokemon)//Una lista de favoritos puede tener muchos pokemones
// Pokemon.belongsTo(Favorite)//un pokemon creado puede pertenecer a una sola lista de favoritos