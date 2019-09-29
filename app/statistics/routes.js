const express = require('express');
const authenticateMiddleware = require('../../middlewares/authenticateMiddleware');
const authenticateMiddlewareAdmin = require('../../middlewares/authenticateMiddlewareAdmin');
const router = express.Router();

const controller = require('./controllers');

router.get('/cities', authenticateMiddleware, controller.getCities);
router.get('/city/:city', authenticateMiddleware, controller.getLitterByCity);

module.exports = router;
