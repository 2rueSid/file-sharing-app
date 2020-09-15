const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');

const passportMdv = {
  passportJwt: passport => {
    passport.use(
      'jwt',
      new JwtStrategy(
        {
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
          secretOrKey: process.env.SECRET_KEY || 'secret',
        },
        async (payload, done) => {
          try {
            if (Object.values(payload.user).length) {
              return done(null, payload.user);
            }
            return done(null, false);
          } catch (e) {
            return done(e);
          }
        },
      ),
    );
  },
};

module.exports = passportMdv;
