const axios = require('axios');
const GetPokemon = require('./getPokemon.js')
module.exports = async function GetPokemons(){
    try{
        let pokes = []
        let info = (await axios.get('https://pokeapi.co/api/v2/pokemon?limit=24')).data
        let results = info.results;
        for(let i = 0; i < results.length; i++){
            const response = (await axios.get(results[i].url)).data
            pokes.push(GetPokemon(response))
        }
        return pokes
    }catch(err){
        throw Error({message: "Error desde el controller"})
    }
};