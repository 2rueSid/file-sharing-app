const Directory = require('../models/directoryModel');

module.exports = {
  selectAll: async (req, res) => {
    const { user } = req;

    const { folder_id } = req.params;
    let fatherDirectoryId;
    if (folder_id === 'null') {
      fatherDirectoryId = null;
    } else {
      fatherDirectoryId = folder_id;
    }

    const selectedDirectory = await Directory.selectDirectory({
      user_id: user.id,
      father_directory: fatherDirectoryId,
    });
    if (selectedDirectory) {
      res.status(200).json({
        directory: selectedDirectory,
      });
    } else {
      res.status(200).json({ message: 'user has no folders', directory: [] });
    }
  },

  createDirectory: async (req, res) => {
    if (req.validateErrors.length) {
      res.status(400).json(req.validateErrors);
    } else {
      const { user } = req;
      const { directory } = req.body;

      const newDirectory = {
        directory_name: directory.directory_name,
        father_directory: directory.father_directory,
        user_id: user.id,
      };
      const creatingDirResult = await Directory.createDirectory(newDirectory);
      if (creatingDirResult) {
        res.status(200).json({
          message: 'folder is created successfully',
          directory: newDirectory,
        });
      }
    }
  },
  deleteDirectory: async (req, res) => {
    try {
      const { directoryId } = req.body;
      const { user } = req;

      if (!directoryId) {
        res.status(400).json({ message: 'directoryId is required' });
      }

      if (await Directory.selectDirectory({ user_id: user.id, id: directoryId })) {
        await Directory.removeRecursive(user.id, directoryId);
        res.status(200).json({ message: 'directory deleted' });
      }
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  },
};
