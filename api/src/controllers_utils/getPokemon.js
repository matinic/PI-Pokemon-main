const axios = require('axios');
module.exports = function GetPokemon(response){
    const {
        id,
        name,
        sprites:{other:{"official-artwork":{front_default}}},
        stats,
        height,
        weight,
        types,
    } = response;
    const hp = stats[0].base_stat;
    const attack = stats[1].base_stat;
    const deffense = stats[2].base_stat;
    const speed = stats[5].base_stat;
  
    return {
        id,
        name,
        image: front_default,
        hp,
        attack,
        deffense,
        speed,
        height,
        weight,
        types:  types.map(type => type.type.name)
    }

}