module.exports = {
  objectValuesCheck: (req, res, next) => {
    const { file } = req;

    req.validateErrors = [];
    if (file.originalname) next();
    else {
      req.validateErrors.push({
        type: 'no data',
        message: 'request body must contains a name',
      });
      next();
    }
  },
  parseFileOriginalName: (req, res, next) => {
    const { file } = req;

    const extension = file.originalname.match(/\.[0-9a-z]+$/i)[0];
    const fileName = file.originalname.match(/([^\/]+)(?=\.\w+$)/)[0];
    req.file.extension = extension;
    req.file.filename = fileName;
    next();
  },
  parseSearchString: (req, res, next) => {
    if (req.params.searchString === '') {
      req.params.fileName = '';
      next();
    } else {
      const { searchString } = req.params;
      const fileNamePattern = /([^\/]+)(?=\.\w+$)/;

      req.params.fileName = searchString.match(fileNamePattern)
        ? searchString.match(fileNamePattern)[0]
        : undefined;
      if (!req.params.fileName) {
        req.params.fileName = searchString;
      }
      next();
    }
  },
};
