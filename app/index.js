const userRouter = require('./user/routes');
const litterStorageRouter = require('./litterstorage/routes');
const litterRouter = require('./litter/routes');

module.exports = app => {
  app.use('/user', userRouter);
  app.use('/litterstorage', litterStorageRouter);
  app.use('/litter', litterRouter);

  app.get('/', (req, res) =>
    res.send({
      success: true,
      data: Boolean(Math.round(Math.random())),
    })
  );
};
