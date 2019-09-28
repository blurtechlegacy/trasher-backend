const express = require('express');
const authenticateMiddleware = require('../../middlewares/authenticateMiddleware');
const authenticateMiddlewareAdmin = require('../../middlewares/authenticateMiddlewareAdmin');
const router = express.Router();

require('./model');

const controller = require('./controllers');

router.post('/', authenticateMiddlewareAdmin, controller.createQrBulk);

module.exports = router;
