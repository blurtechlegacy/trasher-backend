const jwt = require('jsonwebtoken');
const passport = require('passport');
const { secret } = require('../../config/config');

const repository = require('./repository');

exports.tryWithJWT = (req, res) => {
  const payload = {
    id: req.user.id,
    username: req.user.username,
    role: req.user.role,
    address: req.user.address,
    bags: req.user.bags,
    points: req.user.points
  };
  res.success(payload);
};

exports.login = (req, res) => {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err || !user) {
      return res.loginError(user, info ? info.message : 'Login failed');
    }

    req.login(user, { session: false }, err => {
      if (err) {
        return res.send(err);
      }
      const payload = {
        id: user.id,
        username: user.username,
        address: user.address,
        bags: user.bags,
        role: user.role,
        points :user.points
      };
      const token = jwt.sign(payload, secret);
      repository
        .findUserByID(user.id)
        .then(user => user.set({ token: token }).save())
        .then(() => res.success({ user: payload, token }))
        .catch(err => res.serverError());
    });
  })(req, res);
};

exports.register = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const address = req.body.address;
  const role = req.body.role;

  if (!username) {
    return res.validationError({
      errors: [
        {
          path: 'username',
          message: 'Please pass username',
        },
      ],
    });
  }

  if (!password) {
    return res.validationError({
      errors: [
        {
          path: 'password',
          message: 'Please pass password',
        },
      ],
    });
  }

  repository.saveUser(
    {
      username,
      password,
      address,
      role
    },
    (err, data) => {
      if (err) {
        return res.validationError(err);
      }
      let user = {
        id: data._id,
        username: data.username,
        role: data.role,
        address: data.address,
        bags: data.bags,
        points: data.points
      };
      let token = jwt.sign(user, secret);
      data.token = token;
      data.save((err, data) => {
        let user = {
          id: data._id,
          username: data.username,
          role: data.role,
          address: data.address,
          bags: data.bags,
          points: data.points,
        };
        return res.success({
          message: 'Successful created new user',
          user: { ...user},
          token: data.token
        });
      });
    }
  );
};

exports.profile = async (req, res) => {
  const username = req.params.username;
  const user = await repository.findUserByUsername(username);
  return res.success(user);
};

exports.userExperience = async (req, res) => {
  const user = req.user;
  return res.success(user.experience);
};

exports.currentUser = async (req, res) => {
  const user_info = await repository.selectUserPublicInfo(req.user);
  return res.success(user_info);
};

exports.editProfile = (req, res) => {
  return repository.editUser(req.user, req.body, err => {
    if (err) {
      return res.validationError(err);
    }
    return res.success({ message: 'Successful edit profile' });
  });
};
