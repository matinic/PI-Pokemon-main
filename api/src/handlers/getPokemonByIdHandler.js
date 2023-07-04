const { Pokemon } = require('../db.js')
const axios = require('axios')
const GetPokemon = require('../controllers_utils/getPokemon.js')

module.exports = async function getPokemonByIdHandler (req,res){
    const { id } = req.params;
    try{
        console.log(id)
        const pokemon = await Pokemon.findByPk(id);
        const records = await pokemon.getPokemonTypes();
        const types = records.map(record => record.name)
        return res.status(200).json({...pokemon.dataValues, types}) 
    }catch{
        try{
            const response = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data
            const pokemon = GetPokemon(response)
            return res.status(200).json(pokemon)
        }catch(err){
            return res.status(404).json({message: 'No existe personaje con ese id'})
        }
    }
}