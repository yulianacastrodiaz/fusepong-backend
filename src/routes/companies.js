const { Router } = require('express');
const { Company } = require('../db');
const router = Router();

try {
  router.get('/', async (req, res) => {
    const allCompanies = await Company.findAll();
    if (allCompanies.length) {
      res.json(allCompanies);
    } else {
      res.status(404).json({ msg: 'No se encontraron compañías' });
    }
  });
} catch (error) {
  res.status(400).json(error);
}

module.exports = router;