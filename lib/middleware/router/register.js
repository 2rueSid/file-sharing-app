module.exports = {
  addUserValidate: (req, res, next) => {
    req.validateErrors = [];
    const { email } = req.body.user;
    if (!email) {
      req.validateErrors.push({
        type: 'req body',
        message: 'body must contain user data',
      });
    }
    next();
  },
};
