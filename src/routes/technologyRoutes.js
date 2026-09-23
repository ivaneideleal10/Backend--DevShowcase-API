const express = require('express');
const router = express.Router();

const {
  createTechnology,
  getTechnologies
} = require('../controllers/technologyController');

router.post('/technologies', createTechnology);
router.get('/technologies', getTechnologies);

module.exports = router;