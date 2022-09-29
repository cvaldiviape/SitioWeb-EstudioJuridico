const express = require('express');
const router = express.Router();
const controller = require('../controllers/index.controller');

router.get('/', controller.index);

router.post('/sendemail', controller.sendEmail);

module.exports = router;
