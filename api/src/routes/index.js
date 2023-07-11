const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokemonsRoutes = require('./pokemons.js')
const types = require('./types.js')
const login = require('./login.js')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/pokemons',pokemonsRoutes)
router.use('/types',types)
router.use('/login',login)


module.exports = router;
