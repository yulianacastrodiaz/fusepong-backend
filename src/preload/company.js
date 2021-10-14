const { Company } = require('../db');

function preloadCompanies() {
  const companies = [{
    name: 'fusepong',
    nit: '901000741-8',
    phone: '+57 3102189844',
    adress: 'CARRERA 45 A 127 76, BOGOTA, BOGOTA, COLOMBIA',
    email: 'proyectos@fusepong.com'
  }, {
    name: 'globant',
    nit: '901411533-6',
    phone: '+57 (1) 14891340',
    adress: 'AVENIDA CALLE 26 92 32 EDIFICIO GOLD 7 CENTRO EMPRESARIAL CONNECTA, BOGOTA, BOGOTA, COLOMBIA',
    email: 'hi@globant.com'
  }, {
    name: 'MercadoLibre Colombia',
    nit: '830067394-6',
    phone: '+57 7053050',
    adress: 'Carrera 17 No 93-09, piso 3, Bogotá D.C., Colombia',
    email: 'noreplypeople@mercadolibre.com'
  },]
  try {
    const newCompanies = companies.map(async (company) => {
      return await Company.create({
        name: company.name.toLowerCase(),
        nit: company.nit,
        phone: company.phone,
        adress: company.adress.toUpperCase(),
        email: company.email,
      })
    })

    return Promise.all(newCompanies)
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = preloadCompanies;