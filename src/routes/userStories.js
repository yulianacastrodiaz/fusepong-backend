const { Router } = require('express');
const { User_story, Project, Ticket } = require('../db');
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

try {
  router.post('/', async (req, res) => {
    const { title, description, projectId } = req.body;
    const { comment } = req.body.ticket;
    if (!title) return res.status(404).json({ msg: 'Se necesita el titulo' });
    if (!description) return res.status(404).json({ msg: 'Se necesita la descripción' });
    if (!projectId) return res.status(404).json({ msg: 'Se necesita el id del proyecto' });
    if (!comment) return res.status(404).json({ msg: 'Se necesita el comentario del ticket' });
    const newUserStory = await User_story.create({
      title,
      description
    });
    const project = await Project.findByPk(projectId);
    if (!project) return res.status(404).json({ msg: 'El proyecto no existe' });
    await project.addUser_story(newUserStory);
    const newTicket = await Ticket.create({
      comment
    });
    await newUserStory.addTicket(newTicket);
    const aux = await User_story.findByPk(newUserStory.id);
    const allTickets = await Ticket.findAll({ where: { userStoryId: aux.id }, include: User_story });
    res.json({ userStory: aux, allTickets });
  });
} catch (error) {
  res.status(400).json(error);
}

module.exports = router;