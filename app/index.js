const userRouter = require('./user/routes');
const litterStorageRouter = require('./litterstorage/routes');

module.exports = app => {
  app.use('/user', userRouter);
  app.use('/litterstorage', litterStorageRouter);

  app.get('/', (req, res) =>
    res.send({
      success: true,
      data: Boolean(Math.round(Math.random())),
    })
  );
};
