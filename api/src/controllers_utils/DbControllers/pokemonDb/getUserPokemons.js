const getUser = require("../userDbControllers/getUser")
const CreatedPokemon = require('../../../models/CreatedPokemon')
module.exports = async(userInfo)=>{
    const id = await getUser(userInfo)
    const userPokemons = await CreatedPokemon.findAll({
        where:{userId: id}
    })
    return userPokemons
}