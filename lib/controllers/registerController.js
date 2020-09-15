const errorHandler = require('../utils/errorHandler');
const User = require('../models/userModel');
const Link = require('../models/linksModel');
const { sendAccoutnConfirmation } = require('../email/emailNotification');

module.exports = {
  addUser: async (req, res) => {
    try {
      if (req.validateErrors.length) {
        res.status(400).json(req.validateErrors);
      } else {
        const userData = req.body.user;
        const findUser = await User.selectUser(userData.email);

        if (!findUser) {
          const activationToken = await Link.generateToken();
          userData.password = await User.hashUserPassword(userData.password, 10);
          await User.createUser(userData);
          await Link.createLink({
            data: userData.email,
            lifetime: `${Date.now() + 86400000}`,
            link: activationToken,
            type: Link.activationLink,
          });
          await sendAccoutnConfirmation(userData.email, {
            userName: userData.name,
            link: activationToken,
          });
          res.status(200).json({
            message: 'new user is created',
            user: userData,
          });
        } else {
          res.status(400).json({ message: 'user with that email is allready exist' });
        }
      }
    } catch (e) {
      errorHandler.serverError(res, e);
    }
  },
};
