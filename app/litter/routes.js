const express = require('express');
const authenticateMiddleware = require('../../middlewares/authenticateMiddleware');
const router = express.Router();

require('./model');

const controller = require('./controllers');

router.post('/', authenticateMiddleware, controller.createLitter);

module.exports = router;
