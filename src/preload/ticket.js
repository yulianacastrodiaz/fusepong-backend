const { Ticket } = require('../db');

function preloadTickets() {
  const tickets = [{
    comment: 'Crear modelo de categorias',
    state: "finished"
  }, {
    comment: 'Relacionar las categorias con los items',
    state: "finished"
  }, {
    comment: 'Ruta get de categorias',
    state: "active"
  }, {
    comment: 'Ruta post de categorias',
    state: "active"
  }, {
    comment: 'Formulario para crear una categoria',
    state: "active"
  }, {
    comment: 'Crear formulario para las APIs halladas',
    state: "finished"
  }, {
    comment: 'Diligenciamiento para la API findwork',
    state: "finished"
  }, {
    comment: 'Actualización del formulario',
    state: "active"
  }, {
    comment: 'Comunicación básica con la API findwork',
    state: "active"
  }, {
    comment: 'Revisión de literatura para determinar fuentes pertinentes',
    state: "finished"
  }, {
    comment: 'Configuraricón de los accesos a la base de datos usuarios y compras',
    state: "finished"
  }, {
    comment: 'Exploración de datos, usuarios',
    state: "active"
  }, {
    comment: 'Exploración de datos, compras',
    state: "active"
  }]
  try {
    const newTickets = tickets.map(async (ticket) => {
      return await Ticket.create({
        comment: ticket.comment,
        state: ticket.state
      })
    })

    return Promise.all(newTickets)
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = preloadTickets;