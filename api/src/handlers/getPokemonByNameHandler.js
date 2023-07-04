const GetPokemon = require('../controllers_utils/getPokemon.js')
const axios = require('axios')
const { Op, Pokemon } = require('../db.js')

module.exports = async function getPokemonByNameHandler (req,res){
    const { name } = req.query;
    try{
        if(name){
            const min = name.toLowerCase();
            const pokemon = await Pokemon.findOne({where: {
                name: min
            }})
            if(!pokemon) throw Error()
            const records = await pokemon.getPokemonTypes();
            const types = records.map(record => record.name)
            return res.status(200).json({...pokemon.dataValues, types}) 
        }else{
            return res.status(400).json({message: "Faltan datos requeridos para realizar la búsqueda"})
        } 
    }catch(err){
        try{
            const pokename = name?.toLowerCase()
            const response = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokename}`)).data
            const pokemon = GetPokemon(response)
            return res.status(200).json(pokemon)
        }catch(err){
                return res.status(404).json({message: "Pokemon no encontrado 404"})
            }
        }
    }