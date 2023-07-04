const { Router } = require('express');
const router = Router();
const getPokemonsHandler = require('../handlers/getPokemonsHandler.js')
const getPokemonByNameHandler = require('../handlers/getPokemonByNameHandler.js')
const getPokemonByIdHandler = require('../handlers/getPokemonByIdHandler.js')
const postNewPokemonHandler = require('../handlers/postNewPokemonHandler.js')


router.get('/', getPokemonsHandler)
router.get('/name',getPokemonByNameHandler)              
router.get('/:id',getPokemonByIdHandler)
router.post('/',postNewPokemonHandler)

module.exports = router;
