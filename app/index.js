const userRouter = require('./user/routes');

module.exports = app => {
  app.use('/user', userRouter);

  app.get('/', (req, res) =>
    res.send({
      success: true,
      data: Boolean(Math.round(Math.random())),
    })
  );
};
