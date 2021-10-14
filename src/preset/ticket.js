const { User_story } = require('../db');
const { Ticket } = require('../db');

async function presetTickets() {
  try {
    const allTickets = await Ticket.findAll();
    const userStoryProductCategory = await User_story.findOne({ where: { title: 'producto(categoria)' } });
    const userStoryApis = await User_story.findOne({ where: { title: "definir los 10api's candidatas" } });
    const userStoryAccessToDb = await User_story.findOne({ where: { title: 'obtener acceso a las bases de datos' } });
    await userStoryProductCategory.addTickets([allTickets[0], allTickets[1], allTickets[2], allTickets[3], allTickets[4]]);
    await userStoryApis.addTickets([allTickets[5], allTickets[6], allTickets[7], allTickets[8]]);
    await userStoryAccessToDb.addTickets([allTickets[9], allTickets[10], allTickets[11], allTickets[12]]);
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = presetTickets;