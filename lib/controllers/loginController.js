const jwt = require('jsonwebtoken');
const { invalidCredentials, clientError } = require('../utils/errorHandler');
const User = require('../models/userModel');
const { USER_AUTH_TOKEN, Link } = require('../models/linksModel');

module.exports = {
  login: async (req, res) => {
    if (req.validateErrors.length) {
      clientError(res, { message: 'password require' });
    }

    const findUser = await User.selectUser(req.body.email);

    if (!findUser) {
      invalidCredentials(res);
    }

    const checkPassword = await User.checkUserPassword(
      findUser.password,
      req.body.password
    );

    if (!checkPassword) {
      invalidCredentials(res);
    }

    const token = jwt.sign({ user: findUser }, process.env.SECRET_KEY, {
      expiresIn: 3600 * 24,
    });

    Link.createLink({
      data: findUser.email,
      link: token,
      type: USER_AUTH_TOKEN,
    });

    res.status(200).json({ message: 'Login is successful', token });
  },
};
