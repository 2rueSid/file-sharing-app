const cors = require('cors');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const passportMdv = require('../middleware/passport/auth');

const appConfig = (app, express) => {
  app.use(cookieParser());
  app.use(
    cors({
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      credentials: true,
      origin: 'http://localhost:3000',
    }),
  );
  app.use(passport.initialize());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  passportMdv.passportJwt(passport);
};

module.exports = appConfig;
