const { Router } = require('express');
const router = Router();
const getAll = require('../handlers/pokemon/getAll')
const getById = require('../handlers/pokemon/getById')
const getByName = require('../handlers/pokemon/getByName')
const deleteById = require('../handlers/pokemon/deleteById');
const putById = require('../handlers/pokemon/updatePokemon');
const postPokemon = require('../handlers/pokemon/postPokemon');


router.get('/', getAll)
router.get('/name',getByName)              
router.get('/:id',getById)
router.post('/',postPokemon)
router.delete('/:id',deleteById)
router.put('/',putById)

module.exports = router;
