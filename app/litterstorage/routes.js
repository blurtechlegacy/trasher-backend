const express = require('express');
const authenticateMiddleware = require('../../middlewares/authenticateMiddleware');
const authenticateMiddlewareAdmin = require('../../middlewares/authenticateMiddlewareAdmin');
const router = express.Router();

require('./model');

const controller = require('./controllers');

router.get('/', authenticateMiddleware, controller.getLS);

router.post('/', /*authenticateMiddlewareAdmin,*/ controller.createLS);

router.put('/:id/collect/', authenticateMiddlewareAdmin, controller.updateCollectDate);

module.exports = router;
