const User = require('../models/userModel');
const { Link } = require('../models/linksModel');
const SharableFile = require('../models/sharableModel');
const { sendShareByEmail } = require('../email/emailNotification');

module.exports = {
  byEmail: async (req, res) => {
    const { email, fileId } = req.body;

    const user = await User.selectUser(email);
    if (user) {
      const shareToken = await Link.generateToken();
      await Link.createLink({
        data: fileId,
        lifetime: `${Date.now() + 86400000}`,
        link: shareToken,
        type: Link.shareLink,
      });

      await sendShareByEmail(user.email, {
        link: shareToken,
        userName: user.name,
      });

      res.status(200).json({ message: 'operation successfully' });
    } else {
      res.status(400).json({ message: 'can`t find user with that email' });
    }
  },
  shareFile: async (req, res) => {
    const { user } = req;

    const { token } = req.params;

    const linkFromDB = await Link.selectLink(token);
    if (linkFromDB) {
      if (linkFromDB.lifetime > Date.now()) {
        await SharableFile.shareFile({
          shared_file_id: linkFromDB.data,
          user_id: user.id,
        });
        await Link.deleteLink(token);
        res.status(200).json({ message: 'file is successfully shared' });
      } else {
        await Link.deleteLink(token);
        res.status(400).json({ message: 'link lifetime has end' });
      }
    } else {
      res.status(400).json({ message: 'unknown link' });
    }
  },
  generateLink: async (req, res) => {
    const { fileId } = req.params;

    if (fileId) {
      const shareToken = await Link.generateToken();
      await Link.createLink({
        data: fileId,
        lifetime: `${Date.now() + 86400000}`,
        link: shareToken,
        type: Link.shareLink,
      });
      res.status(200).json({
        message: 'link generated',
        link: `http://localhost:3000/dashboard/share/${shareToken}`,
      });
    } else {
      res.status(400).json({ message: 'unknown file id' });
    }
  },
};
