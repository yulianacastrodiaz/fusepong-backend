const { Router } = require('express');
const { User_story } = require('../db');
const router = Router();

try {
  router.get('/', async (req, res) => {
    const { id } = req.query;
    if (id) {
      const userStoriesDb = await User_story.findAll({ where: { projectId: id } });
      if (userStoriesDb.length) {
        res.json(userStoriesDb)
      } else {
        res.status(404).json({ msg: 'Este proyecto no tiene user stories' });
      }
    } else {
      res.status(404).json({ msg: 'Se necesita el id del proyecto' });
    }
  })
} catch (error) {
  res.status(400).json(error);
}

module.exports = router;