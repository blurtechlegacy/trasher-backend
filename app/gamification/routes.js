const express = require('express');
const authenticateMiddleware = require('../../middlewares/authenticateMiddleware');
const authenticateMiddlewareAdmin = require('../../middlewares/authenticateMiddlewareAdmin');
const router = express.Router();

const controller = require('./controllers');

router.get('/', authenticateMiddleware, controller.getDataForUser);

router.get('/mapreduce', authenticateMiddleware, controller.getMapReduce);

module.exports = router;
