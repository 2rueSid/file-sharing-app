const { unauthError } = require('../utils/errorHandler');
const User = require('../models/userModel');
const { Link } = require('../models/linksModel');

module.exports = {
  getCurrentUser: async (req, res) => {
    const { token } = req.body;

    const userToken = await Link.selectLink(token);

    if (!userToken) {
      unauthError(res);
    }

    const { password, ...user } = await User.selectUser(userToken.data);

    res.status(200).json({ user });
  },
};
