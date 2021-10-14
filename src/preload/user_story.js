const { User_story } = require('../db');

function preloadUserStories() {
  const userStories = [{
    title: 'Producto(categoria)',
    description: '...poder agregar o sacar categorías de los items (los items deben poder aceptar múltiples categorías).'
  }, {
    title: 'Producto(detalles)',
    description: '...ver los detalles de un producto individual (incluida las fotos, descripciones, reviews, etc...), asi puede determinar si quiero ese producto o no.'
  }, {
    title: 'Producto(catálogo)',
    description: '...ver la lista completa de productos (catálogo), para ver todo lo disponible para comprar.'
  }, {
    title: "Definir los 10API's candidatas",
    description: "Se debe obtener un listado con nombre y características de 10 API's para scraping de ofertas de trabajo."
  }, {
    title: 'Desarrollar experimentos preliminares con una API',
    description: 'Se debe lograr estimar la cantidad de ofertas que puede entregar la API.'
  }, {
    title: 'Explorar datos generados por una API',
    description: 'Determinar filas y columnas innecesarias, distribución de variables de interés y comportamiento en el tiempo.'
  }, {
    title: 'Obtener acceso a las bases de datos',
    description: 'Definir fuentes del proyecto y asegurar el acceso de forma consistente.'
  }, {
    title: 'Exploración y análisis de datos',
    description: 'Analizar variables de interés y representar graficamente distribuciones y comportamiento temporal de los usuarios.'
  }, {
    title: 'Segmentación de clientes',
    description: 'Generar un modelo que permita crear conjuntos de usuarios diferentes para campañas de marketing.'
  }]
  try {
    const newUserStories = userStories.map(async (us) => {
      return await User_story.create({
        title: us.title.toLowerCase(),
        description: us.description.toLowerCase(),
      })
    })

    return Promise.all(newUserStories);
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = preloadUserStories;