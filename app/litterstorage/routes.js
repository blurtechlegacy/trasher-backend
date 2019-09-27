const express = require('express');
const authenticateMiddleware = require('../../middlewares/authenticateMiddleware');
const router = express.Router();

require('./model');

const controller = require('./controllers');

router.get('/', authenticateMiddleware, controller.getLS);

router.post('/', authenticateMiddleware, controller.createLS);

module.exports = router;
