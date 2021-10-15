const { Router } = require('express');
const { Ticket, User_story } = require('../db');
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

try {
  router.post('/', async (req, res) => {
    const { comment, userStoryId } = req.body;
    if (!userStoryId) return res.status(404).json({ msg: 'Se necesita el id de la user story' });
    if (comment) {
      const newTicket = await Ticket.create({
        comment
      });
      const userStoryDb = await User_story.findByPk(userStoryId);
      if (!userStoryDb) return res.status(404).json({ msg: 'No existe la user story' });
      await userStoryDb.addTicket(newTicket);
      const aux = await Ticket.findByPk(newTicket.id);
      res.json(aux);
    } else {
      res.status(404).json({ msg: 'Se necesita el comentario del ticket' });
    }
  });
} catch (error) {
  res.status(400).json(error);
}

module.exports = router;