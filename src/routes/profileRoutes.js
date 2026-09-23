const express = require('express');
const router = express.Router();

const {
  createProfile,
  getProfileById
} = require('../controllers/profileController');

router.post('/profiles', createProfile);
router.get('/profiles/:id', getProfileById);

module.exports = router;