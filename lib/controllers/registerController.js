const User = require('../models/userModel');
const { Link } = require('../models/linksModel');
const { sendAccoutnConfirmation } = require('../email/emailNotification');

module.exports = {
  addUser: async (req, res) => {
    if (req.validateErrors.length) {
      res.status(400).json(req.validateErrors);
      res.end();
    }

    const { password, ...userData } = req.body.user;

    const findUser = await User.selectUser(userData.email);

    if (findUser) {
      res
        .status(400)
        .json({ message: 'user with that email is allready exist' });
      res.end();
    }

    const hashedPassword = await User.hashUserPassword(password, 10);

    const userToSave = {
      password: hashedPassword,
      ...userData,
    };

    await User.createUser(userToSave);

    const activationToken = await Link.generateToken();

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
  },
};
