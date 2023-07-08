const {PokemonType} = require('../../db')
module.exports = async ()=>{
    const response = await PokemonType.findAll()
    if(!response.length) throw Error()
    return response.map(type => type.name)
}
