const { Router } = require('express');
const { Project, User_story } = require('../db');
const router = Router();

try {
  router.get('/', async (req, res) => {
    const { id } = req.query;
    if (id) {
      const projectsDb = await Project.findAll({ where: { companyId: id }, include: User_story });
      if (projectsDb.length) {
        res.json(projectsDb);
      } else {
        res.status(404).json({ msg: 'No se encontraron proyectos para esta' });
      }
    } else {
      res.status(400).json({ msg: 'Se necesita el id de la compañía' });
    }
  });
} catch (error) {
  res.status(400).json(error);
}

module.exports = router;