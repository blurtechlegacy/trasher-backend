const express = require('express');
const authenticateMiddleware = require('../../middlewares/authenticateMiddleware');
const router = express.Router();

require('./model');

const controller = require('./controllers');

router.get('/', authenticateMiddleware, controller.getTypes);

router.get('/:id', authenticateMiddleware, controller.getType);

module.exports = router;
