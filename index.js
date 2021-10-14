const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const preloadCompanies = require('./src/preload/company');
const preloadProjects = require('./src/preload/project');
const preloadTickets = require('./src/preload/ticket');
const preloadUserStories = require('./src/preload/user_story');
// Syncing all the models at once.
const PORT = process.env.PORT || 3001
const force = true;
try {
  conn.sync({ force })
    .then(async () => {
      console.log('base de datos conectada! :D');
      if (force) {
        const companies = await preloadCompanies();
        console.log('Preload of companies: done :)');
        const projects = await preloadProjects();
        console.log('Preload of projects: done :)');
        const user_story = await preloadUserStories();
        console.log('Preload of userStories: done :)');
        const tickets = await preloadTickets();
        console.log('Preload of tickets: done :)');
      }
      server.listen(PORT, () => {
        console.log(`${PORT}`); // eslint-disable-line no-console
      });
    }).catch(e => {
      throw new Error(e)
    })
} catch (error) {
  throw new Error(error)
}