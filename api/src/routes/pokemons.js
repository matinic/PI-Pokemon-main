const { Router } = require('express');
const router = Router();
const getAllPokemons = require('../handlers/getAllPokemons')
const getPokemonById = require('../handlers/getPokemonById')
const getPokemonByName = require('../handlers/getPokemonByName')
const postNewPokemon = require('../handlers/postNewPokemon')

router.get('/', getAllPokemons)
router.get('/name',getPokemonByName)              
router.get('/:id',getPokemonById)
router.post('/',postNewPokemon)

module.exports = router;
