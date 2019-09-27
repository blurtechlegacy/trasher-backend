const express = require('express');
const authenticateMiddleware = require('../../middlewares/authenticateMiddleware');
const router = express.Router();

require('./model');

const controller = require('./controllers');

router.get('/city', authenticateMiddleware, controller.getLS);

module.exports = router;
