const { Router } = require('express');
const router = Router();
const getAll = require('../handlers/getAll')
const getById = require('../handlers/getById')
const getByName = require('../handlers/getByName')
const postNew = require('../handlers/postNew');
const deleteById = require('../handlers/deleteById');
const putById = require('../handlers/putById');

router.get('/', getAll)
router.get('/name',getByName)              
router.get('/:id',getById)
router.post('/',postNew)
router.delete('/:id',deleteById)
router.put('/',putById)

module.exports = router;
