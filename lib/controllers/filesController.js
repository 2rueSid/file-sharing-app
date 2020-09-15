const Files = require('../models/filesModel');
const Share = require('../models/sharableModel');

module.exports = {
  selectAll: async (req, res) => {
    const { user } = req;
    const { folderId } = req.params;

    const selectedFiles = await Files.selectFilesWithShared(user.id, folderId);

    if (selectedFiles) {
      res.status(200).json({
        files: selectedFiles,
      });
    } else {
      res.status(200).json({ message: 'user has no files' });
    }
  },
  createFile: async (req, res) => {
    if (req.validateErrors.length) {
      res.status(400).json(req.validateErrors);
    } else {
      const { user } = req;
      const { file } = req;
      const { folder_id } = req.body;

      const newFile = {
        file_name: file.filename,
        file_extension: file.extension,
        user_id: user.id,
        memory: file.size,
      };

      const creatingFileResult = await Files.createFile(newFile);

      if (creatingFileResult) {
        await Share.shareFile({
          shared_file_id: creatingFileResult,
          user_id: user.id,
          directory_id: folder_id === 'undefined' ? null : folder_id,
        });

        res.status(200).json({
          message: 'file is created successfully',
          file: newFile,
        });
      }
    }
  },
  deleteFile: async (req, res) => {
    const { fileId } = req.body;
    const { user } = req;

    const [fileFromDb] = await Files.selectFile({ id: fileId });

    await Share.deleteSharedFile({ shared_file_id: fileId, user_id: user.id });
    if (fileFromDb.user_id === user.id) {
      await Files.deleteFile(fileId);
      res.status(200).json({ message: 'file is successfully deleted' });
    } else {
      res.status(400).json({ message: 'invalid data' });
    }
  },

  getUsedMemory: async (req, res) => {
    const { user } = req;

    const data = await Files.getUsedMemory(user.id);

    if (data) {
      res.status(200).json({
        usedMemory: data[0].memory,
      });
    } else {
      res.status(200).json({ usedMemory: 0 });
    }
  },

  searchFiles: async (req, res) => {
    const { user } = req;
    const { params } = req;

    const { fileName } = params;

    if (fileName) {
      const data = await Files.searchFiles(user.id, fileName);

      if (data) {
        res.status(200).json({ files: data, message: 'search successfully' });
      } else {
        res.status(200).json({ files: [] });
      }
    } else {
      res.status(400).json({ files: [] });
    }
  },
};
