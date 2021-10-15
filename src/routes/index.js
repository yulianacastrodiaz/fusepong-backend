const { Router } = require('express');
const router = Router();

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const companiesRouter = require('./companies');
const projectsRouter = require('./projects');
const ticketsRouter = require('./tickets');
const userStoriesRouter = require('./userStories');
const signupRouter = require('./signup');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/companies', companiesRouter);
router.use('/project', projectsRouter);
router.use('/tickets', ticketsRouter);
router.use('/userstories', userStoriesRouter);
router.use('/signup', signupRouter);

module.exports = router;