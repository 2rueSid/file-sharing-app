module.exports = {
  serverError: (res, error) => {
    res.status(500).json({
      success: false,

      message: !error.message ? error : error.message,
    });
  },
  invalidCredentials: (res) => {
    res.status(403).json({ message: 'Invalid Credentials' });
    res.end();
  },
  clientError: (res, errors) => {
    res.status(400).json(errors);
    res.end();
  },
  unauthError: (res) => {
    res.status(401).json({ message: 'Unauthorized' });
    res.end();
  },
};
