const { Router } = require('express');
const router = Router();
const getUser = require('../handlers/getUser');
const postUser = require('../handlers/postUser');

router.get('/',getUser)
router.post('/',postUser)

module.exports = router;
