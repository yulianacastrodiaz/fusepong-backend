const { Ticket } = require('../db');

function preloadTickets() {
  const tickets = [{
    comment: 'Crear modelo de categorias'
  }, {
    comment: 'Relacionar las categorias con los items'
  }, {
    comment: 'Ruta get de categorias'
  }, {
    comment: 'Ruta post de categorias'
  }, {
    comment: 'Formulario para crear una categoria'
  }]
  try {
    const newTickets = tickets.map(async (ticket) => {
      return await Ticket.create({
        comment: ticket.comment
      })
    })

    return Promise.all(newTickets)
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = preloadTickets;