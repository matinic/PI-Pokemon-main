const GetPokemons = require('../controllers_utils/getPokemons.js')
const { Pokemon } = require('../db.js')
module.exports = async function getPokemonsHandler(req,res){
    try{
        const pokes = await GetPokemons();
        const pokesDbs = await Pokemon.findAll();

        //me genera un arreglo de de registros encontrados por cada pokemon
        const records = await Promise.all(pokesDbs.map(async (poke)=>(await poke.getPokemonTypes())))
        const types = records.map(rec => rec.map(record => record.name))
        let j = 0;
        let pokesDb = [];
        for(let poke of pokesDbs){
            pokesDb.push({...poke.dataValues,types:types[j]})
            j++
        }
        return res.status(200).json({pokes,pokesDb})

    }catch(err){
        return res.status(404).json({message: "No se pudo obtener los pokemones"})
    }
}