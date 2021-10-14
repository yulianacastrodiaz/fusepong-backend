const server = require('./src/app.js');
const { conn } = require('./src/db.js');

// Syncing all the models at once.
const PORT = process.env.PORT || 3001
const force = true;
try {
  conn.sync({ force })
    .then(() => {
      console.log('base de datos conectada! :D');
      server.listen(PORT, () => {
        console.log(`${PORT}`); // eslint-disable-line no-console
      });
    }).catch(e => {
      throw new Error(e)
    })
} catch (error) {
  throw new Error(error)
}