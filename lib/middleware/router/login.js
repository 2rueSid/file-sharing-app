module.exports = {
  loginValidate: (req, res, next) => {
    req.validateErrors = [];

    if (!req.body.email) {
      req.validateErrors.push({ type: 'req body', message: 'body must contains email' });
    }
    if (!req.body.password) {
      req.validateErrors.push({ type: 'req body', message: 'body must contain password' });
    }

    next();
  },
};
