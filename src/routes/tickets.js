const { Router } = require('express');
const { Ticket } = require('../db');
const router = Router();

try {
  router.get('/', async (req, res) => {
    const { id } = req.query;
    if (id) {
      const ticketsDb = await Ticket.findAll({ where: { userStoryId: id } });
      if (ticketsDb.length) {
        res.json(ticketsDb);
      } else {
        res.status(404).json({ msg: 'No se encontraron tickets para esta user story' });
      }
    } else {
      res.status(404).json({ msg: 'Se necesita el id de la user story' });
    }
  });
} catch (error) {
  res.status(400).json(error);
}

module.exports = router;