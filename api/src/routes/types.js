const { Router } = require('express');
const router = Router();
const axios = require('axios')
const {PokemonType} = require('../db.js')


router.get('/',async(req,res)=>{
    try{
       const response = await PokemonType.findAll()
       if(!response.length) throw Error()
       const types = response.map(type => type.name)
       return res.status(200).json(types)
    }catch(err){
        try{
            const response = (await axios.post("http://localhost:3001/types")).data
            const types = response.map(type => type.name)
            return res.status(200).json(response)
        }catch(err){
            return res.status(404).json({message: "No se ha podido encontrar los tipos"})
        }
    }
})


router.post('/',async(req,res)=>{
    try{
        const response  = (await axios.get('https://pokeapi.co/api/v2/type')).data.results
        const name = response.map( type => ({name: type.name})) 
        const created = await PokemonType.bulkCreate(name)
        return res.status(201).json(created)
    }catch(err){
        return res.status(400).json({message: "No se puedieron crear los registros"})
    }
})


module.exports = router;
