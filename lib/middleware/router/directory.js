module.exports = {
  objectValuesCheck: (req, res, next) => {
    const { directory } = req.body;

    req.validateErrors = [];
    if (directory.directory_name) next();
    else {
      req.validateErrors.push({
        type: 'no data',
        message: 'request body must contains a name',
      });
      next();
    }
  },
};
