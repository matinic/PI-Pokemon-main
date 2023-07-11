const { Router } = require('express');
const router = Router();
const getAll = require('../handlers/getAll')
const getById = require('../handlers/getById')
const getByName = require('../handlers/getByName')
const deleteById = require('../handlers/deleteById');
const putById = require('../handlers/putById');
const postPokemon = require('../handlers/postPokemon');

router.get('/', getAll)
router.get('/name',getByName)              
router.get('/:id',getById)
router.post('/',postPokemon)
router.delete('/:id',deleteById)
router.put('/',putById)

module.exports = router;
