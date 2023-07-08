const { Router } = require('express');
const router = Router();
const getTypes = require('../handlers/getTypes')
router.get('/',getTypes)





module.exports = router;
