const jwt = require('jsonwebtoken');
const errorHandler = require('../utils/errorHandler');
const User = require('../models/userModel');

module.exports = {
  login: async (req, res) => {
    try {
      if (req.validateErrors.length) {
        res.status(400).json(req.validateErrors);
      } else {
        const findUser = await User.selectUser(req.body.email);

        if (findUser) {
          const checkPassword = await User.checkUserPassword(findUser.password, req.body.password);

          if (checkPassword && findUser.is_active) {
            const token = jwt.sign(
              {
                user: findUser,
              },
              process.env.SECRET_KEY || 'secret',
              { expiresIn: 60 * 60 },
            );

            res.status(200).json({ message: 'login is successfull', token });
          } else {
            res.status(400).json({ message: 'Invalid credentials' });
          }
        } else {
          res.status(400).json({ message: 'Invalid credentials' });
        }
      }
    } catch (e) {
      errorHandler.serverError(res, e);
    }
  },
};
