const { Link } = require('../models/linksModel');
const User = require('../models/userModel');
const { sendResetPassword } = require('../email/emailNotification');

module.exports = {
  activateAccount: async (req, res) => {
    const { token } = req.params;
    const linkFromDB = await Link.selectLink(token);

    if (linkFromDB) {
      if (linkFromDB.lifetime > Date.now()) {
        const user = await User.selectUser(linkFromDB.data);

        if (user) {
          await User.updateUser(user.email, { is_active: 1 });
          await Link.deleteLink(token);

          res
            .status(200)
            .json({ message: 'account is successfully activated' });
        }
      } else {
        await Link.deleteLink(token);
        res.status(400).json({ message: 'link lifetime has end' });
      }
    } else {
      res.status(400).json({ message: 'unknown link' });
    }
  },
  resetPasswordSendMail: async (req, res) => {
    const { email } = req.body;

    const user = await User.selectUser(email);
    if (user) {
      const resetToken = await Link.generateToken();
      await Link.createLink({
        data: user.email,
        lifetime: `${Date.now() + 86400000}`,
        link: resetToken,
        type: Link.resetLink,
      });
      await sendResetPassword(user.email, {
        link: resetToken,
      });
      res
        .status(200)
        .json({ message: 'email with reset instructions successfully sent' });
    } else {
      res.status(400).json({ message: 'can`t find user with that email' });
    }
  },
  resetUserPassword: async (req, res) => {
    const { token, newPassword } = req.body;
    const linkFromDB = await Link.selectLink(token);

    if (linkFromDB) {
      if (linkFromDB.lifetime > Date.now()) {
        const user = await User.selectUser(linkFromDB.data);

        if (user) {
          const newHashedPassword = await User.hashUserPassword(
            newPassword,
            10
          );

          await User.updateUser(user.email, { password: newHashedPassword });
          await Link.deleteLink(token);

          res.status(200).json({ message: 'password is successfully changed' });
        }
      } else {
        await Link.deleteLink(token);
        res.status(400).json({ message: 'link lifetime has end' });
      }
    } else {
      res.status(400).json({ message: 'unknown link' });
    }
  },
};
